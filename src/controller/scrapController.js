var express = require("express"),
    mongoose = require("mongoose"),
    cheerio = require('cheerio'),
    axios = require("axios");
requests = require('request');

var allData = "Given information is incorrect";
var myurl = "null";
var myclass = "null";
var mytype = "null";
const home = async(req,res)=>{
    res.render("home");
}
const homePost = async(req,res)=>{
     myurl = req.body.url;
     myclass = req.body.myclass;
     mytype = req.body.mytype;
     //console.log(mytype);
     res.redirect("/show")
    
}

const show = async (req, res) => {
    async function getData() {
        var showData = [];
        try {
            const siteurl = myurl;
            const response = await axios({
                method: "GET",
                url: siteurl,
            })
            const $ = cheerio.load(response.data);
            var list = $(mytype+myclass).text().replace(/\n/g, "");
            allData = list;
           // console.log(list);
           res.render("show", { data: allData });
        } catch (error) {
            console.log(error);
            res.render("show", { data: allData });
        }
    }
    getData();
}

module.exports = {homePost,home,show };