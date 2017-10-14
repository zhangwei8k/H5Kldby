Room.Que.ans_finish = function(id, fn){
    Dom.QueMyAns = id;
    cvtw.get(cav.img["que_heart_s"+id]).to({alpha:1 }, 800).call(function(){
        if(fn) fn();
    });
};
Room.Que.play_clsT2 = function(id){
    if(Dom.QueMyAns) cvtw.get(cav.img["que_heart_s"+Dom.QueMyAns]).to({alpha:0 }, 300);
    cvtw.removeTweens(cav.img["que_water_c"+id]);
};

// Que2
Room.Que2 = {};
Room.Que2.ppt = function(){

    Room.Que.ABCD_show();
    //Room.Door.begin();
    setTimeout(Room.Que.reset, 100);
    cc.ppt(["Que2", "Que3"] , function(after , callback){
        cc.m["Que2"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["Que3"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
            after.come();
        }});

    })
};
Room.Que2.dom = function(){

    Dom.Que2 = {};
    Dom.Que2.ans = [];
    Dom.Que2.myAns = [];

    Dom.Que2.b1 = $("#Que2 .p1");
    Dom.Que2.b2 = $("#Que2 .p2");
    Dom.Que2.b3 = $("#Que2 .p3");
    Dom.Que2.b4 = $("#Que2 .p4");

    Dom.Que2.b1.velocity({ scale: 0.5, left:40, top:170}, { duration: 0});
    Dom.Que2.b2.velocity({ scale: 0.5, left:260, top:170}, { duration: 0});
    Dom.Que2.b3.velocity({ scale: 0.5, left:40, top:320}, { duration: 0});
    Dom.Que2.b4.velocity({ scale: 0.5, left:260, top:320}, { duration: 0});

    // $("#Que2 .btn1").tap(function(e){
    //     cc.tap(e);
    //     Dom.Que2.ans = [0,4,1,2,3];
    //     Room.Que2.ans();
    // });

    Dom.Que2.p1 = new HammerMove("#Que2 .p1", {
        start:function(pa){
            $("#Que2 .pp").css({'z-index':1});
            Dom.Que2.ans[Dom.Que2.myAns[1]] = 0;
            pa.dom.css({'z-index':9, '-webkit-transform':'scale(0.25)'});
        },
        end:function(pa){
            Room.Que2.end(pa.dom, 1);
        }
    });

    Dom.Que2.p2 = new HammerMove("#Que2 .p2", {
        start:function(pa){
            $("#Que2 .pp").css({'z-index':1});
            Dom.Que2.ans[Dom.Que2.myAns[2]] = 0;
            pa.dom.css({'z-index':9, '-webkit-transform':'scale(0.25)'});
        },
        end:function(pa){
            Room.Que2.end(pa.dom, 2);
        }
    });

    Dom.Que2.p3 = new HammerMove("#Que2 .p3", {
        start:function(pa){
            $("#Que2 .pp").css({'z-index':1});
            Dom.Que2.ans[Dom.Que2.myAns[3]] = 0;
            pa.dom.css({'z-index':9, '-webkit-transform':'scale(0.25)'});
        },
        end:function(pa){
            Room.Que2.end(pa.dom, 3);
        }
    });

    Dom.Que2.p4 = new HammerMove("#Que2 .p4", {
        start:function(pa){
            $("#Que2 .pp").css({'z-index':1});
            Dom.Que2.ans[Dom.Que2.myAns[4]] = 0;
            pa.dom.css({'z-index':9, '-webkit-transform':'scale(0.25)'});
        },
        end:function(pa){
            Room.Que2.end(pa.dom, 4);
        }
    });

    /////////////////////////////////////


    Dom.Que2.b1_back = $("#Que2 .b1_back");
    Dom.Que2.b2_back = $("#Que2 .b2_back");
    Dom.Que2.b3_back = $("#Que2 .b3_back");
    Dom.Que2.b4_back = $("#Que2 .b4_back");

    Dom.Que2.b1.click(function(e){
        cc.tap(e);

        if(Dom.Que2.b1.hasClass("act")) return;

        Dom.Que2.b1.css({ 'z-index':3}).velocity({ scale: 1, left:146, top:245}, { duration: 300});
        if(!Dom.Que2.b2.hasClass("act")) Dom.Que2.b2.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que2.b3.hasClass("act")) Dom.Que2.b3.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que2.b4.hasClass("act")) Dom.Que2.b4.velocity({ opacity: 0}, { duration: 300});

        Dom.Que2.b1_back.show();

    });
    Dom.Que2.b1_back.tap(function(e){
        cc.tap(e);

        Dom.Que2.b1.css({ 'z-index':1}).velocity({  scale: 0.5, left:40, top:170}, { duration: 300});
        if(!Dom.Que2.b2.hasClass("act")) Dom.Que2.b2.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que2.b3.hasClass("act")) Dom.Que2.b3.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que2.b4.hasClass("act")) Dom.Que2.b4.velocity({ opacity: 1}, { duration: 300});

        Dom.Que2.b1_back.hide();
    });


    Dom.Que2.b2.click(function(e){
        cc.tap(e);

        if(Dom.Que2.b2.hasClass("act")) return;

        Dom.Que2.b2.css({ 'z-index':3}).velocity({ scale: 1, left:146, top:245}, { duration: 300});
        if(!Dom.Que2.b1.hasClass("act")) Dom.Que2.b1.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que2.b3.hasClass("act")) Dom.Que2.b3.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que2.b4.hasClass("act")) Dom.Que2.b4.velocity({ opacity: 0}, { duration: 300});

        Dom.Que2.b2_back.show();

    });
    Dom.Que2.b2_back.tap(function(e){
        cc.tap(e);

        Dom.Que2.b2.css({ 'z-index':1}).velocity({  scale: 0.5, left:260, top:170}, { duration: 300});
        if(!Dom.Que2.b1.hasClass("act")) Dom.Que2.b1.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que2.b3.hasClass("act")) Dom.Que2.b3.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que2.b4.hasClass("act")) Dom.Que2.b4.velocity({ opacity: 1}, { duration: 300});

        Dom.Que2.b2_back.hide();
    });

    Dom.Que2.b3.click(function(e){
        cc.tap(e);

        if(Dom.Que2.b3.hasClass("act")) return;

        Dom.Que2.b3.css({ 'z-index':3}).velocity({ scale: 1, left:146, top:245}, { duration: 300});
        if(!Dom.Que2.b1.hasClass("act")) Dom.Que2.b1.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que2.b2.hasClass("act")) Dom.Que2.b2.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que2.b4.hasClass("act")) Dom.Que2.b4.velocity({ opacity: 0}, { duration: 300});

        Dom.Que2.b3_back.show();

    });
    Dom.Que2.b3_back.tap(function(e){
        cc.tap(e);

        Dom.Que2.b3.css({ 'z-index':1}).velocity({  scale: 0.5, left:40, top:320}, { duration: 300});
        if(!Dom.Que2.b1.hasClass("act")) Dom.Que2.b1.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que2.b2.hasClass("act")) Dom.Que2.b2.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que2.b4.hasClass("act")) Dom.Que2.b4.velocity({ opacity: 1}, { duration: 300});

        Dom.Que2.b3_back.hide();
    });

    Dom.Que2.b4.click(function(e){
        cc.tap(e);

        if(Dom.Que2.b4.hasClass("act")) return;

        Dom.Que2.b4.css({ 'z-index':3}).velocity({ scale: 1, left:146, top:245}, { duration: 300});
        if(!Dom.Que2.b1.hasClass("act")) Dom.Que2.b1.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que2.b2.hasClass("act")) Dom.Que2.b2.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que2.b3.hasClass("act")) Dom.Que2.b3.velocity({ opacity: 0}, { duration: 300});

        Dom.Que2.b4_back.show();

    });
    Dom.Que2.b4_back.tap(function(e){
        cc.tap(e);

        Dom.Que2.b4.css({ 'z-index':1}).velocity({  scale: 0.5, left:260, top:320}, { duration: 300});
        if(!Dom.Que2.b1.hasClass("act")) Dom.Que2.b1.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que2.b2.hasClass("act")) Dom.Que2.b2.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que2.b3.hasClass("act")) Dom.Que2.b3.velocity({ opacity: 1}, { duration: 300});

        Dom.Que2.b4_back.hide();
    });


};
Room.Que2.end = function(dom, id){
    Dom.QueRun = 0;

    var back = {
        "t1":{x:40, y:170},
        "t2":{x:260, y:170},
        "t3":{x:40, y:320},
        "t4":{x:260, y:320}
    };
    var move = {
        "t1":{x1:-45, y1:555, x2:-45+70, y2:626},
        "t2":{x1:70, y1:555, x2:70+70, y2:626},
        "t3":{x1:191, y1:555, x2:191+70, y2:626},
        "t4":{x1:313, y1:555, x2:313+70, y2:626}
    };
    var down = {
        "t1":{left:56, top:635},
        "t2":{left:179, top:635},
        "t3":{left:304, top:635},
        "t4":{left:424, top:635}
    };

    var ok = false;
    //var offset = dom.css();
    var x = dom.css("left");
    var y = dom.css("top");
    x = parseInt(x.replace("px", ""));
    y = parseInt(y.replace("px", ""));

    //console.log(x, y);

    for(var i=1; i<=4; i++){
        if(x>move["t"+i].x1 && x<move["t"+i].x2 && y>move["t"+i].y1 && y<move["t"+i].y2){
            if(!Dom.Que2.ans[i]){
                dom.addClass("act");
                dom.css(down["t"+i]);
                Dom.Que2.ans[i] = id;
                Dom.Que2.myAns[id] = i;
                ok = true;

                console.log(Dom.Que2.ans, Dom.Que2.myAns);
                // Room.Que.play(i, function(idt){
                //     Room.Que.play_clsT2(idt);
                //     Room.Que.ans_finish(idt, function(){
                //         Dom.QueRun = 0;
                //
                //     });
                // });
                Room.Que2.ans();
            }
        }
    }

    if(!ok) {
        dom.removeClass("act");
        dom.css({'z-index':3}).velocity({ scale: 0.5, left:back["t"+id].x, top:back["t"+id].y}, { duration: 300});
    }

};
Room.Que2.ans = function(){
    var finish = 0;
    var myAns = "";
    for(var i=1; i<=4; i++){
        if(Dom.Que2.ans[i]) finish++;
        myAns = myAns+Dom.Que2.ans[i];
    }
    if(finish==4){
        Dom.Que2.p1.enable = false;
        Dom.Que2.p2.enable = false;
        Dom.Que2.p3.enable = false;
        Dom.Que2.p4.enable = false;

        if(Dom.Ans.que2==myAns){
            Room.Que.play_all(1, function(){
                Dom.QueAnsList["t2"] = 1;
                setTimeout(Room.Que2.ppt, 500);
            });
        }else{
            Room.Que.play_all(0, function(){
                Dom.QueAnsList["t2"] = 0;
                setTimeout(Room.Que2.ppt, 500);
            });
        }

        console.log(Dom.QueAnsList);
        //setTimeout(Room.Que2.ppt, 2200);
    }
};
Room.Que2.come_before = function(next){
    Dom.QueMyAns = 0;
    Dom.QueRun = 0;
    Dom.QueMyW = 0;

    Dom.Que2.b1.velocity({ scale: 0.5, left:40, top:170}, { duration: 0});
    Dom.Que2.b2.velocity({ scale: 0.5, left:260, top:170}, { duration: 0});
    Dom.Que2.b3.velocity({ scale: 0.5, left:40, top:320}, { duration: 0});
    Dom.Que2.b4.velocity({ scale: 0.5, left:260, top:320}, { duration: 0});

    Room.Que.ABCD_cls();

    next();
};