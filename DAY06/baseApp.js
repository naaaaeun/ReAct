let express =require("express")
let app = express(); //서버 생성

//express 모듈자체가 use, get, post 함수 3개가 있음
//use : get,post 둘다
//get : get로 온 것만
//post : post로 온 것만

app.use((request,response)=>{
    response.writeHead(200, {"content-type":"text/html"});
    response.end("<h1>express</h1>");
})
app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})