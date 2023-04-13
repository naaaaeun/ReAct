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
  let a="userid"
  let userid=req.query.userid
  req.session[a]=userid;
  console.log(req.session[a]);

});
// router.get('/put',async function(req, res, next) {
//   let userid=req.query.userid
//   req.session["userid"]=userid;
//   console.log(req.session["userid"]);
// }); 위랑 같음





router.post('/login',async function(req, res, next) { //post방식?!
  
  let userid=req.body.userid; 
  let password=req.body.password;
  let sql = `select * from tb_member where userid='${userid}'`
  let results=await commonDB.mysqlRead(sql)
  if (results.length==0){
    res.json({"result":"fail",msg:"아이디가 없습니다."});
    return;
  }
  if (results[0]["password"]!=password){
    res.json({"result":"fail",msg:"패스워드가 일치하지 않습니다."});
    return;
  }
  req.session["username"]=results[0]["username"];
  req.session["email"]=results[0]["email"];
  req.session["userid"]=results[0]["userid"];

  console.log(results[0]["username"],results[0]["email"],results[0]["userid"])
  res.json({"result":"success",msg:"로그온 성공."});

});

router.get('/logout',async function(req, res, next) { //세션 날리기. 방식 상관 없음.
  req.session["userid"]="";
  req.session["username"]="";
  req.session["email"]="";
  //req.session.destroy();
  res.redirect("/")

});




//이하는 내가 작성한 코드
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
