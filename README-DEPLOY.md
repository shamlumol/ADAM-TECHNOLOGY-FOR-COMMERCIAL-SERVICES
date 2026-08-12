# Adamtech Website Deployment Guide

**Hello Deployment Team!** 
To make this incredibly simple, the entire website has been packaged so that it can be launched with a single command. 

**Here is how it works:**
1. The complex "React frontend" has already been compiled into simple static HTML/CSS files. You do not need to build it or worry about it.
2. The entire application (both the frontend website and the backend data) runs through one single Node.js server. 
3. There is no external database to configure. All data is saved inside a local `data.json` file.

**Domain:** `adamtechcommercial.com`
**Port:** The application runs on Port `5000`.

---

## 🚀 How to Run the Application

### 1. Prerequisites
You only need to have **Node.js (v18 or v20)** installed on your server.

### 2. Start the Server
Open your terminal inside this root folder (where this README is located) and run this single command:
```bash
npm start
```

*Note: If you want to keep the app running permanently in the background, you can install PM2 (`npm install -g pm2`) and run:*
```bash
npm install -g pm2
pm2 start npm --name "adamtech" -- start
pm2 save
```
*The app is now running on `http://localhost:5000`.*

---

## 🌐 Setting up Nginx (Reverse Proxy)
To expose this to the web via your domain, set up an Nginx reverse proxy that forwards Port 80/443 traffic to Port 5000.

Create a config file `/etc/nginx/sites-available/adamtech` and paste this block:

```nginx
server {
    listen 80;
    server_name adamtechcommercial.com www.adamtechcommercial.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site and restart Nginx:
```bash
ln -s /etc/nginx/sites-available/adamtech /etc/nginx/sites-enabled/
systemctl restart nginx
```

## 📁 File Structure Notes for Backups
- **Database:** All car fleet data is stored inside `backend/data.json`.
- **Images:** All uploaded car images are stored inside `backend/public/uploads/`.
- Ensure these two locations are included in any server backup scripts!
