Room.Game = {};
var _ball,_coll,_die1,_die2,_die3,_ok,_path1,_path2,_path3,_path4,_path5;
Room.Game.dom = function(){
    // cc.m["Game"].tap(function(e){
    //    cc.tap(e);
    //     Room.Game.over();
    // });

    _ball = gamecav.sprite["ball"];
    _coll = gamecav.dom["collide"];

    _die1 = gamecav.dom["die1"];
    _die2 = gamecav.dom["die2"];
    _die3 = gamecav.dom["die3"];

    Dom.gamePath = {};
    Dom.gamePathas = {};
    _path1 = gamecav.dom["game_path1"];
    _path2 = gamecav.dom["game_path2"];
    _path3 = gamecav.dom["game_path3"];
    _path4 = gamecav.dom["game_path4"];
    _path5 = gamecav.dom["game_path5"];

    _ok = gamecav.dom["ok"];

    Dom.gameBox1 = $("#Game .box1");
    Dom.gameBox2 = $("#Game .box2");
    Dom.gameBox3 = $("#Game .box3");
    Dom.gameBox4 = $("#Game .box4");
    Dom.gameBox = $("#Game .box");
    Dom.gameBtns = $("#Game .btns");
    Dom.gameBtn1 = $("#Game .btn1");
    Dom.gameBtn2 = $("#Game .btn2");
    Dom.gameW = $("#Game .btns .w");

    Dom.gameBtn1.tap(function(e){
        cc.tap(e);
        Dom.gameBtns.velocity({ opacity: 0}, { duration: 800, display:"none"});
        setTimeout(Room.Game.restart, 800);
    });
    Dom.gameBtn2.tap(function(e){
        cc.tap(e);
        Room.Game.ppt();
    });

    Dom.gameTime1 = 0;
    Dom.gameTime2 = 0;

    // Dom.msg = $("#Game .msg");

    // gamecav.drag(gamecav.cc["game"], _ball, {x:-15, y:-15});

};
Room.Game.ppt = function(){
    cc.ppt(["Game", "End"] , function(after , callback){
        cc.m["Game"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["End"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};
Room.Game.restart = function(){

    _ball.x = 127;
    _ball.y = 67;
    cvtw.get(_ball).to({alpha:1 }, 200);

    Dom.gameBox.velocity({ opacity: 0}, { duration: 200, display:"none"});

    cvtw.get(gamecav.img["game_bgx"]).to({alpha:0 }, 200).call(function(){

        Dom.gamePath = {};
        Dom.gamePathas = {};
        If.BallMove = true;
        If.hitTest = true;
        Dom.gameTime1 = new Date();

    });

};

Room.Game.come_before = function(next){

    Dom.gameTime1 = 0;
    Dom.gameTime2 = 0;

    Dom.gamePath = {};
    Dom.gamePathas = {};

    _ball.gotoAndPlay("ini");

    gamecav.img["game_3"].alpha = 1;
    gamecav.img["game_3"].scaleX = 1;
    gamecav.img["game_3"].scaleY = 1;

    gamecav.img["game_2"].alpha = 0;
    gamecav.img["game_2"].scaleX = 1;
    gamecav.img["game_2"].scaleY = 1;

    gamecav.img["game_1"].alpha = 0;
    gamecav.img["game_1"].scaleX = 1;
    gamecav.img["game_1"].scaleY = 1;

    Dom.gameBox1.css("opacity",0);
    Dom.gameBox2.css("opacity",0);
    Dom.gameBox3.css("opacity",0);
    Dom.gameBox4.css("opacity",0);

    Dom.gameBtns.css("opacity",0);

    _ball.alpha = 1;
    _ball.x = 127;
    _ball.y = 67;

    for(var i=1; i<=5; i++){
        gamecav.img["game_a"+i+"_1"].alpha = 0;
        gamecav.img["game_a"+i+"_2"].alpha = 0;
        gamecav.img["game_a"+i+"_3"].alpha = 0;
    }

    next();
};

Room.Game.come_after = function(){
    If.BallMove = false;
    If.hitTest = false;

    cvtw.get(gamecav.img["game_c1"], {loop:true}).to({rotation:359 }, 2000);
    cvtw.get(gamecav.img["game_c2"], {loop:true}).to({rotation:359 }, 2000);
    cvtw.get(gamecav.img["game_c3"], {loop:true}).to({rotation:359 }, 2000);

    cvtw.get(gamecav.img["game_line1"], {loop:true}).to({alpha:0.5}, 1000, createjs.Ease.bounceInOut);
    cvtw.get(gamecav.img["game_line2"], {loop:true}).to({alpha:0.5}, 1000, createjs.Ease.bounceInOut);

    setTimeout(Room.Game.start, 600);


};
Room.Game.start = function(){
    mp3_play("gamecome");
    cvtw.get(gamecav.img["game_3"]).to({alpha:0, scaleX:0.5, scaleY:0.5 }, 500);
    cvtw.get(gamecav.img["game_2"]).to({alpha:1, scaleX:1, scaleY:1 }, 800).call(function(){
        cvtw.get(gamecav.img["game_2"]).wait(500).to({alpha:0, scaleX:0.5, scaleY:0.5 }, 500);
        cvtw.get(gamecav.img["game_1"]).wait(500).to({alpha:1, scaleX:1, scaleY:1 }, 800).call(function(){
            cvtw.get(gamecav.img["game_1"]).wait(500).to({alpha:0, scaleX:0.5, scaleY:0.5 }, 500);
            cvtw.get(gamecav.img["game_bgx"]).wait(800).to({alpha:0}, 500);

            If.BallMove = true;
            If.hitTest = true;
            Dom.gameTime1 = new Date();
            Room.Game.orientation();
        });
    });

};
Room.Game.orientation = function(){
    window.addEventListener("deviceorientation", handleOrientation, true);
    cc.ticker("Game", Room.Game.hitTest);
};
Room.Game.hitTest = function(){
    if(!If.hitTest) return;
    Room.Game.ballMove();

    if(!_coll.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.over();
    }
    // else{ Dom.msg.css('background-color','green');}

    if(!Dom.gamePath.p1 && _die1.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.over();
    }
    if(!Dom.gamePath.p5 && Dom.gamePath.p4 && _die2.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.over();
    }
    if(!Dom.gamePath.p5 && Dom.gamePath.p4 && _die3.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.over();
    }

    if(!Dom.gamePath.p1 && _path1.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.path(1);
    }
    if(Dom.gamePath.p1 && !Dom.gamePathas.p1 && !_path1.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.pathas(1);
    }

    if(!Dom.gamePath.p2 && _path2.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.path(2);
    }
    if(Dom.gamePath.p2 && !Dom.gamePathas.p2 && !_path2.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.pathas(2);
    }

    if(!Dom.gamePath.p3 && _path3.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.path(3);
    }
    if(Dom.gamePath.p3 && !Dom.gamePathas.p3 && !_path3.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.pathas(3);
    }

    if(!Dom.gamePath.p4 && _path4.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.path(4);
    }
    if(Dom.gamePath.p4 && !Dom.gamePathas.p4 && !_path4.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.pathas(4);
    }

    if(!Dom.gamePath.p5 && _path5.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.path(5);
    }
    if(Dom.gamePath.p5 && !Dom.gamePathas.p5 && !_path5.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.pathas(5);
    }

    if(Dom.gamePath.p5 && _ok.hitTest(_ball.x+15, _ball.y+15)){
        Room.Game.finish();
    }

};
Room.Game.path = function(id){
    Dom.gamePath["p"+id] = 1;

    cvtw.get(gamecav.img["game_a"+id+"_1"], {loop:true}).to({alpha:1 }, 300).wait(400).to({alpha:0 }, 300).wait(1000);
    cvtw.get(gamecav.img["game_a"+id+"_2"], {loop:true}).wait(500).to({alpha:1 }, 300).wait(400).to({alpha:0 }, 300).wait(500);
    cvtw.get(gamecav.img["game_a"+id+"_3"], {loop:true}).wait(1000).to({alpha:1 }, 300).wait(400).to({alpha:0 }, 300);

};

Room.Game.pathas = function(id){
    Dom.gamePathas["p"+id] = 1;

    cvtw.removeTweens(gamecav.img["game_a"+id+"_1"]);
    cvtw.removeTweens(gamecav.img["game_a"+id+"_2"]);
    cvtw.removeTweens(gamecav.img["game_a"+id+"_3"]);

    cvtw.get(gamecav.img["game_a"+id+"_1"]).to({alpha:1 }, 500);
    cvtw.get(gamecav.img["game_a"+id+"_2"]).to({alpha:1 }, 500);
    cvtw.get(gamecav.img["game_a"+id+"_3"]).to({alpha:1 }, 500);

};
Room.Game.over = function(){
    mp3_play("gameover");
    If.BallMove = false;
    If.hitTest = false;
    Dom.gameTime2 = new Date();
    var tt = Room.Game.timeCount();
    Dom.gameW.html(tt.h+":"+tt.m+":"+tt.s);
    Dom.QueAnsList.game = tt.num;
    Dom.QueAnsList.gameM = tt.m;
    Dom.QueAnsList.gameS = tt.s;
    Dom.QueAnsList.gameOk = 0;

    console.log(Dom.QueAnsList);

    Dom.ballMoving = 0;
    _ball.gotoAndPlay("ini");

    cvtw.get(gamecav.img["game_bgx"]).to({alpha:1 }, 500);
    cvtw.get(_ball).to({alpha:0 }, 500);

    if(Dom.gamePath.p5){
        Dom.gameBox3.css("opacity",0).show().velocity({ opacity: 1}, { duration: 800});
        Dom.gameBtns.css("opacity",0).show().velocity({ opacity: 1}, { duration: 800});

    }else if(Dom.gamePath.p3 || Dom.gamePath.p4){
        Dom.gameBox2.css("opacity",0).show().velocity({ opacity: 1}, { duration: 800});
        Dom.gameBtns.css("opacity",0).show().velocity({ opacity: 1}, { duration: 800});

    }else{
        Dom.gameBox1.css("opacity",0).show().velocity({ opacity: 1}, { duration: 800});
        Dom.gameBtns.css("opacity",0).show().velocity({ opacity: 1}, { duration: 800});

    }

    for(var i=1; i<=5; i++){
        cvtw.removeTweens(gamecav.img["game_a"+i+"_1"]);
        cvtw.removeTweens(gamecav.img["game_a"+i+"_2"]);
        cvtw.removeTweens(gamecav.img["game_a"+i+"_3"]);
        gamecav.img["game_a"+i+"_1"].alpha = 0;
        gamecav.img["game_a"+i+"_2"].alpha = 0;
        gamecav.img["game_a"+i+"_3"].alpha = 0;
    }

};
Room.Game.finish = function(){

    mp3_play("gamefinish");

    If.BallMove = false;
    If.hitTest = false;
    Dom.gameTime2 = new Date();
    var tt = Room.Game.timeCount();
    Dom.gameW.html(tt.h+":"+tt.m+":"+tt.s);
    Dom.QueAnsList.game = tt.num;
    Dom.QueAnsList.gameM = tt.m;
    Dom.QueAnsList.gameS = tt.s;
    Dom.QueAnsList.gameOk = 1;

    Dom.ballMoving = 0;
    _ball.gotoAndPlay("ini");

    cvtw.get(gamecav.img["game_bgx"]).to({alpha:1 }, 500);
    cvtw.get(_ball).to({alpha:0 }, 500);

    Dom.gameBox4.css("opacity",0).show().velocity({ opacity: 1}, { duration: 800});
    Dom.gameBtns.css("opacity",0).show().velocity({ opacity: 1}, { duration: 800});

    // Dom.msg.css('background-color','blue');
};

Room.Game.timeCount = function(){
    var date3 = Dom.gameTime2.getTime() - Dom.gameTime1.getTime();   //时间差的毫秒数

    //计算出相差天数
    var days=Math.floor(date3/(24*3600*1000))

    //计算出小时数

    var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000))
    //计算相差分钟数
    var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000))
    //计算相差秒数
    var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000);

    if(days<10) days = "0"+days;
    if(hours<10) hours = "0"+hours;
    if(minutes<10) minutes = "0"+minutes;
    if(seconds<10) seconds = "0"+seconds;

    return {
        "d":days,
        "h":hours,
        "m":minutes,
        "s":seconds,
        "num":date3/1000
    }
};

