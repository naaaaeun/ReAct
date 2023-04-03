let http = require("http");
let fs=require("fs");
let ejs=require("ejs"); 

let server = http.createServer((request, response) => {

    fs.readFile("./html/test.html","utf-8",(error,data)=>{
      if(error){
        response.writeHead(500, {"Content-Type": "text/html; charset=utf-8"});
        response.end("error");
        return;
      }
      response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
      response.end(ejs.render(data, {
        name:"김국민",
        age:23,
        address:"서울시 관악구",
        limit:10
      })); //ejs 템플릿 엔진을 통해 html과 nodejs의 데이터를 렌더링(결합)한다
    })
  })
  
server.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
  });
  //먼저 여기서 실행 후 접속

  