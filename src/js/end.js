Room.End = {};
Room.End.dom = function(){
    $("#End .link").tap(function(e){
        cc.tap(e);
        //window.location.href='http://www.ririvip.com/index.php';
        Room.End.ppt();
    });
};
Room.End.ppt = function(){
    cc.ppt(["End", "GameDoor"] , function(after , callback){
        cc.m["End"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["GameDoor"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
        after.come();
    })
};
Room.End.come_before = function(next){


    console.log(Dom.QueAnsList);
    //if(!Dom.QueAnsList.gameOk) Dom.QueAnsList.game = 150;
    if(Dom.QueAnsList.gameOk) endCav.img["end_s"].alpha = 1;
    else endCav.img["end_s"].alpha = 0;

    var score = 0;
    var tt = 0;
    var gg = 0;
    var ttnum = 0;

    if(Dom.QueAnsList.t1) {

        score += toDecimal(30/5);
        tt += parseInt(165/5);
        ttnum++;
    }
    if(Dom.QueAnsList.t2) {

        score += toDecimal(30/5);
        tt += parseInt(165/5);
        ttnum++;
    }
    if(Dom.QueAnsList.t3) {

        score += toDecimal(30/5);
        tt += parseInt(165/5);
        ttnum++;
    }
    if(Dom.QueAnsList.t4) {

        score += toDecimal(30/5);
        tt += parseInt(165/5);
        ttnum++;
    }
    if(Dom.QueAnsList.t5) {

        score += toDecimal(30/5);
        tt += parseInt(165/5);
        ttnum++;
    }

    if(ttnum){
        for(var i=1; i<=ttnum; i++){
            endCav.dom["end_b"+i].alpha = 1;
        }
    }

    if(ttnum==5){
        endCav.img["end_w5"].alpha = 1;
    }else if(ttnum==4){
        endCav.img["end_w4"].alpha = 1;
    }else if(ttnum==3){
        endCav.img["end_w3"].alpha = 1;
    }else if(ttnum==2){
        endCav.img["end_w2"].alpha = 1;
    }else if(ttnum==1){
        endCav.img["end_w1"].alpha = 1;
    }else{
        endCav.img["end_w0"].alpha = 1;
    }

    // endCav.dom["end_font1"].text = ttnum;

    // gg = ((Dom.QueAnsList.game-50)*165)/70;
    // if(Dom.QueAnsList.gameOk) endCav.dom["end_font2"].text = parseInt(Dom.QueAnsList.game);
    // else endCav.dom["end_font2"].text = 0;

    //endCav.dom["end_font2"].text = Dom.QueAnsList.gameM+":"+Dom.QueAnsList.gameS;
    endCav.dom["end_font1"].text = Dom.QueAnsList.gameM;
    endCav.dom["end_font2"].text = Dom.QueAnsList.gameS;

    if(Dom.QueAnsList.gameOk){
        if(Dom.QueAnsList.game<=30){
            score += toDecimal((67/6)*6);

            // gg += parseInt(165/6)*6;
            // endCav.dom["end_font2"].text = 50;
        }else if(Dom.QueAnsList.game<=40){
            score += toDecimal((67/6)*5);

            // gg += parseInt(165/6)*5;
            // endCav.dom["end_font2"].text = 60;
        }else if(Dom.QueAnsList.game<=50){
            score += toDecimal((67/6)*4);

            // gg += parseInt(165/6)*4;
            // endCav.dom["end_font2"].text = 70;
        }else if(Dom.QueAnsList.game<=70){
            score += toDecimal((67/6)*3);

            // gg += parseInt(165/6)*3;
            // endCav.dom["end_font2"].text = 80;
        }else if(Dom.QueAnsList.game<=80){
            score += toDecimal((67/6)*2);

            // gg += parseInt(165/6)*2;
            // endCav.dom["end_font2"].text = 90;
        }else if(Dom.QueAnsList.game<=90){
            score += toDecimal((67/6)*1);

            // gg += parseInt(165/6)*1;
            // endCav.dom["end_font2"].text = 100;
        }
    }


    // if(tt>155) tt = 165;
    // if(tt<10) tt = 0;
    //
    // if(gg>155) gg = 165;
    // if(gg<10) gg = 0;


    // endCav.img["end_line1"].x = 285-(165-tt);
    // endCav.img["end_line2"].x = 285-gg;

    var r = randomNum(0,260)/100;

    score += r;

    // if(score>=97){
    //     // endCav.img["end_s5"].alpha = 1;
    //     endCav.img["end_w5"].alpha = 1;
    // }else if(score>=60+(37/2)){
    //     // endCav.img["end_s4"].alpha = 1;
    //     endCav.img["end_w4"].alpha = 1;
    // }else if(score>=60){
    //     // endCav.img["end_s3"].alpha = 1;
    //     endCav.img["end_w3"].alpha = 1;
    // }else if(score>=40){
    //     // endCav.img["end_s2"].alpha = 1;
    //     endCav.img["end_w2"].alpha = 1;
    // }else{
    //     // endCav.img["end_s1"].alpha = 1;
    //     endCav.img["end_w1"].alpha = 1;
    // }

    var score_end = toDecimal(score);
    if(score_end>=100) score_end = 99.8;

    if(Dom.QueAnsList.gameOk)
        endCav.dom["end_font3"].text = "击败全国"+score_end+"%玩家";
    else{
        endCav.dom["end_font3"].text = "你还没通关呢 再接再励";
    }


    setTimeout(function(){
        var Picx = document.getElementById("endCav").toDataURL("image/png");
        var Photo = document.getElementById("Photo");
        Photo.src = Picx;
    },800);

    // endCav.drawFont("end_font3","ends","Hello World", "20px Arial", "#ff7700",{x:350, y:771});

    next();
};

function toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x*100)/100;
    return f;
}
function toDecimal1(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x*10)/10;
    return f;
}

function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum);
            break;
        default:
            return 0;
            break;
    }
}