const express = require('express')
const cors = require("cors");
const connectToMongoDB = require('./db')
const router = require('./routes/mobiles')
const app = express()
const config = require("dotenv").config;
config({ path: ".env" });
app.use(cors({
  origin: 'https://mobile-full-stack-app-frontend.onrender.com/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));


connectToMongoDB();
app.use("",router);
app.listen(process.env.PORT,()=>{
    console.log('Server is running on PORT ${process.env.PORT');
})
