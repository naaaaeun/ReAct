
let promise =new Promise((resolve, reject)=>{
    //시간이 많이 드는 코드를 이곳에 위치시킴
    //성공하면 resove(전달할 데이터) => then에 콜백함수의 매개변수로 전달함.
    reject("error"); 
    resolve("success");
    //둘중 먼저 호출된 것만.
})
.then((result)=>{
    console.log("then, "+result);
})
.catch((error)=>{
    console.log("catch, "+error);
})