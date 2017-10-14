Room.Que = {};
Room.Que.dom = function(){

    Dom.QueMyAns = 0;
    Dom.QueMyW = 0;
    Dom.QueRun = 0;

    $("#Que1 .read").tap(function(e){
        cc.tap(e);
        $("#Que1 .read").velocity({ opacity: 0}, { duration: 200, display:"none"});
    })

};
Room.Que.play = function(id, fn){

    if(Dom.QueRun) return;
    Dom.QueRun = 1;

    mp3_play("que_water");

    Room.Que.ans_cls();

    var dom1 = cav.dom["que_line"+id+"_1"],
        dom2 = cav.dom["que_line"+id+"_2"],
        dom3 = cav.dom["que_line"+id+"_3"],
        ci = cav.img["que_water_c"+id],
        water = cav.img["que_water_w"+id],
        pp = cav.img["que_water_pp"+id];

    dom1.scaleY = 0;
    dom1.alpha = 0.7;
    dom2.scaleX = 0;
    dom2.alpha = 0.7;
    dom3.scaleY = 0;
    dom3.alpha = 0.7;

    cvtw.removeTweens(ci);
    cvtw.get(ci, {loop:true}).to({rotation:359 }, 2000);

    cvtw.removeTweens(water);
    cvtw.get(water).to({scaleY:0 }, 1000);

    cvtw.removeTweens(pp);
    cvtw.get(pp).wait(200).to({alpha:0 }, 500);

    cvtw.get(dom1).to({scaleY:1 }, 200);
    cvtw.get(dom2).wait(200).to({scaleX:1 }, 800);
    cvtw.get(dom3).wait(1000).to({scaleY:1 }, 100).call(function(){
        if(fn) fn(id);
    });

};

Room.Que.play_all = function(r, fn){
    Room.Que.play(1);
    Dom.QueRun = 0;
    Room.Que.play(2);
    Dom.QueRun = 0;
    Room.Que.play(3);
    Dom.QueRun = 0;
    Room.Que.play(4, function(){

        if(r){
            Room.Que.ans_success(5, function(){
                if(fn) fn();
            })
        }else{
            Room.Que.ans_error(5, function(){
                if(fn) fn();
            })
        }

    });

};
Room.Que.play_cls = function(id){
    var dom1 = cav.dom["que_line"+id+"_1"],
        dom2 = cav.dom["que_line"+id+"_2"],
        dom3 = cav.dom["que_line"+id+"_3"];
    cvtw.get(dom1).to({alpha:0 }, 500);
    cvtw.get(dom2).to({alpha:0 }, 500);
    cvtw.get(dom3).to({alpha:0 }, 500);

    cvtw.removeTweens(cav.img["que_water_c"+id]);

};

