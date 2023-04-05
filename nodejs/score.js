var express = require("express")
var app = express();  //서버 만들었
var ejs = require("ejs");
app.set("view engine", ejs);
app.use(express.urlencoded({extended:false}));

let scoreData = [ 
    {id:1, name: "홍길동",  kor:90, eng:80, mat:100}
]; 
//url은 서버 전체에서 유일해야함.
app.get("/score/list",(req,res)=>{
    //views/score/score_list.ejs
    //express frame work의 규약. 디자인파일들은 views 폴더에 넣기로 약속함. -> 작성 안해도 됨.
    //response 객체에 render라는 함수를 express가 추가
    //첫번째 매개변수 : html 파일
    //두번째 매개변수 : 데이터를 JSON 형태로 전달해야 한다
    //이 두개를 합해서 새로운 문서를 만들어 클라이언트로 전송.
    res.render("score/score_list.ejs", {scoreList:scoreData}); //vews/를 자동으로 넣음.
});

app.get("/score/list:id",(req,res)=>{
    let id = req.params.id;
    //filter함수는 조건을 만족하는 모든 데이터셋을 배열로 받음.
    //find 함수는 조건을 만족하는 첫번째 데이터만.
    let scoreItem =scoreData.find(score=>score.id==id);
    res.render("score/score_view.ejs",{score:scoreItem});
});

app.get("/score/write",(req,res)=>{
    res.render("score/score_write.ejs");
});

app.post("/score/save",(req,res)=>{ //body에 정보를 담아 저장해야하기때문에 post~
    let name=req.body.name;
    let kor=parseInt(req.body.kor);
    let eng=parseInt(req.body.eng);
    let mat=parseInt(req.body.mat);
    let id=0; //제일 마지막에 있는 데이터의 id+1 
    
    id= scoreData[scoreData.length-1].id+1;
    //JSON으로 데이터를 만들어서 배열에 추가한다
    let data = {id:id, name:name, kor:kor, eng:eng, mat:mat};
    scoreData.push(data);
    //rediect함수를 이용해서 /score/list를 호출해야한다
    res.redirect("/score/list")

});

app.use("/",(req,res)=>{
    res.render("index.ejs");
});

app.use((request, response)=>{
    response.writeHead(200, {"Content-type":"text/html"});
    response.end("<H1>404 Error</H1>");
});

app.listen(4000, ()=>{
    console.log("server start http://127.0.0.1:4000");
})