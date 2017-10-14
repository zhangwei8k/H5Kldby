// Que4
Room.Que4 = {};
Room.Que4.ppt = function(){

    //Room.Door.begin();
    setTimeout(Room.Que.reset, 100);
    cc.ppt(["Que4", "Que5"] , function(after , callback){
        cc.m["Que4"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["Que5"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};
Room.Que4.dom = function(){

    Dom.Que4 = {};

    Dom.Que4.b1 = $("#Que4 .p1");
    Dom.Que4.b2 = $("#Que4 .p2");
    Dom.Que4.b3 = $("#Que4 .p3");
    Dom.Que4.b4 = $("#Que4 .p4");

    Dom.Que4.b1.velocity({ scale: 0.5, left:40, top:170}, { duration: 0});
    Dom.Que4.b2.velocity({ scale: 0.5, left:260, top:170}, { duration: 0});
    Dom.Que4.b3.velocity({ scale: 0.5, left:40, top:320}, { duration: 0});
    Dom.Que4.b4.velocity({ scale: 0.5, left:260, top:320}, { duration: 0});

    Dom.Que4.b1_back = $("#Que4 .b1_back");
    Dom.Que4.b2_back = $("#Que4 .b2_back");
    Dom.Que4.b3_back = $("#Que4 .b3_back");
    Dom.Que4.b4_back = $("#Que4 .b4_back");

    Dom.Que4.b1.click(function(e){
        cc.tap(e);

        if(Dom.Que4.b1.hasClass("act")) return;

        Dom.Que4.b1.css({ 'z-index':3}).velocity({ scale: 1, left:146, top:245}, { duration: 300});
        if(!Dom.Que4.b2.hasClass("act")) Dom.Que4.b2.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que4.b3.hasClass("act")) Dom.Que4.b3.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que4.b4.hasClass("act")) Dom.Que4.b4.velocity({ opacity: 0}, { duration: 300});

        Dom.Que4.b1_back.show();

    });
    Dom.Que4.b1_back.tap(function(e){
        cc.tap(e);

        Dom.Que4.b1.css({ 'z-index':1}).velocity({  scale: 0.5, left:40, top:170}, { duration: 300});
        if(!Dom.Que4.b2.hasClass("act")) Dom.Que4.b2.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que4.b3.hasClass("act")) Dom.Que4.b3.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que4.b4.hasClass("act")) Dom.Que4.b4.velocity({ opacity: 1}, { duration: 300});

        Dom.Que4.b1_back.hide();
    });


    Dom.Que4.b2.click(function(e){
        cc.tap(e);

        if(Dom.Que4.b2.hasClass("act")) return;

        Dom.Que4.b2.css({ 'z-index':3}).velocity({ scale: 1, left:146, top:245}, { duration: 300});
        if(!Dom.Que4.b1.hasClass("act")) Dom.Que4.b1.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que4.b3.hasClass("act")) Dom.Que4.b3.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que4.b4.hasClass("act")) Dom.Que4.b4.velocity({ opacity: 0}, { duration: 300});

        Dom.Que4.b2_back.show();

    });
    Dom.Que4.b2_back.tap(function(e){
        cc.tap(e);

        Dom.Que4.b2.css({ 'z-index':1}).velocity({  scale: 0.5, left:260, top:170}, { duration: 300});
        if(!Dom.Que4.b1.hasClass("act")) Dom.Que4.b1.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que4.b3.hasClass("act")) Dom.Que4.b3.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que4.b4.hasClass("act")) Dom.Que4.b4.velocity({ opacity: 1}, { duration: 300});

        Dom.Que4.b2_back.hide();
    });

    Dom.Que4.b3.click(function(e){
        cc.tap(e);

        if(Dom.Que4.b3.hasClass("act")) return;

        Dom.Que4.b3.css({ 'z-index':3}).velocity({ scale: 1, left:146, top:245}, { duration: 300});
        if(!Dom.Que4.b1.hasClass("act")) Dom.Que4.b1.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que4.b2.hasClass("act")) Dom.Que4.b2.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que4.b4.hasClass("act")) Dom.Que4.b4.velocity({ opacity: 0}, { duration: 300});

        Dom.Que4.b3_back.show();

    });
    Dom.Que4.b3_back.tap(function(e){
        cc.tap(e);

        Dom.Que4.b3.css({ 'z-index':1}).velocity({  scale: 0.5, left:40, top:320}, { duration: 300});
        if(!Dom.Que4.b1.hasClass("act")) Dom.Que4.b1.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que4.b2.hasClass("act")) Dom.Que4.b2.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que4.b4.hasClass("act")) Dom.Que4.b4.velocity({ opacity: 1}, { duration: 300});

        Dom.Que4.b3_back.hide();
    });

    Dom.Que4.b4.click(function(e){
        cc.tap(e);

        if(Dom.Que4.b4.hasClass("act")) return;

        Dom.Que4.b4.css({ 'z-index':3}).velocity({ scale: 1, left:146, top:245}, { duration: 300});
        if(!Dom.Que4.b1.hasClass("act")) Dom.Que4.b1.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que4.b2.hasClass("act")) Dom.Que4.b2.velocity({ opacity: 0}, { duration: 300});
        if(!Dom.Que4.b3.hasClass("act")) Dom.Que4.b3.velocity({ opacity: 0}, { duration: 300});

        Dom.Que4.b4_back.show();

    });
    Dom.Que4.b4_back.tap(function(e){
        cc.tap(e);

        Dom.Que4.b4.css({ 'z-index':1}).velocity({  scale: 0.5, left:260, top:320}, { duration: 300});
        if(!Dom.Que4.b1.hasClass("act")) Dom.Que4.b1.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que4.b2.hasClass("act")) Dom.Que4.b2.velocity({ opacity: 1}, { duration: 300});
        if(!Dom.Que4.b3.hasClass("act")) Dom.Que4.b3.velocity({ opacity: 1}, { duration: 300});

        Dom.Que4.b4_back.hide();
    });

    $("#Que4 .btn1").tap(function(e){
        cc.tap(e);
        Room.Que.play(1, function(id){
            Room.Que4.select(id);
        });
    });

    $("#Que4 .btn2").tap(function(e){
        cc.tap(e);
        Room.Que.play(2, function(id){
            Room.Que4.select(id);
        });
    });

    $("#Que4 .btn3").tap(function(e){
        cc.tap(e);
        Room.Que.play(3, function(id){
            Room.Que4.select(id);
        });
    });

    $("#Que4 .btn4").tap(function(e){
        cc.tap(e);
        Room.Que.play(4, function(id){
            Room.Que4.select(id);
        });
    });

};
Room.Que4.select = function(id){
    Room.Que.play_cls(id);
    if(Dom.Ans.que4 == id){
        Room.Que.ans_success(id, function(){
            //Dom.QueRun = 0;
            setTimeout(function(){
                Room.Que4.ans(1);
            },500);

        });
    }else{
        Room.Que.ans_error(id, function(){
            //Dom.QueRun = 0;
            setTimeout(function(){
                Room.Que4.ans(0);
            },500);
        });
    }
};


Room.Que4.ans = function(ans){
    Dom.QueAnsList["t4"] = ans;
    console.log(Dom.QueAnsList);
    Room.Que4.ppt();
};

Room.Que4.come_before = function(next){
    Dom.QueMyAns = 0;
    Dom.QueRun = 0;
    Dom.QueMyW = 0;

    Dom.Que4.b1.velocity({ scale: 0.5, left:40, top:170}, { duration: 0});
    Dom.Que4.b2.velocity({ scale: 0.5, left:260, top:170}, { duration: 0});
    Dom.Que4.b3.velocity({ scale: 0.5, left:40, top:320}, { duration: 0});
    Dom.Que4.b4.velocity({ scale: 0.5, left:260, top:320}, { duration: 0});

    next();
};

