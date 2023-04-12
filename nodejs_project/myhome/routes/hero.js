let express = require('express');
let router = express.Router();
let commonDB =require('./commonDB');

router.get("/list",async function (req,res,next){
	let sql=`SELECT a.id, a.hero_name, a.hero_desc, DATE_FORMAT(a.wdate, '%y-%m-%d') wdate
	FROM tb_hero a`;
	let results = await commonDB.mysqlRead(sql,[]);
	res.json(results);
/*
	res.json(
	[
	{id:1, name:"이순신", descr:"임진왜란"},
	{id:2, name:"강감찬", descr:"귀주대첩"},
	{id:3, name:"을지문덕", descr:"살수대첩"},
	{id:4, name:"세종대왕", descr:"한글창제"},
	])
*/
});
router.post('/write',async function(req, res, next) {
	let hero_name =req.body.hero_name;
	let hero_desc =req.body.hero_desc;
	let sql =`INSERT INTO tb_hero( hero_name, hero_desc, wdate)
	VALUES(?,?,NOW());`;

	try{
		await commonDB.mysqlRead(sql,[hero_name,hero_desc]);
		res.json({"result":"success"});
	}catch(e){
		console.log(e);
		res.json({"result":"fail"});
	}
})


module.exports = router;