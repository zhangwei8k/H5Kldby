// Que3
Room.Que3 = {};
Room.Que3.ppt = function(){
    mp3_play("que_bg",1);
    //Room.Door.begin();
    setTimeout(Room.Que.reset, 100);
    cc.ppt(["Que3", "Que4"] , function(after , callback){
        cc.m["Que3"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["Que4"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};
Room.Que3.dom = function(){

    $("#v1").tap(function(e){
        cc.tap(e);
        Room.Que3.playV1();
    });

    $("#Que3 .btn1").tap(function(e){
        cc.tap(e);
        Room.Que.play(1, function(id){
            Room.Que3.select(id);
        });
    });

    $("#Que3 .btn2").tap(function(e){
        cc.tap(e);
        Room.Que.play(2, function(id){
            Room.Que3.select(id);
        });
    });

    $("#Que3 .btn3").tap(function(e){
        cc.tap(e);
        Room.Que.play(3, function(id){
            Room.Que3.select(id);
        });
    });

    $("#Que3 .btn4").tap(function(e){
        cc.tap(e);
        Room.Que.play(4, function(id){
            Room.Que3.select(id);
        });
    });
};
Room.Que3.end = function(dom, id){
    Dom.QueRun = 0;
    var back = {
        "t1":{x:145, y:246},
        "t2":{x:352, y:246},
        "t3":{x:145, y:401},
        "t4":{x:352, y:401}
    };
    // var move = {
    //     "t1":{x1:116, y1:670, x2:116+70, y2:720},
    //     "t2":{x1:230, y1:670, x2:230+70, y2:720},
    //     "t3":{x1:350, y1:670, x2:350+70, y2:720},
    //     "t4":{x1:475, y1:670, x2:475+70, y2:720}
    // };
    var move = {
        "t1":{x1:70, y1:620, x2:116+70, y2:680},
        "t2":{x1:188, y1:620, x2:188+70, y2:680},
        "t3":{x1:312, y1:620, x2:312+70, y2:680},
        "t4":{x1:428, y1:620, x2:475+70, y2:680}
    };
    var down = {
        "t1":{left:155-34, top:695-20},
        "t2":{left:277-34, top:695-20},
        "t3":{left:403-34, top:695-20},
        "t4":{left:522-34, top:695-20}
    };

    var ok = false;
    //var offset = dom.css();
    var x = dom.css("left");
    var y = dom.css("top");
    x = parseInt(x.replace("px", ""));
    y = parseInt(y.replace("px", ""));

    for(var i=1; i<=4; i++){
        if(x>move["t"+i].x1 && x<move["t"+i].x2 && y>move["t"+i].y1 && y<move["t"+i].y2){
            if(!Dom.Que2.ans[i]){
                dom.addClass("act");
                dom.css(down["t"+i]);
                Dom.Que2.ans[i] = id;
                Dom.Que2.myAns[id] = i;
                ok = true;

                Room.Que.play(i, function(idt){
                    Room.Que.play_clsT2(idt);
                    Room.Que.ans_finish(idt, function(){
                        Dom.QueRun = 0;

                    });
                });
                Room.Que2.ans();
            }
        }
    }

    if(!ok) {
        dom.removeClass("act");
        dom.velocity({ scale: 1, left:back["t"+id].x, top:back["t"+id].y}, { duration: 300});
    }

};
Room.Que3.ans = function(id){

    Dom.QueAnsList["t3"] = id;
    console.log(Dom.QueAnsList);
    Room.Que3.ppt();

};

Room.Que3.playV1 = function(){
    cavV1.play("v1", "run");
    mp3_play("v1");
};
Room.Que3.playV2 = function(){
    mp3_stop("v1");
    $("#v1").hide();
    $("#v2").show();
    cavV2.play("v2", "run");
    mp3_play("v2");
};
Room.Que3.select = function(id){
    Room.Que.play_cls(id);
    if(Dom.Ans.que3 == id){
        Room.Que.ans_success(id, function(){
            Room.Que3.playV2();
            //Dom.QueRun = 0;
            setTimeout(function(){
                Room.Que3.ans(1);
            },3500);

        });
    }else{
        Room.Que.ans_error(id, function(){
            Room.Que3.playV2();
            //Dom.QueRun = 0;
            setTimeout(function(){
                Room.Que3.ans(0);
            },3500);
        });
    }
};

Room.Que3.come_before = function(next){
    Dom.QueMyAns = 0;
    Dom.QueRun = 0;
    Dom.QueMyW = 0;
    next();
};

Room.Que3.come_after = function(){
    mp3_stop("que_bg");
    Room.Que3.playV1();
};