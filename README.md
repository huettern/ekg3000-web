pro3-web
========

Requires apache and php.

| folder |   |
|--------|---|
| css    | css style sheets |
| js     | javascipt sources |
| server | server sources |

## Web setup
Create database:

	mysql -u root -p < ekg3000web.sql

## Install MQTT server
```sh
sudo apt-add-repository ppa:mosquitto-dev/mosquitto-ppa
sudo apt install mosquitto
mosquitto -deamon -verbose
```

## Server setup
View README.md in the server/ folder.