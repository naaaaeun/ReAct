let mysql =require("mysql");
let pool=mysql.createPool({
    connectionLimit:10,
    host:"127.0.0.1",
    user:"user01",
    password:"1234",
    database:"mydb",
    port:3306
});
//디비와 연결

pool.getConnection((err,Connection)=>{
    //연결 성공시 con함수 실행
    //연결 실패시 err 
    if(err){
        console.log(err);
        return;
    }
    //con 실행시 연결 객체 전달
    console.log("Connection success");

    new Promise((resolve, reject)=>{
        let sql =`
                insert into tb_board(title, writer, contents, wdate)
                values(?,?,?,now())
                `;
        let params=['제목4','이나은','내용4']
    
        Connection.query(sql, params, (err, rows)=>{
            if(err){
                reject("오류")
            }else{
                resolve("성공");
            }   
        })
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });

    sql =`  
        select id, title, writer,date_format(wdate, '%Y-%m-%d') wdate 
        from tb_board
        -- as 생략됨
        `;
    Connection.query(sql, (err, rows)=>{
        if(err){
            console.log("err")
        }else{
            console.log(rows);
        }  
    });
});
console.log("end");