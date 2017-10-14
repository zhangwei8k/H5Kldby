Room.GameStart = {};
Room.GameStart.dom = function(){

};
Room.GameStart.ppt = function(){

    cc.ppt(["GameStart", "GameDoor"] , function(after , callback){
        cc.m["GameStart"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["GameDoor"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
        after.come();
    })

};
Room.GameStart.come_after = function(){

    cvtw.get(gameStartCav.mark["gameStart_mark1"]).wait(2300).to({x:48 }, 1000);
    cvtw.get(gameStartCav.mark["gameStart_mark2"]).wait(2300).to({x:135 }, 1000);

    cvtw.get(gameStartCav.img["gameStart_w1"]).wait(3300).to({alpha:1 }, 700);
    cvtw.get(gameStartCav.img["gameStart_w2"]).wait(3300).to({alpha:1 }, 500);
    cvtw.get(gameStartCav.img["gameStart_w3"]).wait(3300).to({alpha:1 }, 700).call(function(){

        cvtw.get(gameStartCav.img["gameStart_box"]).to({alpha:0.5 }, 500).call(function(){
            mp3_play("gamestart");
            cvtw.get(gameStartCav.img["gameStart_box"], {loop:true}).to({alpha:1 }, 700, createjs.Ease.bounceInOut).to({alpha:0.3 }, 700, createjs.Ease.bounceInOut);

            setTimeout(Room.GameStart.ppt, 3000);
        });

    });


};