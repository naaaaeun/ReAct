let http = require("http");
let fs=require("fs"); //파일 읽기
let url=require("url"); //url 분석을 위한 라이블러

//http://127.0.0.1:4000?name=Tom&age=17

let server = http.createServer((request, response) => {
    //console.log(request); 너무 길어요. 174p
    console.log(request.url); //전송 url
    console.log(request.method); //전송방식. get.

    let rurl =request.url;
    let query=url.parse(rurl,true).query;//string 분석해서 json 객체로 변환해줌!! parsing 한다.

    console.log(query);


    if(query.name!=""){
      response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
      response.end(`이름:${query.name} 나이:${query.age} `);
    }
  })
  
server.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
  });
  //먼저 여기서 실행 후 접속

  