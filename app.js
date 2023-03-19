//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js"); //here we get function which is exported from date.js

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items = ["Buy Food","Eat It"];
const workItems = [];

app.get("/", function(req, res){
    const day = date.getDate();

    //rendering values to be updated in html
    res.render("list", {listTitle: day,newListItems:items});
});

app.post("/",function(req,res){
    const item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");//when we get post request it will redirect to home route and then app.get works
    }
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List",newListItems:workItems});
});

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

//We get only number of the day 
// var currentDay = today.getDay();
    // var day = "";
    // if(currentDay===6||currentDay===0){
    //     day = "Weekend";
    // }
    // else{
    //     day = "WeekDay";
    // }
