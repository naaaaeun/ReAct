var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('ajaxTest');
});
//send가 적당히 알아서 보낸다.
//html 파일 붙일 때는 render.
router.get('/ajaxTest1', function(req, res, next) {
  res.render('ajax/ajaxTest1');
});

router.get("/result1", function (req, res, next) {
  res.send("data만 보낸다");
});


router.get('/ajaxTest2', function(req, res, next) {
  res.render('ajax/ajaxTest2');
});

//SEND
router.use("/add", function (req, res, next) {
  let x =parseInt(req.query.x);
  let y =parseInt(req.query.y);
  let z=x+y;
  res.json({result:z});
});
module.exports = router;
