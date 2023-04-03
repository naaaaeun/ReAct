let express =require("express")
let app = express(); //서버 생성

//express 모듈자체가 use, get, post 함수 3개가 있음
//use : get,post 둘다
//get : get로 온 것만
//post : post로 온 것만

//순서 바꾸면 안돼요.
//http://127.0.0.1:4000/test
app.use("/test",(request,response)=>{
    response.writeHead(200, {"content-type":"text/html"});
    response.end("<h1>test</h1>");
});
//http://127.0.0.1:4000/get
app.get("/get",(request,response)=>{
    response.writeHead(200, {"content-type":"text/html"});
    response.end("<h1>get</h1>");
});
app.get("/userinfo",(req,res)=>{
    let userinfo={name:"tom","phone":"010-0000-0000"};
    res.send(userinfo);//send 함수 이용해서 JSON데이터 송신
});
//userinfo2?name=Jane&phone=0100000000

//url 통해서 정보 보내는 것은 전통적 방식. 최근엔 라우팅 방식. 200p
app.get("/userinfo2", (req, res)=>{
    console.log(req.query);
    let userinfo={
        name:req.query.name, 
        phone:req.query.phone
    };
    res.send(userinfo); //send 함수를 이용해서 JSON 데이터 송신
});
//=============================================================== 권장 방식
//http://127.0.0.1:4000/userinfo3/brown/user01
app.get("/userinfo3/:username/:userid", (req, res)=>{
    console.log(req.params);
    let userinfo={
        username:req.params.username, 
        userid:req.params.userid
    };
    res.send(userinfo); 
});

//==================================================================

//http://127.0.0.1:4000/post
app.post("/post",(request,response)=>{
    response.writeHead(200, {"content-type":"text/html"});
    response.end("<h1>post</h1>");
});


//다른url처리 없을때+오류날때. http://127.0.0.1:4000
app.use((request,response)=>{
    response.writeHead(200, {"content-type":"text/html"});
    response.end("<h1>express</h1>");
})
app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})