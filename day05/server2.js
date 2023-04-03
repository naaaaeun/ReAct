let http = require("http");

let server = http.createServer((request, response) => {
  //브라우저에서 서버로 액세스 요청이 들어오면 
  //request 객체 - 브라우저에서 요청한 정보를 담아 오는 객체
  //response 객체 - 서버에서 클라이언트로 정보를 담아 보내는 객체

    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end("<H1>Hello my first Webserver 웹서버</H1>");
  })
  
server.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
  });
  //먼저 여기서 실행 후 접속

  