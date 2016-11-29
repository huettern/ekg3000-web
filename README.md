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