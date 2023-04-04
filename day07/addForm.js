let express =require("express")
let fs = require("fs"); 
let ejs = require("ejs"); 

let app = express();

app.use(express.urlencoded({extended:false}));

app.get("/add",(request,response)=>{
    fs.readFile("./html/addForm.html","utf-8",(err, data)=>{
        response.writeHead(200,{"Content-type":"text/html"});
        response.end(ejs.render(data));
    });
});
app.get("/result",(req,res)=>{
    let x= parseInt(req.query.x);
    let y= parseInt(req.query.y);
    let z= x+y;
    let result=x+"+"+y+"="+z;
    
    res.end(result)
});

app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})