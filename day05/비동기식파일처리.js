let fs=require("fs");

//비동기식, 파일을 읽기 전 함수가 반환되어 반환값 사ㅣ용 불가능.
//콜백함수를 2번째 매개변수로 전달
fs.readFile('./heloo.js',"utf-8",(err,data)=>{
    console.log(data);
});
console.log("프로그램 완료");