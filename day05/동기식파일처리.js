//동기식 파일 처리
//파일 모두 읽은 후 리턴
let fs=require("fs");
//require-외부모들을 프로그램 안으로 불러온다
//주의사항-import가 아님.
/*  자바의 임포트는 라이브러리를 메모리로 불러들이는게 아니고
    라이브러리 명을 짧게 썼을때 본래 긴 이름을 제시해주는 역할.
     import java.utill.List

     List<String> list
     위 코드에서 원래는 List의 풀네임을 써야하나 
     전체 풀네임은 위의 import 구문으로 확인하라는 의미.
     라이브러리 자체는 이미 불러와있는 상태이다.

*/

//동기모드 함수는 반환값에 파일의 내용이 온다.
let data=fs.readFileSync("./hello.js","utf-8");
console.log(data);
console.log("프로그램 종료");