Room.Que.ans_success = function(id, fn){

    mp3_play("que_right");

    Dom.QueMyAns = id;
    Dom.QueMyW = 1;
    cvtw.get(cav.img["que_heart_s"+id]).to({alpha:1 }, 800);
    cvtw.get(cav.img["que_heart_w1"]).to({alpha:1 }, 800).call(function(){
        if(fn) fn();
    });
};
Room.Que.ans_error = function(id, fn){

    mp3_play("que_wrong");

    Dom.QueMyAns = id;
    Dom.QueMyW = 2;
    cvtw.get(cav.img["que_heart_e"+id]).to({alpha:1 }, 800);
    cvtw.get(cav.img["que_heart_w2"]).to({alpha:1 }, 800).call(function(){
        if(fn) fn();
    });
};
Room.Que.ans_cls = function(){
    if(Dom.QueMyW==1){
        cvtw.get(cav.img["que_heart_s"+Dom.QueMyAns]).to({alpha:0 }, 200);
        cvtw.get(cav.img["que_heart_w1"]).to({alpha:0 }, 200);
    }
    if(Dom.QueMyW==2){
        cvtw.get(cav.img["que_heart_e"+Dom.QueMyAns]).to({alpha:0 }, 200);
        cvtw.get(cav.img["que_heart_w2"]).to({alpha:0 }, 200);
    }
};
Room.Que.reset = function(){
    // cav.img["que_water_w1"].scaleY = 1;
    // cav.img["que_water_w2"].scaleY = 1;
    // cav.img["que_water_w3"].scaleY = 1;
    // cav.img["que_water_w4"].scaleY = 1;

    cvtw.removeTweens(cav.img["que_water_c1"]);
    cvtw.removeTweens(cav.img["que_water_c2"]);
    cvtw.removeTweens(cav.img["que_water_c3"]);
    cvtw.removeTweens(cav.img["que_water_c4"]);
    cvtw.get(cav.img["que_water_c1"]).to({rotation:0 }, 100);
    cvtw.get(cav.img["que_water_c2"]).to({rotation:0 }, 100);
    cvtw.get(cav.img["que_water_c3"]).to({rotation:0 }, 100);
    cvtw.get(cav.img["que_water_c4"]).to({rotation:0 }, 100);

    for(var i=1; i<=4; i++){
        // cav.dom["que_line"+i+"_1"].alpha = 0;
        // cav.dom["que_line"+i+"_2"].alpha = 0;
        // cav.dom["que_line"+i+"_3"].alpha = 0;

        if(cav.dom["que_line"+i+"_1"].alpha) cvtw.get(cav.dom["que_line"+i+"_1"]).to({alpha:0}, 300);
        if(cav.dom["que_line"+i+"_2"].alpha) cvtw.get(cav.dom["que_line"+i+"_2"]).to({alpha:0}, 300);
        if(cav.dom["que_line"+i+"_3"].alpha) cvtw.get(cav.dom["que_line"+i+"_3"]).to({alpha:0}, 300);
    }


    if(cav.img["que_water_w1"].scaleY!=1){
        cvtw.get(cav.img["que_water_w1"]).to({scaleY:1}, 500).call(function(){
            cvtw.get(cav.img["que_water_w1"], {loop:true}).to({scaleY:0.9}, 800, createjs.Ease.bounceIn).to({scaleY:1}, 800, createjs.Ease.cubicOut);
        });
    }

    if(cav.img["que_water_w2"].scaleY!=1){
        cvtw.get(cav.img["que_water_w2"]).to({scaleY:1}, 500).call(function(){
            cvtw.get(cav.img["que_water_w2"], {loop:true}).to({scaleY:0.9}, 800, createjs.Ease.bounceIn).to({scaleY:1}, 800, createjs.Ease.cubicOut);
        });
    }

    if(cav.img["que_water_w3"].scaleY!=1){
        cvtw.get(cav.img["que_water_w3"]).to({scaleY:1}, 500).call(function(){
            cvtw.get(cav.img["que_water_w3"], {loop:true}).to({scaleY:0.9}, 800, createjs.Ease.bounceIn).to({scaleY:1}, 800, createjs.Ease.cubicOut);
        });
    }

    if(cav.img["que_water_w4"].scaleY!=1){
        cvtw.get(cav.img["que_water_w4"]).to({scaleY:1}, 500).call(function(){
            cvtw.get(cav.img["que_water_w4"], {loop:true}).to({scaleY:0.9}, 800, createjs.Ease.bounceIn).to({scaleY:1}, 800, createjs.Ease.cubicOut);
        });
    }

    // cvtw.get(cav.img["que_water_w2"], {loop:true}).to({scaleY:0.9}, 1000, createjs.Ease.bounceIn).to({scaleY:1}, 800, createjs.Ease.cubicOut);
    // cvtw.get(cav.img["que_water_w3"], {loop:true}).to({scaleY:0.9}, 800, createjs.Ease.bounceIn).to({scaleY:1}, 1000, createjs.Ease.cubicOut);
    // cvtw.get(cav.img["que_water_w4"], {loop:true}).to({scaleY:0.9}, 1000, createjs.Ease.bounceIn).to({scaleY:1}, 1000, createjs.Ease.cubicOut);

    if(cav.img["que_water_pp1"].alpha) cvtw.get(cav.img["que_water_pp1"]).to({alpha:0}, 300);
    if(cav.img["que_water_pp2"].alpha) cvtw.get(cav.img["que_water_pp2"]).to({alpha:0}, 300);
    if(cav.img["que_water_pp3"].alpha) cvtw.get(cav.img["que_water_pp3"]).to({alpha:0}, 300);
    if(cav.img["que_water_pp4"].alpha) cvtw.get(cav.img["que_water_pp4"]).to({alpha:0}, 300);

    cav.img["que_water_pp1"].y = 918+60;
    cav.img["que_water_pp1"].scaleY = 0.3;
    cav.img["que_water_pp1"].alpha = 0;

    cav.img["que_water_pp2"].y = 918+60;
    cav.img["que_water_pp2"].scaleY = 0.3;
    cav.img["que_water_pp2"].alpha = 0;

    cav.img["que_water_pp3"].y = 918+60;
    cav.img["que_water_pp3"].scaleY = 0.3;
    cav.img["que_water_pp3"].alpha = 0;

    cav.img["que_water_pp4"].y = 918+60;
    cav.img["que_water_pp4"].scaleY = 0.3;
    cav.img["que_water_pp4"].alpha = 0;

    // cav.img["que_heart_s1"].alpha = 0;
    // cav.img["que_heart_s2"].alpha = 0;
    // cav.img["que_heart_s3"].alpha = 0;
    // cav.img["que_heart_s4"].alpha = 0;
    // cav.img["que_heart_e1"].alpha = 0;
    // cav.img["que_heart_e2"].alpha = 0;
    // cav.img["que_heart_e3"].alpha = 0;
    // cav.img["que_heart_e4"].alpha = 0;
    // cav.img["que_heart_w1"].alpha = 0;
    // cav.img["que_heart_w2"].alpha = 0;

    if(cav.img["que_heart_s1"].alpha) cvtw.get(cav.img["que_heart_s1"]).to({alpha:0}, 300);
    if(cav.img["que_heart_s2"].alpha) cvtw.get(cav.img["que_heart_s2"]).to({alpha:0}, 300);
    if(cav.img["que_heart_s3"].alpha) cvtw.get(cav.img["que_heart_s3"]).to({alpha:0}, 300);
    if(cav.img["que_heart_s4"].alpha) cvtw.get(cav.img["que_heart_s4"]).to({alpha:0}, 300);
    if(cav.img["que_heart_s5"].alpha) cvtw.get(cav.img["que_heart_s5"]).to({alpha:0}, 300);

    if(cav.img["que_heart_e1"].alpha) cvtw.get(cav.img["que_heart_e1"]).to({alpha:0}, 300);
    if(cav.img["que_heart_e2"].alpha) cvtw.get(cav.img["que_heart_e2"]).to({alpha:0}, 300);
    if(cav.img["que_heart_e3"].alpha) cvtw.get(cav.img["que_heart_e3"]).to({alpha:0}, 300);
    if(cav.img["que_heart_e4"].alpha) cvtw.get(cav.img["que_heart_e4"]).to({alpha:0}, 300);
    if(cav.img["que_heart_e5"].alpha) cvtw.get(cav.img["que_heart_e5"]).to({alpha:0}, 300);

    if(cav.img["que_heart_w1"].alpha) cvtw.get(cav.img["que_heart_w1"]).to({alpha:0}, 300);
    if(cav.img["que_heart_w2"].alpha) cvtw.get(cav.img["que_heart_w2"]).to({alpha:0}, 300);

    cvtw.get(cav.img["que_water_pp1"], {loop:true}).to({scaleY:1,scaleX:1,alpha:1,y:918+60-15}, 1100).to({alpha:0}, 300);
    cvtw.get(cav.img["que_water_pp2"], {loop:true}).to({scaleY:1,scaleX:1,alpha:1,y:918+60-15}, 1200).to({alpha:0}, 300);
    cvtw.get(cav.img["que_water_pp3"], {loop:true}).to({scaleY:1,scaleX:1,alpha:1,y:918+60-15}, 1100).to({alpha:0}, 300);
    cvtw.get(cav.img["que_water_pp4"], {loop:true}).to({scaleY:1,scaleX:1,alpha:1,y:918+60-15}, 1200).to({alpha:0}, 300);
};

Room.Que.ABCD_show = function(){
    cvtw.get(cav.img["que_water_a1"]).to({alpha:1}, 300);
    cvtw.get(cav.img["que_water_a2"]).to({alpha:1}, 300);
    cvtw.get(cav.img["que_water_a3"]).to({alpha:1}, 300);
    cvtw.get(cav.img["que_water_a4"]).to({alpha:1}, 300);

};
Room.Que.ABCD_cls = function(){
    cvtw.get(cav.img["que_water_a1"]).to({alpha:0}, 300);
    cvtw.get(cav.img["que_water_a2"]).to({alpha:0}, 300);
    cvtw.get(cav.img["que_water_a3"]).to({alpha:0}, 300);
    cvtw.get(cav.img["que_water_a4"]).to({alpha:0}, 300);
};
Room.Que.ci_stop = function(id){
    cvtw.removeTweens(cav.img["que_water_c"+id]);
};