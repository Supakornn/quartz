---
tags:
  - sit-kmutt
---
### VM preparation

update & upgrade all package

```shell
sudo apt update -y && sudo apt upgrade -y
```

install needed packages

```shell
sudo apt install nginx -y
sudo apt install nodejs -y
sudo apt install mysql-server -y
sudo apt install npm -y
```

open firewall port

```shell
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

---

### Setup Database

create user credential

```shell
sudo mysql

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'pass123';
FLUSH PRIVILEGES;

// if mysql_native_password error use this insted
CREATE USER 'user'@'localhost' IDENTIFIED BY 'pass123';
GRANT ALL PRIVILEGES ON mydb.* TO 'expressuser'@'localhost';
FLUSH PRIVILEGES;

exit
```

create database and table

```shell
sudo mysql -u root -p

CREATE DATABASE mydb;
USE mydb;

CREATE TABLE students (
    student_id   VARCHAR(20) PRIMARY KEY,
    first_name   VARCHAR(50) NOT NULL,
    last_name    VARCHAR(50) NOT NULL,
    faculty      VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20)
);

INSERT INTO students (student_id, first_name, last_name, faculty, phone_number)
VALUES
('65010001', 'Somchai', 'Sukjai', 'Engineering', '0812345678'),
('65010002', 'Suda', 'Thongdee', 'Science', '0898765432'),
('65010003', 'Anan', 'Meechai', 'Business', '0823456789');

exit
```

testing

```sql
show databases;
use mydb;
show tables;
select * from students;
```

---

### Setup Backend

create backend directory

```shell
sudo mkdir /srv/backend
cd /srv/backend
```

install mysql & express

```shell
sudo npm init -y
sudo npm i mysql2 express
```

create js file

```shell
sudo vim index.js | sudo nano index.js
```

```js
const express = require("express");
const mysql = require("mysql2");

const app = express();
const db = mysql.createConnection({ host:"localhost", user:"root", password:"pass123", database:"mydb" });

app.get("/students", (req,res) => {
  db.query("SELECT * FROM students", (err,rows) => res.json(rows));
});

app.listen(3000);
```

create service file

```shell
sudo vim /etc/systemd/system/backend.service | sudo nano /etc/systemd/system/backend.service
```

```shell
[Unit]
After=network.target

[Service]
WorkingDirectory=/srv/backend/
ExecStart=/usr/bin/node index.js
Restart=always

[Install]
WantedBy=multi-user.target
```

enable and start service

```shell
sudo systemctl enable backend
sudo systemctl start backend
sudo systemctl status backend
```

testing

```shell
curl localhost:3000/students
```

---
### Setup nginx

add reverse proxy to nginx

```shell
sudo vim /etc/nginx/sites-available/default | sudo nano /etc/nginx/sites-available/default
```

```shell
location /api/ {
	proxy_pass http://127.0.0.1:3000;
	proxy_set_header Host $host;
	proxy_set_header X-Real-IP $remote_addr;
}
```

reload config

```shell
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx
```

---
### Setup Frontend

```shell
cd /var/www/html
sudo vim index.html | sudo nano index.html
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <table border="1" id="tbl">
    <thead>
      <tr>
        <th>Student ID</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Faculty</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody id="tbody"></tbody>
  </table>
  <script>
    fetch('/api/students')
      .then(r => r.json())
      .then(data => {
        const tbody = document.getElementById('tbody');
        data.forEach(s => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${s.student_id}</td>
            <td>${s.first_name}</td>
            <td>${s.last_name}</td>
            <td>${s.faculty}</td>
            <td>${s.phone_number}</td>
          `;
          tbody.appendChild(tr);
        });
      });
  </script>
</body>
</html>
```

---