Room.Game.ballMove = function(){
    var spx = (_sx+_gx)/1.5;
    var spy = (_sy+_gy)/1.5;

    // if(parseInt(spx/65)!=0) console.log("x"+_tx);
    // if(parseInt(spy/65)!=0) console.log("y"+_ty);

    if(parseInt(spx/55)!=0 || parseInt(spy/55)!=0) {
        if(!Dom.ballMoving) {
            Dom.ballMoving = 1;
            _ball.gotoAndPlay("run");
        }
    }else{
        Dom.ballMoving = 0;
        _ball.gotoAndPlay("ini");
    }

    _ball.x+= parseInt(spx/55);
    _ball.y+= parseInt(spy/55);
    _sx = spx;
    _sy = spy;

    if(_ball.x<0) _ball.x = 0;
    if(_ball.x>680) _ball.x = 680;

    if(_ball.y<0) _ball.y = 0;
    if(_ball.y>1120) _ball.y = 1120;
};

var _ox = 0;
var _oy = 0;
var _gx = 0;
var _gy = 0;
var _sx = 0;
var _sy = 0;
var _tx = 0;
var _ty = 0;

function handleOrientation(event) {

    if(!If.BallMove) return;

    var x = event.gamma;  // In degree in the range [-180,180]
    var y = event.beta; // In degree in the range [-90,90]

    // _tx = x;
    // _ty = y;

    _ox = _gx;
    _oy = _gy;
    _gx = (x*Math.abs(x));
    _gy = (y*Math.abs(y));

}