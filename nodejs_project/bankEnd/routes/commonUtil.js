//routes 폴더에 놓을것 commonUtil.js
function getPaging(pg, totalCnt, pageGroupSize=10){

    /*
    (1-1)/10*10=0
    (2-1)/10*10=0
    (8-1)/10*10=0
    (9-1)/10*10=0
    (10-1)/10*10=0 그룹 (limit 0,10)

    (11-1)/10*10=10
    (12-1)/10*10=10
    (18-1)/10*10=10
    (19-1)/10*10=10
    (20-1)/10*10=10 그룹 (limit 10,20)
    */
    let pnTotal = Math.ceil(totalCnt/10); //강제 올림. ex)1.5페이지는 없으므로.
    let pgGroupStart= parseInt((pg-1)/pageGroupSize)*pageGroupSize+1;
    let pgGroupEnd = pgGroupStart+10;
    if(pgGroupEnd>pnTotal) pgGroupEnd=pnTotal+1;
    console.log(pg, pgGroupStart, pgGroupEnd);

    //반환값이 하나여야 하므로 json으로 보내기.
    return {
        pnTotal:pnTotal,
        pnStart:pgGroupStart,
        pnEnd:pgGroupEnd,
        pg:pg
    }

}
function checkInfo(req, checkInfos){
    msg="";
    result=0;
    resultInfo={};

    for(info of checkInfos){
        if(req.body[info.key]==undefined){
            msg = info.key+" is empty \n";
            result =1;
            req.body[info.key]=""; 
        }
        if(info.type=="str" && info.range!=-1 && req.body[info.key].length>info.range){
            msg = msg + info.key+"range error \n";
        }
        resultInfo[info.key]=req.body[info.key];
        resultInfo["result"]=result;
        resultInfo["msg"]=msg;

        return resultInfo;

    }
}

exports.getPaging=getPaging;
exports.checkInfo=checkInfo;