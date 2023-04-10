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


exports.getPaging=getPaging;