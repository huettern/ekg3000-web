pro3-web
========

Requires apache and php.

| folder |   |
|--------|---|
| css    | css style sheets |
| js     | javascipt sources |
| server | server sources |


##Installation
```sh
sudo apt-add-repository ppa:mosquitto-dev/mosquitto-ppa
sudo apt install mosquitto
mosquitto -deamon -verbose

sudo mkdir -p /var/www/ekg3000/public_html
sudo cp server/config/ekg3000.conf /etc/apache2/sites-available/
cp server/*.php /var/www/ekg3000/public_html
```

Add mysql user ekg3000

```sh
mysql -u root -p ekg3000 < server/config/ekg3000.sql
```

##Python

Install pythom mysql connector https://pypi.python.org/pypi/mysql-connector-python/2.0.4
```
wget http://cdn.mysql.com/Downloads/Connector-Python/mysql-connector-python-2.0.4.zip#md5=3df394d89300db95163f17c843ef49df
unzip mysql-connector-python-2.0.4.zip
cd mysql-connector-python-2.0.4/
python3.5 setup.py build
sudo python3.5 setup.py install

```

