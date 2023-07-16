var express = require("express"),
mongoose = require("mongoose"),
bodyParser = require("body-parser"),
path = require("path"),
env = require("dotenv/config"),
cheerio = require('cheerio'),
axios = require("axios"),
requests = require('request');

app = express();
const port = process.env.port || 3000;
mongoose.connect("mongodb://localhost:27017/Ecommerse");



app.use(express.static(path.join(__dirname,'public'))); 
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(require("./src/routes/index"));


app.listen(port,()=>{
    console.log(`Port is running at ${port}`);
})