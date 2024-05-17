# Bayava Yoga

## pnpm Commands

| npm command | pnpm equivalent |
| ----------- | ----------- |
| `npm install` | `pnpm install` |
| `npm i \<pkg>` | `pnpm add \<pkg>` |
| `npm run \<cmd>` | `pnpm \<cmd>` |

## Setup

- `pnpm i`
- `pnpm run dev`

## Deploy

`bayava-yoga-private-key.pem` is a private key file that is used to authenticate the user to the server.

```bash
chmod 400 "bayava-yoga-private-key.pem"
```

```bash
ssh -i "bayava-yoga-private-key.pem" ubuntu@ec2-3-27-17-172.ap-southeast-2.compute.amazonaws.com
```

### Update Ubuntu 20.04

```bash
sudo apt update
```

### Install Node.js 20.x

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
```

```bash
sudo apt-get install -y nodejs
```

### Update npm version

```bash
sudo npm install -g npm@10.8.0
```

### Install pnpm

```bash
sudo npm install -g pnpm
```

### Check pnpm version

```bash
pnpm -v
```

### Install Nginx

```bash
sudo apt install nginx -y
```

### Clone the Project from GitHub

```bash
git clone https://github.com/Grenud/bayava-yoga.git
```

### Backend Server Deployement

#### Install the Project Dependencies

```bash
cd bayava-yoga/server
```

```bash
pnpm i
```

> Note: You need to add `.env` file in the `server` directory.

#### Install PM2

```bash
sudo npm i pm2 -g
```

#### Start Server Even after System Reboot

```bash
sudo systemctl enable pm2-ubuntu
```

```bash
pm2 startup
```

```bash
pm2 save
```

To setup the Startup Script, copy/paste the following command:

```bash
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
```

#### Start PM2 Project

```bash
pm2 start app.js
```

### Frontend Server Deployement

```bash
ssh -i "bayava-yoga-private-key.pem" ubuntu@ec2-13-211-240-155.ap-southeast-2.compute.amazonaws.com
```

```bash
cd /var/www/html
```

```bash
git clone https://github.com/Grenud/bayava-yoga.git
```

```bash
cd bayava-yoga/client
```

```bash
pnpm i
```

```bash
pnpm build
```

```bash
sudo cp -r ./dist/* /var/www/html
```

#### Make a file in `/etc/nginx/sites-available` directory and paste the following code

```bash
# Virtual Host configuration for <domain-name>
server {
       listen 80;
       listen [::]:80;
#       server_name <domain-name>;
       root /var/www/html/;
       index index.html;
       location / {
               try_files $uri $uri/ /index.html;
       }
}
```

#### Create a symbolic link between `/etc/nginx/sites-available/bayava.conf` file and `/etc/nginx/sites-enabled` directory

```bash
ln -s /etc/nginx/sites-available<filename>.conf /etc/nginx/sites-enabled
```
