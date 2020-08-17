const express = require('express');
const path = require('path');
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const cors = require('cors');
const app = express();
const port = 8888;

open({
  filename: '../database/chatroom.db',
  driver: sqlite3.Database
}).then(db => {
  // do your thing
  app.use(cors({
    origin: '*',
    credentials: true
  }));
  app.use(express.static(path.join(__dirname, 'static')));
  app.use(express.urlencoded({ extended: true}));
  app.use(express.json());

  app.post('/login', async (req, res, next) => {
      console.log(req.body);
      const username = req.body.username;
      const password = req.body.password;
      const loginUser = await db.get("select * from users where username = ? and password = ?", username, password);

      if (loginUser) {
          res.json({
              flag: 0,
              msg: '登录成功'
          });
      } else {
          res.json({
              flag: 1,
              msg: '用户名或密码错误'
          });
      }
  });

  app.post('/register', async (req, res, next) => {
      console.log(req.body);
      const username = req.body.username;
      const password = req.body.password;
      const email = req.body.email;
      const is_username_exist = await db.get("select * from users where username = ?", username);
      const is_email_exist = await db.get("select * from users where email = ?", email);
      if (is_username_exist || is_email_exist) {
          res.json({
              flag: 1,
              msg: '用户名或邮箱已被使用'
          });
      } else {
          await db.run("insert into users (username, password, email) values(?, ?, ?)", username, password, email);
          res.json({
              flag: 0,
              msg: '注册成功'
          });
      }
  });

  app.listen(port, () => console.log('server listening on port ', port));
}).catch(() => {});