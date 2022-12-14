const connectToMongo = require("./db");
const express = require('express');
var cors = require('cors')
const session = require('express-session');
connectToMongo();
const app = express()
const port = 7000
const secret = process.env.SECRET || "secretyeah";
const sessionConfig = {
  secret,
  resave:false,
  saveUninitialized:true,
  cookie:{
    httpOnly:true,
    expires: Date.now() + 1000*60*60*24*3,
    maxAge: 1000*60*60*24*3
  }
}

app.use(cors())
app.use(express.json())
app.use(session(sessionConfig))
app.use('/api/auth',require('./routes/auth'));
app.use('/api/form',require('./routes/form'));

app.listen(port, () => {
    console.log(`Registration Form backend listening on port ${port}`)
  })