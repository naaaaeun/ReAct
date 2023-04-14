var express = require("express");
var router = express.Router();
let commondb = require('./commonDB');

/* GET home page. */
router.get("/list", async function (req, res, next) {
    let sql=`
    SELECT A.id, A.STUDENT_NAME, A.KOR, A.ENG, A.MAT, DATE_FORMAT(A.wdate, '%Y-%m-%d')wdate
FROM tb_score A`;
let results = await commondb.mysqlRead(sql,[]);
res.json(results);

});


module.exports = router;