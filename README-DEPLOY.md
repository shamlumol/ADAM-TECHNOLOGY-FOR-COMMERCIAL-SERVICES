# Adamtech Website Deployment Guide

**Hello Deployment Team!** 
This is a lightweight Node.js application. The React frontend is already pre-built into static files, so you do not need to compile or build anything for the frontend. The Node.js backend automatically serves the frontend static files.

**Domain:** `adamtechcommercial.com`
**Port:** The application runs on Port `5000`.

---

##  How to Run the Application

### 1. Prerequisites
You only need to have **Node.js (v18 or v20)** installed on your server. No database setup is required (the app uses local JSON storage).

### 2. Install Dependencies
Open your terminal, navigate to the `backend` folder, and install the required Node packages:
```bash
cd backend
npm install
```

### 3. Start the Server
Start the server using `pm2` (recommended to keep it running in the background) or simply using node:
```bash
# Option A: Using PM2 (Recommended for production)
npm install -g pm2
pm2 start server.js --name "adamtech"
pm2 save

# Option B: Standard Node execution
node server.js
```
it will show......
*The app is now running on `http://localhost:5000`.*

---

## Setting up Nginx (Reverse Proxy)
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

##  File Structure Notes for Backups
- **Database:** All car fleet data is stored inside `backend/data.json`.
- **Images:** All uploaded car images are stored inside `backend/public/uploads/`.
- Ensure these two locations are included in any server backup scripts!
