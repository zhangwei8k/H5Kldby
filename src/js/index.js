Room.Loader = {};
Room.Loader.progress = function(i){
    // var now = (1220*i)/100;
    // var t1 = parseInt(now/60);
    // var t2 = parseInt(now%60);
    // if(t1<10) t1 = "0"+t1;
    // if(t2<10) t2 = "0"+t2;
    // Dom.loadWord.html(t1+":"+t2+":00");

    var t = 19;
    var nt = parseInt((10*i)/100);
    var now = nt+50;
    if(now>=60) {
        now = "00";
        t = 20;
        $("#Loader .start").show().velocity({ opacity: 1}, { duration: 300});
    }

    Dom.loadWord.html("20:"+t+":"+now);
};
Room.Loader.dom = function(){
    $("#Loader .start").tap(function(e){
        cc.tap(e);
        mp3_stop("loader");
        mp3_play("door_turn");
        Room.Loader.ppt();
    });

};
Room.Loader.ppt = function(){
    var Start = "Que1";

    Room.Door.begin(function(){
        mp3_play("que_bg",1);
    });
    //Room.Door.close();
    cvtw.removeTweens(loadcav.img["loader_logo"]);

    cc.ppt(["Loader", Start] , function(after , callback){
        cc.m["Loader"].velocity({ opacity: 0, scale:1.3}, { duration: 1000, display: "none" });
        cc.m[Start].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
        cc.m["Index"].show();
        Room.Index.que_ticker();
        after.go();
        if(after.come) after.come();
    })

};
Room.Loader.run = function(){

    $("#Loader .c1").velocity({ rotateZ:["360deg","0deg"] }, { easing:"linear", duration: 5000, loop: true});
    $("#Loader .c2").velocity({ rotateZ:["360deg","0deg"] }, { easing:"linear", duration: 5000, loop: true});
    $("#Loader .c3").velocity({ rotateZ:["360deg","0deg"] }, { easing:"linear", duration: 5000, loop: true});

    $("#Loader .cc1").velocity({ rotateZ:["-360deg","0deg"] }, { easing:"linear", duration: 3000, loop: true});
    $("#Loader .cc2").velocity({ rotateZ:["-360deg","0deg"] }, { easing:"linear", duration: 3000, loop: true});
};
Room.Loader.go_after = function(){
    $("#Loader .c1").velocity("stop");
    $("#Loader .c2").velocity("stop");
    $("#Loader .c3").velocity("stop");

    $("#Loader .cc1").velocity("stop");
    $("#Loader .cc2").velocity("stop");
};


