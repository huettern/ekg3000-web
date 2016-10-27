

## Requrements

Requires Python > 3.3

Install on RPi: http://bohdan-danishevsky.blogspot.ch/2015/10/building-python-35-on-raspberry-pi-2.html

	pip install hbmqtt

Install mosquitto on rpi
	wget http://repo.mosquitto.org/debian/mosquitto-repo.gpg.key
	sudo apt-key add mosquitto-repo.gpg.key
	cd /etc/apt/sources.list.d/
	sudo wget http://repo.mosquitto.org/debian/mosquitto-wheezy.list
	cd
	sudo apt-get update
	sudo apt-get install mosquitto
