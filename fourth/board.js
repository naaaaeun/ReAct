let express = require('express');
let router = express.Router();
let commonDB = require("./commonDB");

/* GET home page. */
router.get('/', async function(req, res, next) {
  let sql=`
    select id, title, writer,
    contents, date_format(wdate, '%Y-%m-%d') wdate
    from tb_board
  `;

  let results = await commonDB.mysqlRead(sql, []);
  res.render('board/board_list', { boardList:results });
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