Room.Index = {};
Room.Index.que_ticker = function(){
    cav_ticker.que_ticker = function(){
        cav.img["que_clock_c1"].rotation = cav.img["que_clock_c1"].rotation%360 + 2;
        cav.img["que_clock_c2"].rotation = cav.img["que_clock_c2"].rotation%360 - 2;
        cav.img["que_clock_c3"].rotation = cav.img["que_clock_c3"].rotation%360 + 2;
        cav.img["que_clock_c4"].rotation = cav.img["que_clock_c4"].rotation%360 - 4;

        cav.img["que_clock_z1"].rotation = cav.img["que_clock_z1"].rotation%360 + 6;
        cav.img["que_clock_z2"].rotation = cav.img["que_clock_z2"].rotation%360 + 1;

        cav.img["que_ci_c1_1"].rotation = cav.img["que_ci_c1_1"].rotation%360 + 2;
        cav.img["que_ci_c1_2"].rotation = cav.img["que_ci_c1_2"].rotation%360 + 2;
        cav.img["que_ci_c2_1"].rotation = cav.img["que_ci_c2_1"].rotation%360 - 2;
        cav.img["que_ci_c2_2"].rotation = cav.img["que_ci_c2_2"].rotation%360 - 2;
        cav.img["que_ci_c3_1"].rotation = cav.img["que_ci_c3_1"].rotation%360 + 2;
        cav.img["que_ci_c3_2"].rotation = cav.img["que_ci_c3_2"].rotation%360 + 2;
        cav.img["que_ci_c4_1"].rotation = cav.img["que_ci_c4_1"].rotation%360 - 2;
        cav.img["que_ci_c4_2"].rotation = cav.img["que_ci_c4_2"].rotation%360 - 2;
        cav.img["que_ci_c5_1"].rotation = cav.img["que_ci_c5_1"].rotation%360 - 2;
        cav.img["que_ci_c5_2"].rotation = cav.img["que_ci_c5_2"].rotation%360 - 2;
        cav.img["que_ci_c6_1"].rotation = cav.img["que_ci_c6_1"].rotation%360 + 2;
        cav.img["que_ci_c6_2"].rotation = cav.img["que_ci_c6_2"].rotation%360 + 2;

        cav.img["que_ci2_c1_1"].rotation = cav.img["que_ci2_c1_1"].rotation%360 + 2;
        cav.img["que_ci2_c1_2"].rotation = cav.img["que_ci2_c1_2"].rotation%360 + 2;
        cav.img["que_ci2_c2_1"].rotation = cav.img["que_ci2_c2_1"].rotation%360 - 4;
        cav.img["que_ci2_c2_2"].rotation = cav.img["que_ci2_c2_2"].rotation%360 - 4;
        cav.img["que_ci2_c3_1"].rotation = cav.img["que_ci2_c3_1"].rotation%360 + 2;
        cav.img["que_ci2_c3_2"].rotation = cav.img["que_ci2_c3_2"].rotation%360 + 2;
        cav.img["que_ci2_c4_1"].rotation = cav.img["que_ci2_c4_1"].rotation%360 - 2;
        cav.img["que_ci2_c4_2"].rotation = cav.img["que_ci2_c4_2"].rotation%360 - 2;
        cav.img["que_ci2_c5_1"].rotation = cav.img["que_ci2_c5_1"].rotation%360 + 4;
        cav.img["que_ci2_c5_2"].rotation = cav.img["que_ci2_c5_2"].rotation%360 + 4;
        cav.img["que_ci2_c6_1"].rotation = cav.img["que_ci2_c6_1"].rotation%360 - 2;
        cav.img["que_ci2_c6_2"].rotation = cav.img["que_ci2_c6_2"].rotation%360 - 2;
        cav.img["que_ci2_c7_1"].rotation = cav.img["que_ci2_c7_1"].rotation%360 + 2;
        cav.img["que_ci2_c7_2"].rotation = cav.img["que_ci2_c7_2"].rotation%360 + 2;
    };

    cvtw.get(cav.img["que_around_d1"], {loop:true}).to({alpha:0.2}, 1000, createjs.Ease.bounceInOut);
    cvtw.get(cav.img["que_around_d2"], {loop:true}).wait(100).to({alpha:0.2}, 1200, createjs.Ease.bounceInOut);

    cvtw.get(cav.img["que_around_b1"], {loop:true}).to({alpha:0.5}, 1000, createjs.Ease.bounceInOut);
    cvtw.get(cav.img["que_around_b2"], {loop:true}).wait(100).to({alpha:0.5}, 1200, createjs.Ease.bounceInOut);

    cvtw.get(cav.img["que_around_t1"], {loop:true}).to({scaleX:1.2, x:-10}, 800).to({scaleX:1, x:0}, 800);
    cvtw.get(cav.img["que_around_t2"], {loop:true}).to({scaleX:1.2}, 800).to({scaleX:1}, 800);

    cvtw.get(cav.img["que_water_w1"], {loop:true}).to({scaleY:0.9}, 800, createjs.Ease.bounceIn).to({scaleY:1}, 800, createjs.Ease.cubicOut);
    cvtw.get(cav.img["que_water_w2"], {loop:true}).to({scaleY:0.9}, 1000, createjs.Ease.bounceIn).to({scaleY:1}, 800, createjs.Ease.cubicOut);
    cvtw.get(cav.img["que_water_w3"], {loop:true}).to({scaleY:0.9}, 800, createjs.Ease.bounceIn).to({scaleY:1}, 1000, createjs.Ease.cubicOut);
    cvtw.get(cav.img["que_water_w4"], {loop:true}).to({scaleY:0.9}, 1000, createjs.Ease.bounceIn).to({scaleY:1}, 1000, createjs.Ease.cubicOut);

    cvtw.get(cav.img["que_water_pp1"], {loop:true}).to({scaleY:1,scaleX:1,alpha:1,y:918+60-15}, 1100).to({alpha:0}, 300);
    cvtw.get(cav.img["que_water_pp2"], {loop:true}).to({scaleY:1,scaleX:1,alpha:1,y:918+60-15}, 1200).to({alpha:0}, 300);
    cvtw.get(cav.img["que_water_pp3"], {loop:true}).to({scaleY:1,scaleX:1,alpha:1,y:918+60-15}, 1100).to({alpha:0}, 300);
    cvtw.get(cav.img["que_water_pp4"], {loop:true}).to({scaleY:1,scaleX:1,alpha:1,y:918+60-15}, 1200).to({alpha:0}, 300);

    Room.Index.deng();
    Dom.Time_deng = setInterval(function(){
        Room.Index.deng();
    },8600);

};
Room.Index.deng = function(){
    var loop = false;
    var i = 0;
    var st = 100;
    var show_time = 500;
    var show_wait = 700;
    var show_wait_low = 25;
    var wait1 = st*4*22+show_time+show_wait-(show_wait_low*23) - 3000;
    var show1 = 300;
    var show2 = 200;

    //1
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
        .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
    //2
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
        .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
    //3
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
        .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
    //4
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
        .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
    //5
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
        .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
    //6
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
        .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
    //7
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
        .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
    //8
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
        .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
    //9
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
        .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
    //10
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
        .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
    //11
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
        .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
    //12
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
        .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
    //13
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
        .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
    //14
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
        .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
    //15
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
        .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
    //16
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
        .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
    //17
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
        .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
    //18
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
        .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
    //19
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
        .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
    //20
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
        .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
    //21
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
        .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
    //22
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
        .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
    //23
    i++;
    cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
        .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
        .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
        .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
        .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);


};
Room.Index.que_ticker_cls = function(){
    delete(cav_ticker.que_ticker);
};