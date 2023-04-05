var express = require("express")
var app = express();  //서버 만들었음

//http://127.0.0.1:4000/add?x=45&y=7
app.get("/add", (request, response)=>{
    x = request.query.x; 
    y = request.query.y; 
    z = parseInt(x)+parseInt(y);
    response.send({x:x, y:y, z:z});
});

//http://127.0.0.1:4000/add/45/7
app.get("/add2/:x/:y", (request, response)=>{
    x = request.params.x; 
    y = request.params.y; 
    z = parseInt(x)+parseInt(y);
    response.send({x:x, y:y, z:z});
})

//http://127.0.0.1:4000/add/45/7


app.use((request, response)=>{
    response.writeHead(200, {"Content-type":"text/html"});
    response.end("<H1>Express</H1>");
});

app.listen(4000, ()=>{
    console.log("server start http://127.0.0.1:4000");
})