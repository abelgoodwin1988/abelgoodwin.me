sudo apt update
sudo ufw add 'OpenSSH'
sudo add-apt-repository ppa:certbot/certbot
sudo apt install npm
sudo apt install nginx
sudo ufw add 'Nginx HTTP'
sudo ufw add 'Nginx HTTPS'
sudo git clone https://github.com/abelgoodwin1988/abelgoodwin.me.git /var/www/abelgoodwin.me
cd /var/www/abelgoodwin.me/
sudo npm install
sudo npm run build
cd ~
sudo apt-get install python-certbot-nginx