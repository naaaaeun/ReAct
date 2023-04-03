let http = require("http");
let fs=require("fs");
let ejs=require("ejs"); 

let boardList=[
  {id:1,title:"제목1",writer:"작성자1",wdate:"2023-04-03"},
  {id:2,title:"제목2",writer:"작성자2",wdate:"2023-04-04"},
  {id:3,title:"제목3",writer:"작성자3",wdate:"2023-04-05"},
  {id:4,title:"제목4",writer:"작성자4",wdate:"2023-04-06"},
  {id:5,title:"제목5",writer:"작성자5",wdate:"2023-04-07"}
];

let server = http.createServer((request, response) => {

    fs.readFile("./html/test2.html","utf-8",(error,data)=>{
      if(error){
        response.writeHead(500, {"Content-Type": "text/html; charset=utf-8"});
        response.end("error");
        return;
      }
      response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
      response.end(ejs.render(data, {
        boardList:boardList
      })); //ejs 템플릿 엔진을 통해 html과 nodejs의 데이터를 렌더링(결합)한다
    });
  });
  
server.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
  });
  //먼저 여기서 실행 후 접속

  