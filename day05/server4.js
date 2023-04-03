let http = require("http");
let fs=require("fs"); //파일 읽기
let url=require("url"); //url 분석을 위한 라이블러
const path = require("path");
const { type } = require("os");

//http://127.0.0.1:4000/add?x=4&y=5
//http://127.0.0.1:4000/sub?x=4&y=5
//http://127.0.0.1:4000/userinfo?userid=test&username=Tom

let server = http.createServer((request, response) => {
    //console.log(request); 너무 길어요. 174p
    //console.log(request.url); //전송 url
    console.log(request.method); //전송방식. get.

    let rurl =request.url;
    let pathname=url.parse(rurl,true).pathname;//string 분석해서 json 객체로 변환해줌!! parsing 한다.
    let query=url.parse(rurl,true).query;//string 분석해서 json 객체로 변환해줌!! parsing 한다.

    console.log(query);
    console.log(pathname);
    console.log(typeof(query)); //windows_NT


    if(pathname=="/add"){
      response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
      let x=parseInt(query.x);
      let y=parseInt(query.y);
      response.end(`${x} + ${y} =${y+x} `);
    }else if(pathname=="/sub"){
      response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
      let x=parseInt(query.x);
      let y=parseInt(query.y);
      response.end(`${x} - ${y} =${x-y} `);
    }else if(pathname=="/userinfo"){
      response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
      let name=query.username;
      let id=query.userid;
      response.end(`ID : ${id} 이름: ${name}`);
    }else{
      response.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
      response.end(`<h1>존재하지 않는 url 입니다.</h1>`);
    }
  })
  
server.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
  });
  //먼저 여기서 실행 후 접속

  