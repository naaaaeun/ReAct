var express = require("express")
var app = express();  //서버 만들었음


//http://127.0.0.1:4000/gugu?dan=4 

app.get("/gugu", (request, response)=>{
    let dan = request.query.dan;
    let result="";
    for(i=1; i<=9; i++)
    {
        result += `${dan} * ${i} = ${dan*i}<br/>`;
    }
    console.log( result );
    response.writeHead(200, {"Content-type":"text/html"});
    response.end(result);
    //response.end("hello"); //이미 데이터 보내기를 완료했기때문에 오류발생
});

//http://127.0.0.1:4000/gugu/4 
app.get("/gugu/:dan", (request, response)=>{
    let dan = request.params.dan; //url에 따라서 :dan
    let result="";
    for(i=1; i<=9; i++)
    {
        result += `${dan} * ${i} = ${dan*i}<br/>`;
    }
    console.log( result );
    response.writeHead(200, {"Content-type":"text/html"});
    response.end(result);
    //response.end("hello"); //이미 데이터 보내기를 완료했기때문에 오류발생
});




app.use((request, response)=>{
    response.writeHead(200, {"Content-type":"text/html"});
    response.end("<H1>Express</H1>");
});

app.listen(4000, ()=>{
    console.log("server start http://127.0.0.1:4000");
})