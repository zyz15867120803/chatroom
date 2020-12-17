const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const port = 8888;

const mailTransport = nodemailer.createTransport({
  //host: 'smtp.qq.email',
  service: 'qq',
  secure: true,
  auth: {
      user: '849246870@qq.com',
      pass: 'pxnbloburanvbeaj'
  }
});

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
  // 登录
  app.post('/login', async (req, res, next) => {
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
  // 注册
  app.post('/register', async (req, res, next) => {
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
  // 获取验证码
  app.post('/verification', async (req, res, next) => {
      const username = req.body.username;
      const result = await db.get("select email from users where username = ?", username);
      if (result) {
        const options = {
          from: '849246870@qq.com',
          to: result.email,
          subject: 'chatroom密码重置验证码',
          text: '1111'
        };
        mailTransport.sendMail(options, (err, msg) => {
          if (err) {
            res.json({
              flag: 1,
              msg: '验证码发送失败，请重试'
            });
          } else {
            res.json({
              flag: 0,
              msg: '验证码已发送至邮箱，请注意查收'
            });
          }
        });
      } else {
          res.json({
              flag: 1,
              msg: '该用户不存在，请检查用户名输入是否正确'
          });
      }
  });

  // 用户确认
  app.post('/usercheck', (req, res, next) => {

  });

  // 更改密码
  app.post('/changepwd', async (req, res, next) => {

  });

  // 获取HTML页面
  app.get('/' , (req, res, next) => {

  });

  app.listen(port, () => console.log('server listening on port ', port));
}).catch(() => {});