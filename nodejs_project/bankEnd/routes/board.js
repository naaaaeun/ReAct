let express = require('express');
let router = express.Router();
let commonDB = require("./commonDB");
let commonUtil = require("./commonUtil");

/* http://127.0.0.1:3000/board/list/1 */
router.get('/list/:pg', async function(req, res, next) {

  console.log("******************************")
  let pg=req.params.pg;
  //pg ==1 (pg-1)*10 =10
  //pg ==2 (pg-1)*10 =20
  //pg ==3 (pg-1)*10 =30
  let sql= `SELECT count(*) cnt
  FROM tb_board A 
  LEFT JOIN (SELECT @rownum:=0) B ON 1=1
  LEFT JOIN tb_member c ON a.writer = c.username
  `;
  
  let results = await commonDB.mysqlRead(sql,[]);
  let totalCnt = results[0]["cnt"];

  sql = `SELECT T.id, T.title, T.writer, T.num, T.username, date_format(T.wdate, '%Y-%m-%d') wdate 
  FROM (
  SELECT A.id, A.title, A.writer, A.wdate, c.username, @rownum:=@rownum+1 as num
    FROM tb_board A 
    LEFT JOIN (SELECT @rownum:=0) B ON 1=1
    LEFT JOIN tb_member c ON a.writer = c.username
  ORDER BY id DESC
  ) T
  LIMIT ${(pg - 1) * 10}, 10;`;

  results = await commonDB.mysqlRead(sql, []);
  res.render('board/board_list', { session:req.session,
    boardList:results,
    totalCnt:totalCnt, 
    pg:pg,
    paging:commonUtil.getPaging(pg,totalCnt)
    });
});

router.use("/view/:id", async (request, response, next)=>{
  let id = request.params.id;
  let sql=`
            select title, writer,
            contents, date_format(wdate, '%Y-%m-%d') wdate
            from tb_board
            where id=${id}
            
          `;
  let item = await commonDB.mysqlRead(sql, []);
  response.render("board/board_view", {item:item[0]});
});



module.exports = router;