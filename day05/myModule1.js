function add(x,y){
    return x+y;
}
function sigma(limit=10){
     let s=0;
     for(let i=0;i<limit;i++){
        s+=i;
     }
    return s;
}
// 모듈을 외부로 노출시켜야 외부에서 사용이 가능하다.

 exports.add =add;
 exports.sigma =sigma;
