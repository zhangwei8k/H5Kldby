// Que5
Room.Que5 = {};
Room.Que5.ppt = function(){

    Room.Door.close();
    cc.ppt(["Que5", "GameStart"] , function(after , callback){
        cc.m["Que5"].velocity({ opacity: 0}, { duration: 1000, display: "none", complete:function(){
            cc.m["Index"].hide();
        } });
        cc.m["GameStart"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
        after.come();
    })
};
Room.Que5.dom = function(){

    Dom.Que5 = {};
    Dom.Que5MyAns = {};

    $("#Que5 .finish").tap(function(e){
        cc.tap(e);
        $("#Que5 .finish").hide();
        clearInterval(Dom.Que5TimeHand);
        Room.Que5.ans();
    });

    Dom.Que5.btn1 = $("#Que5 .btn1");
    Dom.Que5.btn2 = $("#Que5 .btn2");
    Dom.Que5.btn3 = $("#Que5 .btn3");
    Dom.Que5.btn4 = $("#Que5 .btn4");

    Dom.Que5.btn1_back = $("#Que5 .btn1_back");
    Dom.Que5.btn2_back = $("#Que5 .btn2_back");
    Dom.Que5.btn3_back = $("#Que5 .btn3_back");
    Dom.Que5.btn4_back = $("#Que5 .btn4_back");

    Dom.Que5.btn1.tap(function(e){
        cc.tap(e);
        Room.Que5.time();
        Dom.Que5.btn1.hide();
        Dom.Que5.btn1_back.hide();

        Room.Que.play(1, function(id){
            Room.Que5.select(id);
        });
        Dom.QueRun = 0;
    });
    Dom.Que5.btn1_back.tap(function(e){
        cc.tap(e);
        Dom.Que5.btn1.hide();
        Dom.Que5.btn1_back.hide();
        Room.Que5.reset(1);
    });

    Dom.Que5.btn2.tap(function(e){
        cc.tap(e);
        Room.Que5.time();
        Dom.Que5.btn2.hide();
        Dom.Que5.btn2_back.hide();

        Room.Que.play(2, function(id){
            Room.Que5.select(id);
        });
        Dom.QueRun = 0;
    });
    Dom.Que5.btn2_back.tap(function(e){
        cc.tap(e);
        Dom.Que5.btn2.hide();
        Dom.Que5.btn2_back.hide();
        Room.Que5.reset(2);
    });

    Dom.Que5.btn3.tap(function(e){
        cc.tap(e);
        Room.Que5.time();
        Dom.Que5.btn3.hide();
        Dom.Que5.btn3_back.hide();

        Room.Que.play(3, function(id){
            Room.Que5.select(id);
        });
        Dom.QueRun = 0;
    });
    Dom.Que5.btn3_back.tap(function(e){
        cc.tap(e);
        Dom.Que5.btn3.hide();
        Dom.Que5.btn3_back.hide();
        Room.Que5.reset(3);
    });

    Dom.Que5.btn4.tap(function(e){
        cc.tap(e);
        Room.Que5.time();
        Dom.Que5.btn4.hide();
        Dom.Que5.btn4_back.hide();

        Room.Que.play(4, function(id){
            Room.Que5.select(id);
        });
        Dom.QueRun = 0;
    });
    Dom.Que5.btn4_back.tap(function(e){
        cc.tap(e);
        Dom.Que5.btn4.hide();
        Dom.Que5.btn4_back.hide();
        Room.Que5.reset(4);
    });


};
Room.Que5.reset = function(id){

    Dom.Que5MyAns["t"+id] = 0;
    cvtw.get(cav.img["que_water_c"+id]).to({rotation:0 }, 200);

    cvtw.get(cav.dom["que_line"+id+"_1"]).to({alpha:0}, 300);
    cvtw.get(cav.dom["que_line"+id+"_2"]).to({alpha:0}, 300);
    cvtw.get(cav.dom["que_line"+id+"_3"]).to({alpha:0}, 300);

    cvtw.get(cav.img["que_water_w"+id]).to({scaleY:1}, 500).call(function(){
        cvtw.get(cav.img["que_water_w"+id], {loop:true}).to({scaleY:0.9}, 800, createjs.Ease.bounceIn).to({scaleY:1}, 800, createjs.Ease.cubicOut);
        Dom.Que5["btn"+id].show();
    });
};
Room.Que5.select = function(id){


    Dom.Que5MyAns["t"+id] = 1;
    Dom.Que5["btn"+id+"_back"].show();
    Dom.QueRun = 0;
    Room.Que.ci_stop(id);

    if(Dom.Que5MyAns.t1 && Dom.Que5MyAns.t2 && Dom.Que5MyAns.t3 && Dom.Que5MyAns.t4){
        clearInterval(Dom.Que5TimeHand);
        Room.Que5.ans()
    }

};
Room.Que5.time = function(){
    if(Dom.Que5TimeStart) return;
    Dom.Que5TimeStart = 1;
    mp3_play("que_time", 1);
    Dom.Que5TimeDom = $("#Que5 .time");
    Dom.Que5Time = 10;
    Dom.Que5TimeDom.show();
    Dom.Que5TimeHand = setInterval(function(){
        Dom.Que5Time--;
        Dom.Que5TimeDom.html(Dom.Que5Time);
        if(Dom.Que5Time<=0){
            clearInterval(Dom.Que5TimeHand);
            Room.Que5.ans();
        }
    },1000);
};

Room.Que5.ans = function(){
    $("#Que5 .finish").hide();
    var ans = "";
    for(var i =1; i<=4; i++){
        if(Dom.Que5MyAns["t"+i]) ans = ans+i;
    }

    mp3_stop("que_time");



    if(Dom.Ans.que5==ans){
        Room.Que.ans_success(5, function(){
            Dom.QueAnsList["t5"] = 1;//Dom.Que2.ans;
            setTimeout(Room.Que5.ppt, 500);
        });
    }else{
        Room.Que.ans_error(5, function(){
            Dom.QueAnsList["t5"] = 0;//Dom.Que2.ans;
            setTimeout(Room.Que5.ppt, 500);
        });
    }
    console.log(Dom.QueAnsList);
};


Room.Que5.come_before = function(next){
    Dom.QueMyAns = 0;
    Dom.QueRun = 0;
    Dom.QueMyW = 0;

    next();
};

