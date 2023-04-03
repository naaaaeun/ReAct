let express =require("express")
let app = express(); //서버 생성
let ejs= require("ejs");
let fs=require("fs");
const { error } = require("console");

app.set("view engine",ejs); //내부변수에 값을 설정한다
//미들웨어를 사용한다
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    fs.readFile("html/index.html","utf-8",(error,data)=>{
        res.send(data.toString());
    })
});
app.use((request,response)=>{
    response.writeHead(200, {"content-type":"text/html"});
    response.end("<h1>express</h1>");
})
app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})

//get 방식의 경우 