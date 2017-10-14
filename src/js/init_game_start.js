function cav_game_start_load(){

    gameStartCav = new CanvasCreate($("#gameStartCav"));

    Loads.loads("gameStart_bg",  "img/gamestart/", "bg.png");
    Loads.loads("gameStart_mark1",  "img/gamestart/", "line1.png");
    Loads.loads("gameStart_mark2",  "img/gamestart/", "line2.png");

    Loads.loads("gameStart_w1",  "img/gamestart/", "w1.png");
    Loads.loads("gameStart_w2",  "img/gamestart/", "w2.png");
    Loads.loads("gameStart_w3",  "img/gamestart/", "w3.png");

    Loads.loads("gameStart_box",  "img/gamestart/", "box.png");
}

function cav_game_start(){

    gameStartCav.ccv("gameStart");
    gameStartCav.drawImg("gameStart_bg","",{x:66, y:290});

    var gra1 = new createjs.Graphics().beginFill("#000000").drawRect(0,0,517,211);
    gameStartCav.drawMark("gameStart_mark1",gra1,{x:48-517, y:574});
    gameStartCav.drawImgMark("gameStart_mark1","",{x:48, y:574});

    var gra2 = new createjs.Graphics().beginFill("#000000").drawRect(0,0,517,211);
    gameStartCav.drawMark("gameStart_mark2",gra2,{x:135+517, y:355});
    gameStartCav.drawImgMark("gameStart_mark2","",{x:135, y:355});

    // gameStartCav.drawImg("gameStart_line1","",{x:48, y:574});
    // gameStartCav.drawImg("gameStart_line2","",{x:135, y:355});

    gameStartCav.drawImg("gameStart_w1","",{x:207, y:443, alpha:0});
    gameStartCav.drawImg("gameStart_w2","",{x:199, y:531, alpha:0});
    gameStartCav.drawImg("gameStart_w3","",{x:219, y:666, alpha:0});

    gameStartCav.drawImg("gameStart_box","",{x:28, y:327, alpha:0});

    var drawArr = [
        gameStartCav.img["gameStart_bg"],

        gameStartCav.img["gameStart_mark1"],
        gameStartCav.img["gameStart_mark2"],

        gameStartCav.img["gameStart_w1"],
        gameStartCav.img["gameStart_w2"],
        gameStartCav.img["gameStart_w3"],

        gameStartCav.img["gameStart_box"]

    ];
    gameStartCav.draw("gameStart", drawArr);

    gameStartCav.show("gameStart");

}
