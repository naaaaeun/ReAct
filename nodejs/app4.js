var express = require("express")
var app = express();  //서버 만들었음
var fs = require("fs");app.use(express.urlencoded({extended:false}));

var ejs = require("ejs");

app.set("view engine", ejs);


app.get("/", (request, response)=>{
    fs.readFile("html/index.html", "utf-8", (error, data)=>{
        response.send( data.toString());
    });   
});

app.get("/test", (request, response)=>{
    fs.readFile("html/test.html", "utf-8", (error, data)=>{
        console.log( data )
        response.send(ejs.render(data, {name:"Tom", age:23, address:"eee", limit:9}));
    });   
});

app.get("/test2", (request, response)=>{
   
    response.render("test.ejs", {name:"Tom", age:23, address:"eee", limit:9});
       
});


app.use((request, response)=>{
    response.writeHead(200, {"Content-type":"text/html"});
    response.end("<H1>Express</H1>");
});

app.listen(4000, ()=>{
    console.log("server start http://127.0.0.1:4000");
})