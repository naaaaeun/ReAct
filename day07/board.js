let express =require("express")
let fs = require("fs"); 
let ejs = require("ejs"); 
let app = express();

//ejs엔진을 views 폴더 아래서 파일을 검색한다
app.set("view engine", ejs);

let boardList=[
    {id:1, title:"제목1", writer:"작성자1", wdate:"2023-04-04"},
    {id:2, title:"제목2", writer:"작성자2", wdate:"2023-04-05"},
    {id:3, title:"제목3", writer:"작성자3", wdate:"2023-04-06"},
    {id:4, title:"제목4", writer:"작성자4", wdate:"2023-04-07"},
    {id:5, title:"제목5", writer:"작성자5", wdate:"2023-04-08"},
]
app.use("/board_list",(req,res)=>{

    res.render("board/board_list.ejs",{boardList:boardList});
});
app.use("/board_view/:id",(req,res)=>{
    let id=req.params.id;
    let item =boardList.filter(x=>x.id==id);
    res.render("board/board_view.ejs",{item:item[0]});
});
//페이지만 이동
app.use("board/write",(request,response)=>{
    response.render("board/board_write.ejs",{item:item[0]});
})
//저장하기
app.use("board/save",(request,response)=>{
    let title=request.body.title;
    let contents=request.body.contents;
    let writer=request.body.writer;
    let id=boardList.length+1;
    boardList.push({id:id, title:title,contents:contents,})
    response.end("<h1>express</h1>");
})
app.use((request,response)=>{
    response.writeHead(200, {"content-type":"text/html"});
    response.end("<h1>express</h1>");
})
app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})