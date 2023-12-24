const express = require('express')
const cors = require("cors");
const connectToMongoDB = require('./db')
const router = require('./routes/mobiles')
const app = express()
const config = require("dotenv").config;
config({ path: ".env" });
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));


connectToMongoDB();
app.use("",router);
app.listen(process.env.PORT,()=>{
    console.log('Server is running on PORT ${process.env.PORT');
})
