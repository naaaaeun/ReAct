let express =require("express")
let app = express(); //서버 생성

//express 모듈자체가 use, get, post 함수 3개가 있음
//use : get,post 둘다
//get : get로 온 것만
//post : post로 온 것만

// http://127.0.0.1:4000/gugu?dan=4
app.get("/gugu", (req, res)=>{
    console.log(req.query);
    let x = parseInt(req.query.dan);
    let result="";
    for(let i=1;i<=9;i++){
        result += x + "x" + i + "=" + x*i + "<br>"; 
        //send, end는 1번만 실행되고 종료되기 때문에, 문자열로 저장하여 for밖에서 한번에 전송.
        //send 와 end의 차이? send는 개행이 되고, end는 개행이 안됨.
        //CHAT GPT say send는 express.js의 모듈, end는 node.js의 http의 내장 모듈.
    }
    res.send(result);
});

// http://127.0.0.1:4000/gugu/4 params
app.get("/gugu/:dan", (req, res)=>{
    console.log(req.params);
    let x = parseInt(req.params.dan);
    let result="";
    for(let i=1;i<=9;i++){
        result += x + "x" + i + "=" + x*i + "<br>"; 
        //send, end는 1번만 실행되고 종료되기 때문에, 문자열로 저장하여 for밖에서 한번에 전송.
        //send 와 end의 차이? send는 개행이 되고, end는 개행이 안됨.
        //CHAT GPT say send는 express.js의 모듈, end는 node.js의 http의 내장 모듈.
    }
    res.send(result);
});




app.use((request,response)=>{
    response.writeHead(200, {"content-type":"text/html"});
    response.end("<h1>express</h1>");
})
app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})