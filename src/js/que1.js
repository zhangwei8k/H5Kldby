Room.Que1 = {};
Room.Que1.ppt = function(){

    //Room.Door.begin();
    setTimeout(Room.Que.reset, 100);
    cc.ppt(["Que1", "Que2"] , function(after , callback){
        cc.m["Que1"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["Que2"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};
Room.Que1.ans = function(id, ans){
    Dom.QueAnsList["t"+id] = ans;
    console.log(Dom.QueAnsList);
    Room["Que"+id].ppt();
};
Room.Que1.dom = function(){

    Dom.Que1 = {};
    Dom.Que1.b1 = $("#Que1 .b1");
    Dom.Que1.b2 = $("#Que1 .b2");
    Dom.Que1.b3 = $("#Que1 .b3");
    Dom.Que1.b4 = $("#Que1 .b4");

    Dom.Que1.b1.velocity({ scale: 0.5, left:50, top:140}, { duration: 0});
    Dom.Que1.b2.velocity({ scale: 0.5, left:260, top:140}, { duration: 0});
    Dom.Que1.b3.velocity({ scale: 0.5, left:50, top:310}, { duration: 0});
    Dom.Que1.b4.velocity({ scale: 0.5, left:260, top:310}, { duration: 0});

    $("#Que1 .btn1").tap(function(e){
        cc.tap(e);
        Room.Que.play(1, function(id){
            Room.Que1.select(id);
        });
    });

    $("#Que1 .btn2").tap(function(e){
        cc.tap(e);
        Room.Que.play(2, function(id){
            Room.Que1.select(id);
        });
    });

    $("#Que1 .btn3").tap(function(e){
        cc.tap(e);
        Room.Que.play(3, function(id){
            Room.Que1.select(id);
        });
    });

    $("#Que1 .btn4").tap(function(e){
        cc.tap(e);
        Room.Que.play(4, function(id){
            Room.Que1.select(id);
        });
    });


    Dom.Que1.b1_back = $("#Que1 .b1_back");
    Dom.Que1.b2_back = $("#Que1 .b2_back");
    Dom.Que1.b3_back = $("#Que1 .b3_back");
    Dom.Que1.b4_back = $("#Que1 .b4_back");

    Dom.Que1.b1.tap(function(e){
        cc.tap(e);

        Dom.Que1.b1.css({ 'z-index':3}).velocity({ scale: 1, left:146, top:217}, { duration: 300});
        Dom.Que1.b2.velocity({ opacity: 0}, { duration: 300});
        Dom.Que1.b3.velocity({ opacity: 0}, { duration: 300});
        Dom.Que1.b4.velocity({ opacity: 0}, { duration: 300});

        Dom.Que1.b1_back.show();

    });
    Dom.Que1.b1_back.tap(function(e){
        cc.tap(e);

        Dom.Que1.b1.css({ 'z-index':1}).velocity({  scale: 0.5, left:50, top:140}, { duration: 300});
        Dom.Que1.b2.velocity({ opacity: 1}, { duration: 300});
        Dom.Que1.b3.velocity({ opacity: 1}, { duration: 300});
        Dom.Que1.b4.velocity({ opacity: 1}, { duration: 300});

        Dom.Que1.b1_back.hide();
    });

    Dom.Que1.b2.tap(function(e){
        cc.tap(e);

        Dom.Que1.b2.css({ 'z-index':3}).velocity("stop").velocity({ scale: 1, left:146, top:217}, { duration: 300});
        Dom.Que1.b1.velocity("stop").velocity({ opacity: 0}, { duration: 300});
        Dom.Que1.b3.velocity("stop").velocity({ opacity: 0}, { duration: 300});
        Dom.Que1.b4.velocity("stop").velocity({ opacity: 0}, { duration: 300});

        Dom.Que1.b2_back.show();
    });
    Dom.Que1.b2_back.tap(function(e){
        cc.tap(e);

        Dom.Que1.b2.css({ 'z-index':1}).velocity("stop").velocity({  scale: 0.5, left:260, top:140}, { duration: 300});
        Dom.Que1.b1.velocity("stop").velocity({ opacity: 1}, { duration: 300});
        Dom.Que1.b3.velocity("stop").velocity({ opacity: 1}, { duration: 300});
        Dom.Que1.b4.velocity("stop").velocity({ opacity: 1}, { duration: 300});

        Dom.Que1.b2_back.hide();
    });

    Dom.Que1.b3.tap(function(e){
        cc.tap(e);

        Dom.Que1.b3.css({ 'z-index':3}).velocity({ scale: 1, left:146, top:217}, { duration: 300});
        Dom.Que1.b1.velocity({ opacity: 0}, { duration: 300});
        Dom.Que1.b2.velocity({ opacity: 0}, { duration: 300});
        Dom.Que1.b4.velocity({ opacity: 0}, { duration: 300});

        Dom.Que1.b3_back.show();

    });
    Dom.Que1.b3_back.tap(function(e){
        cc.tap(e);

        Dom.Que1.b3.css({ 'z-index':1}).velocity({  scale: 0.5, left:50, top:310}, { duration: 300});
        Dom.Que1.b1.velocity({ opacity: 1}, { duration: 300});
        Dom.Que1.b2.velocity({ opacity: 1}, { duration: 300});
        Dom.Que1.b4.velocity({ opacity: 1}, { duration: 300});

        Dom.Que1.b3_back.hide();
    });

    Dom.Que1.b4.tap(function(e){
        cc.tap(e);

        Dom.Que1.b4.css({ 'z-index':3}).velocity({ scale: 1, left:146, top:217}, { duration: 300});
        Dom.Que1.b1.velocity({ opacity: 0}, { duration: 300});
        Dom.Que1.b2.velocity({ opacity: 0}, { duration: 300});
        Dom.Que1.b3.velocity({ opacity: 0}, { duration: 300});

        Dom.Que1.b4_back.show();

    });

    Dom.Que1.b4_back.tap(function(e){
        cc.tap(e);

        Dom.Que1.b4.css({ 'z-index':1}).velocity({  scale: 0.5, left:260, top:310}, { duration: 300});
        Dom.Que1.b1.velocity({ opacity: 1}, { duration: 300});
        Dom.Que1.b2.velocity({ opacity: 1}, { duration: 300});
        Dom.Que1.b3.velocity({ opacity: 1}, { duration: 300});

        Dom.Que1.b4_back.hide();
    });

};
Room.Que1.select = function(id){
    Room.Que.play_cls(id);
    if(Dom.Ans.que1 == id){
        Room.Que.ans_success(id, function(){
            //Dom.QueRun = 0;
            setTimeout(function(){
                Room.Que1.ans(1, 1);
            },500);

        });
    }else{
        Room.Que.ans_error(id, function(){
            //Dom.QueRun = 0;
            setTimeout(function(){
                Room.Que1.ans(1, 0);
            },500);
        });
    }
};

Room.Que1.come_before = function(next){

    Dom.Que1.b1.velocity({ scale: 0.5, left:50, top:140}, { duration: 0});
    Dom.Que1.b2.velocity({ scale: 0.5, left:260, top:140}, { duration: 0});
    Dom.Que1.b3.velocity({ scale: 0.5, left:50, top:310}, { duration: 0});
    Dom.Que1.b4.velocity({ scale: 0.5, left:260, top:310}, { duration: 0});
    next();
};