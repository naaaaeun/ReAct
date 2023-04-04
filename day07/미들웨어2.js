let express =require("express")
let app = express(); //서버 생성

//express 모듈자체가 use, get, post 함수 3개가 있음
//use : get,post 둘다
//get : get로 온 것만
//post : post로 온 것만


//첫번째 미들웨어
app.use((request,response,next)=>{
    //request : 브라우저->서버
    //response : 서버->브라우저
    //next : 다음 함수를 호출한다
    console.log("a");
    request.name="홍길동";
    response.name="tom";
    next();
});
//두번째 미들웨어
app.use((request,response,next)=>{
    console.log("b");
    request.phone="010-";
    response.address="서울시";
    next();
})

app.use((request,response)=>{
    response.writeHead(200, {"content-type":"text/html"});
    console.log(request.name);
    console.log(response.name);
    console.log(request.phone);
    console.log(response.address);
    response.end("<h1>express</h1>");
})
app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})