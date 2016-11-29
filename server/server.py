#!/usr/bin/python3.5

import logging
import asyncio
import atexit
import re
import json
import datetime
import mysql.connector

from hbmqtt.client import MQTTClient, ConnectException, ClientException
from hbmqtt.mqtt.constants import *


url = 'mqtt://localhost:1883/';
topic = 'ekg3000/emulator'
fileroot = '/home/ekg3000/files'

mysqlconfig = {
  'user': 'ekg3000',
  'password': 'n4O13YsX1wn686hk',
  'host': '127.0.0.1',
  'database': 'ekg3000',
}


logger = logging.getLogger(__name__)

samplers=[]
C = None

class ekgJson:
	device = ''
	fname = ''
	data = []
	nsamples = 0
	samplerate = 0

class Sampler:
	device = ''
	samples = []
	samplerate = 0

	def addSample(self, samplemsg):
		for s in samplemsg:
			self.samples.append(float(s))

	def writeJson(self):
		obj = ekgJson()
		obj.device = self.device
		obj.data = self.samples
		obj.nsamples = len(self.samples)
		obj.samplerate = self.samplerate
		jmsg = json.dumps(obj.__dict__)
		# write file
		self.fname = "%s/%s:%s.json" % (fileroot, self.device, datetime.datetime.now().isoformat())
		f = open(self.fname, 'w+')
		f.write(jmsg)
		f.close()

	def writeDB(self):
		# connect db
		cnx = mysql.connector.connect(**mysqlconfig)
		cursor = cnx.cursor()
		# first check if the device is already present
		query = ("SELECT id,name FROM devices")
		cursor.execute(query)
		deviceAvailable = False
		for (deviceid, name) in cursor:
			if name == self.device:
				deviceAvailable = True
				devid = deviceid
		if deviceAvailable == False:
			# create device
			query = ( "INSERT INTO  `ekg3000`.`devices` ("
				"`id` ,`name`)"
				"VALUES (NULL ,  '%s');" % (self.device))
			cursor.execute(query)
			devid = cursor.lastrowid
			cnx.commit()
		# create file entry
		query = ( "INSERT INTO  `ekg3000`.`dataset` ("
			"`id` ,`device` ,`file` ,`time` ,`dev_id`)"
			"VALUES (NULL ,  '%s', '%s', CURRENT_TIMESTAMP, %d);" 
			% (self.device, self.fname, devid))
		cursor.execute(query)
		cnx.commit()
		cursor.close()
		cnx.close()


def getSamplerByDevice(devname):
	for smp in samplers:
		if smp.device == devname:
			return smp



def process_packet(packet):
	# extract topic
	topic = packet.variable_header.topic_name
	device = topic.split("/")[-1]
	# extract data
	data = str(packet.payload.data)
	data = (re.findall(r"'(.*?)'", data, re.DOTALL))[0]
	print(data)
	# decide what was sent
	if data.find("sstart") == 0:
		# sample start sent, create new sampler
		print("sstart received")
		smp = Sampler()
		smp.device = device
		fs = [int(s) for s in data.split(" ") if s.isdigit()][0]
		smp.samplerate = fs
		samplers.append(smp)
	if data.find("ssample") == 0:
		# samples sent
		print("samples received")
		getSamplerByDevice(device).addSample(data.split(" ")[1:])
	if data.find("sstop") == 0:
		# sample end sent
		print("sstop received")
		getSamplerByDevice(device).writeJson()
		getSamplerByDevice(device).writeDB()

@asyncio.coroutine
def uptime_coro():
	C = MQTTClient()
	yield from C.connect(url)
	# Subscribe to '$SYS/broker/uptime' with QOS=1
	yield from C.subscribe([('ekg3000/#', QOS_0)])
	logger.info("Subscribed")
	try:
		while True:
			message = yield from C.deliver_message()
			packet = message.publish_packet
			print("%s => %s" % (packet.variable_header.topic_name, str(packet.payload.data)))
			process_packet(packet)
		yield from C.unsubscribe('ekg3000/#')
		logger.info("UnSubscribed")
		yield from C.disconnect()
	except ClientException as ce:
		logger.error("Client exception: %s" % ce)


if __name__ == '__main__':
	formatter = "[%(asctime)s] {%(filename)s:%(lineno)d} %(levelname)s - %(message)s"
	logging.basicConfig(level=logging.INFO, format=formatter)
	asyncio.get_event_loop().run_until_complete(uptime_coro())


@atexit.register
def goodbye():
	print ("You are now leaving the Python sector.")
	try:
		yield from C.unsubscribe('ekg3000/#')
		logger.info("UnSubscribed")
		yield from C.disconnect()
	except:
		logger.error("Client exception")
