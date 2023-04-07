var express = require('express');
var router = express.Router();
let commonDB =require("./commonDB");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('member/member_register', { title: 'Express' });
});
//아이디 중복체크 
//아이디를 받아 존재하는 아이디면 fail  반환, 반대면 success
router.use('/idcheck',async function(req,res,next){
  let userid = req.body.userid;
  let sql=`select count(*) cnt from tb_member where userid='${userid}'`;
  
  let rows = await commonDB.mysqlRead(sql);
  let cnt =rows[0]["cnt"];
  if(cnt==0){
    res.json({'result':'success'})
  }else{
    res.json({'result':'fail'})
  }
});

// member/save

router.use('/save',async function(req, res, next) {
  let userid=req.body.userid;
  let password=req.body.password;
  let username=req.body.username;
  let email=req.body.email;
  let phone=req.body.phone;
  let zipcode=req.body.zipcode;
  let address1=req.body.address1;
  let address2=req.body.address2;
  let nickname=req.body.nickname;
  let sql = `insert into tb_member(userid, password, username, email, phone, zipcode, address1, address2, nickname, wdate) values(?,?,?,?,?,?,?,?,?,now())`;
  try{
    await commonDB.mysqlRead(sql,[userid, password, username, email, zipcode,  phone, address1, address2, nickname]);
    res.json({"result":"success"});
  }catch(e){
    console.log(e);
    res.json({"result":"fail"});
  }

});


router.get('/put',async function(req, res, next) {
  let userid=req.query.userid
  req.session["userid"]=userid;
  console.log(req.session["userid"]);

});









router.use('/login',async function(req, res, next) {
  
  res.render('member/member_logon');
});

router.use('/sessionCheck',async function(req, res, next) {
  let userid=req.body.userid;
  let password=req.body.password;
  
  console.log(userid, password);
  let sql = `select username as usernameA from tb_member where userid='${userid}' and password='${password}'`;
  try{
    let username=await commonDB.mysqlRead(sql,[userid, password]);
    res.json(username[0]);
  }catch(e){
    console.log(e);
    res.json({"result":"fail"});
  }
});
module.exports = router;
