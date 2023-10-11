const conn = require('./mysql');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3301;
const session = require('express-session');
const cookie = require('cookie-parser');
const FileStore = require('session-file-store')(session);
const LoginRoutes = require('./routes/login');
const RegisterRoutes = require('./routes/register');

app.use(cors({
  origin: 'http://localhost:3000',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,

}));
app.use(express.json());
// app.use((req,res,next)=>{
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// })
// console.log(require('dotenv').config('./env'))
app.use(cookie());
app.use(session({
  store: new FileStore,
  secret: 'mySecret',
  name: 'sid',
  cookie: { maxAge: 60 * 60 * 1000, httpOnly: true },
  saveUninitialized: false,
  resave: true,
}))

// app.use('/users', require('./routes/users'));
app.use('/login', LoginRoutes);
app.use('/register', RegisterRoutes);

// app.post('/users', (req, res, next) => {

//   conn.query(`UPDATE user SET \`user_age\`='${req.query.age}' WHERE user_id='${req.query.id}' `, (err, row) => {
//     if (err) {
//       res.status(403);
//       res.json([]);

//     }
//     res.status(200);

//     res.json(req.query);
//   })
// })


app.use('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.send('logout' + err)
  })
})
app.get('/login1', (req, res) => {
  req.session.s = req.sessionID;
  res.cookie('key', 'v', { httpOnly: false })
  res.send('123');
})







//404 處理
app.use((req, res) => {
  res.status(404).send('404 Not Found!');
})
app.listen(port, () => {
  console.log(`APP LISTENING AT ${port}!`);
})
// app2.listen('3000',()=>console.log('3000 listening'))