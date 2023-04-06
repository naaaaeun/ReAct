//board.js에서 디비 접근, member.js 디비접근 -- 디비에 데이터 읽고 쓰기 전문 코드

let mysql =require("mysql");
const DBInfo={
    connectionLimit:10,
    host:"localhost",
    user:"user01",
    password:"1234",
    database:"mydb",
    port:3306
}; //공통의 정보 JSON으로. 변경되지 않을값으로 const로 선언.


async function mysqlread(sql, params){
    let promise=new Promise((err, conn)=>{
        if(err){
            console.log(err);
            reject(err);
        }

        Conn.query(sql, params, (err, rows)=>{
            console.log(sql);
            console.log(rows);
            if(err){
                reject(err)
            }else{
                resolve(rows);
            }   
            conn.release();
        })
    })
    await promise;
    return promise;
}