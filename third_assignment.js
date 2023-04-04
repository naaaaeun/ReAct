let express =require("express")
let fs = require("fs"); 
let ejs = require("ejs"); 

let app = express();

app.use(express.urlencoded({extended:false}));

app.get("/form",(request,response)=>{
    fs.readFile("./html/third_assignment.html","utf-8",(err, data)=>{
        response.writeHead(200,{"Content-type":"text/html"});
        response.end(ejs.render(data));
    });
});
app.get("/result",(req,res)=>{
    let username= (req.query.username);
    let kor= parseInt(req.query.kor);
    let eng= parseInt(req.query.eng);
    let mat= parseInt(req.query.mat);
    let result="";
    
    result+=`${username}의 점수 합계는 ${kor+eng+mat}, 평균은${(kor+eng+mat)/3} 입니다.`
    
    res.send(result);
});

app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})