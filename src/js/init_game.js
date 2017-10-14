function cav_game_load(){

    Loads.loads("game_bg",  "img/game/", "bg.png");
    Loads.loads("ball",  "img/game/ball/", "ball.png");

    Loads.loads("game_c1",  "img/game/", "c1.png");
    Loads.loads("game_c2",  "img/game/", "c2.png");
    Loads.loads("game_c3",  "img/game/", "c3.png");

    Loads.loads("game_heard",  "img/game/", "heard.png");

    Loads.loads("game_arrow1",  "img/game/", "arrow1.png");
    Loads.loads("game_arrow2",  "img/game/", "arrow2.png");
    Loads.loads("game_arrow3",  "img/game/", "arrow3.png");

    Loads.loads("game_3",  "img/game/", "3.png");
    Loads.loads("game_2",  "img/game/", "2.png");
    Loads.loads("game_1",  "img/game/", "1.png");

    Loads.loads("game_line1",  "img/game/", "line1.png");
    Loads.loads("game_line2",  "img/game/", "line2.png");

    Loads.loads("game_box1",  "img/game/", "box1.png");
    Loads.loads("game_box2",  "img/game/", "box2.png");
    Loads.loads("game_box3",  "img/game/", "box3.png");
    Loads.loads("game_box4",  "img/game/", "box4.png");

}

function cav_game(){

    $("#Game .box1").html(Loads.get("game_box1"));
    $("#Game .box2").html(Loads.get("game_box2"));
    $("#Game .box3").html(Loads.get("game_box3"));
    $("#Game .box4").html(Loads.get("game_box4"));

    gamecav.ccv("game");
    gamecav.drawImg("game_bg");
    // gamecav.drawImg("ball", "", {x:127, y:67});
    gamecav.drawSprite("ball", "", {
        framerate: 4,
        mov: {
            ini: [0],
            run:[0,5,"run"]
        },
        conf: {x:127, y:67}
    });

    var alpha = 0.01;

    var collide = cav_game_collide();
    gamecav.drawShape("collide","", collide, {alpha:alpha});

    var die1 = cav_game_collide_die(150,147,33);
    gamecav.drawShape("die1","", die1, {alpha:alpha});

    var die2 = cav_game_collide_die(599,860,60);
    gamecav.drawShape("die2","", die2, {alpha:alpha});

    var die3 = cav_game_collide_die(118,767,57);
    gamecav.drawShape("die3","", die3, {alpha:alpha});

    var ok = cav_game_collide_die(577,1025,13);
    gamecav.drawShape("ok","", ok, {alpha:alpha});

    gamecav.drawArea("game_path1","",[501,128, 116,120],"#0000ff", {alpha:alpha});
    gamecav.drawArea("game_path2","",[283,288, 137,76],"#0000ff", {alpha:alpha});
    gamecav.drawArea("game_path3","",[57,389, 75,132],"#0000ff", {alpha:alpha});
    gamecav.drawArea("game_path4","",[580,557, 78,150],"#0000ff", {alpha:alpha});
    gamecav.drawArea("game_path5","",[57,921, 75,132],"#0000ff", {alpha:alpha});

    gamecav.drawImg("game_c1", "", {x:124+25, y:122+25, regX:25, regY:25});
    gamecav.drawImg("game_c2", "", {x:76+41, y:728+41, regX:41, regY:41});
    gamecav.drawImg("game_c3", "", {x:549+50, y:812+50, regX:50, regY:50});

    gamecav.drawImg("game_heard", "", {x:544, y:997});

    gamecav.drawImg("game_a1_1", "", {x:511, y:131, alpha:0}, Loads.loaded["game_arrow1"]);
    gamecav.drawImg("game_a1_2", "", {x:534, y:162, alpha:0}, Loads.loaded["game_arrow1"]);
    gamecav.drawImg("game_a1_3", "", {x:558, y:193, alpha:0}, Loads.loaded["game_arrow1"]);

    gamecav.drawImg("game_a2_1", "", {x:360, y:299, alpha:0}, Loads.loaded["game_arrow2"]);
    gamecav.drawImg("game_a2_2", "", {x:321, y:299, alpha:0}, Loads.loaded["game_arrow2"]);
    gamecav.drawImg("game_a2_3", "", {x:283, y:299, alpha:0}, Loads.loaded["game_arrow2"]);

    gamecav.drawImg("game_a3_1", "", {x:66, y:403, alpha:0}, Loads.loaded["game_arrow3"]);
    gamecav.drawImg("game_a3_2", "", {x:66, y:442, alpha:0}, Loads.loaded["game_arrow3"]);
    gamecav.drawImg("game_a3_3", "", {x:66, y:481, alpha:0}, Loads.loaded["game_arrow3"]);

    gamecav.drawImg("game_a4_1", "", {x:590, y:579, alpha:0}, Loads.loaded["game_arrow3"]);
    gamecav.drawImg("game_a4_2", "", {x:590, y:618, alpha:0}, Loads.loaded["game_arrow3"]);
    gamecav.drawImg("game_a4_3", "", {x:590, y:657, alpha:0}, Loads.loaded["game_arrow3"]);

    gamecav.drawImg("game_a5_1", "", {x:66, y:932, alpha:0}, Loads.loaded["game_arrow3"]);
    gamecav.drawImg("game_a5_2", "", {x:66, y:971, alpha:0}, Loads.loaded["game_arrow3"]);
    gamecav.drawImg("game_a5_3", "", {x:66, y:1010, alpha:0}, Loads.loaded["game_arrow3"]);


    gamecav.drawImg("game_bgx", "", "", Loads.loaded["gameDoor_bg"]);

    gamecav.drawImg("game_1", "", {x:228+(199/2), y:324+(442/2), alpha:0, regX:199/2, regY:442/2, scaleX:1.1, scaleY:1.1}, Loads.loaded["game_1"]);
    gamecav.drawImg("game_2", "", {x:187+(329/2), y:316+(451/2), alpha:0, regX:329/2, regY:451/2, scaleX:1.1, scaleY:1.1}, Loads.loaded["game_2"]);
    gamecav.drawImg("game_3", "", {x:170+(344/2), y:324+(448/2), alpha:1, regX:344/2, regY:448/2}, Loads.loaded["game_3"]);

    gamecav.drawImg("game_line1","",{x:0, y:99});
    gamecav.drawImg("game_line2","",{x:659, y:99});

    var drawArr = [
        gamecav.img["game_bg"],
        gamecav.dom["collide"],

        gamecav.dom["die1"],
        gamecav.dom["die2"],
        gamecav.dom["die3"],

        gamecav.img["game_c1"],
        gamecav.img["game_c2"],
        gamecav.img["game_c3"],

        gamecav.img["game_heard"],

        gamecav.img["game_a1_1"],
        gamecav.img["game_a1_2"],
        gamecav.img["game_a1_3"],

        gamecav.img["game_a2_1"],
        gamecav.img["game_a2_2"],
        gamecav.img["game_a2_3"],

        gamecav.img["game_a3_1"],
        gamecav.img["game_a3_2"],
        gamecav.img["game_a3_3"],

        gamecav.img["game_a4_1"],
        gamecav.img["game_a4_2"],
        gamecav.img["game_a4_3"],

        gamecav.img["game_a5_1"],
        gamecav.img["game_a5_2"],
        gamecav.img["game_a5_3"],

        gamecav.dom["game_path1"],
        gamecav.dom["game_path2"],
        gamecav.dom["game_path3"],
        gamecav.dom["game_path4"],
        gamecav.dom["game_path5"],

        gamecav.dom["ok"],

        gamecav.img["game_bgx"],
        gamecav.img["game_3"],
        gamecav.img["game_2"],
        gamecav.img["game_1"],

        gamecav.img["game_line1"],
        gamecav.img["game_line2"],

        gamecav.sprite["ball"]
    ];
    gamecav.draw("game", drawArr);

    gamecav.show("game");

}

function cav_game_collide(){

    var collide = new createjs.Graphics();

    collide.beginFill(createjs.Graphics.getRGB(255,0,0));

    ///////上层
    collide.drawCircle(150,147,92);
    collide.endFill();

    collide.beginStroke("red");
    collide.setStrokeStyle(40);

    collide.moveTo(210,227);
    collide.lineTo(329,82);

    collide.moveTo(305,82);
    collide.lineTo(413,211);

    collide.moveTo(389,210);
    collide.lineTo(498,81);

    collide.moveTo(473,82);
    collide.lineTo(634,273);

    collide.setStrokeStyle(60);

    collide.moveTo(617,252);
    collide.lineTo(617,351);

    //修补
    collide.setStrokeStyle(35);

    collide.moveTo(150,223);
    collide.lineTo(225,223);

    collide.setStrokeStyle(26);

    collide.moveTo(225,129);
    collide.lineTo(250,148);

    collide.setStrokeStyle(34);
    collide.moveTo(225,147);
    collide.lineTo(272,147);

    collide.moveTo(285,128);
    collide.lineTo(352,128);

    collide.moveTo(380,167);
    collide.lineTo(420,167);

    collide.moveTo(455,128);
    collide.lineTo(510,128);

    ///////中层
    collide.setStrokeStyle(50);

    collide.moveTo(587,326);
    collide.lineTo(65,326);

    collide.setStrokeStyle(22);
    collide.moveTo(604,286);//
    collide.lineTo(579,312);

    collide.setStrokeStyle(32);
    collide.moveTo(134,333);//
    collide.lineTo(105,362);

    collide.setStrokeStyle(58);
    collide.moveTo(94,326);
    collide.lineTo(94,581);

    collide.setStrokeStyle(48);
    collide.arc(160, 575, 70, 0, (Math.PI/360)*180*2);

    collide.setStrokeStyle(27);
    collide.arc(160, 520, 50, 0, (Math.PI/360)*180*2);

    collide.setStrokeStyle(48);
    collide.arc(160, 535, 70, 0, (Math.PI/360)*180*2);

    collide.setStrokeStyle(58);
    collide.moveTo(227,490);
    collide.lineTo(227,581);

    collide.setStrokeStyle(27);
    collide.arc(290, 542, 50, 0, (Math.PI/360)*180*2, true);

    collide.setStrokeStyle(48);
    collide.arc(290, 498, 70, 0, (Math.PI/360)*180*2, true);

    collide.setStrokeStyle(48);
    collide.arc(290, 538, 70, 0, (Math.PI/360)*180*2, true);

    collide.setStrokeStyle(58);
    collide.moveTo(355,490);
    collide.lineTo(355,581);

    collide.setStrokeStyle(48);
    collide.arc(419, 575, 70, 0, (Math.PI/360)*180*2);

    collide.setStrokeStyle(27);
    collide.arc(419, 507, 50, 0, (Math.PI/360)*180*2);
    collide.setStrokeStyle(27);
    collide.arc(419, 517, 50, 0, (Math.PI/360)*180*2);

    collide.setStrokeStyle(48);
    collide.arc(419, 535, 70, 0, (Math.PI/360)*180*2);

    collide.setStrokeStyle(58);
    collide.moveTo(484,490);
    collide.lineTo(484,581);

    collide.setStrokeStyle(27);
    collide.arc(549, 542, 50, 0, (Math.PI/360)*180*2, true);

    collide.setStrokeStyle(48);
    collide.arc(549, 498, 70, 0, (Math.PI/360)*180*2, true);

    collide.setStrokeStyle(48);
    collide.arc(549, 538, 70, 0, (Math.PI/360)*180*2, true);

    collide.setStrokeStyle(58);
    collide.moveTo(615,490);
    collide.lineTo(615,751);

    ///////下层

    collide.setStrokeStyle(1);
    collide.beginFill(createjs.Graphics.getRGB(255,0,0));
    collide.drawRect(64,729,168,188);
    collide.drawRect(233,729,236,75);
    collide.drawRect(308,805,161,30);
    collide.drawRect(469,729,176,185);

    collide.setStrokeStyle(22);
    collide.moveTo(599,715);//
    collide.lineTo(572,742);

    collide.setStrokeStyle(40);
    collide.moveTo(430,817);
    collide.lineTo(483,867);

    collide.setStrokeStyle(36);
    collide.moveTo(287,788);
    collide.lineTo(323,824);

    collide.setStrokeStyle(32);
    collide.moveTo(246,790);
    collide.lineTo(211,825);

    collide.setStrokeStyle(50);
    collide.moveTo(214,869);
    collide.lineTo(250,902);

    collide.setStrokeStyle(58);
    collide.moveTo(94,890);
    collide.lineTo(94,1043);

    collide.setStrokeStyle(22);
    collide.moveTo(134,902);//
    collide.lineTo(111,926);

    ///////下层(end)
    collide.setStrokeStyle(1);
    collide.drawRect(64,1023,188,60);
    collide.drawRect(194,974,229,60);
    collide.drawRect(362,1020,215,65);

    collide.setStrokeStyle(22);
    collide.moveTo(113,1010);//
    collide.lineTo(135,1032);

    collide.setStrokeStyle(25);
    collide.moveTo(182,1038);//
    collide.lineTo(207,1013);

    collide.setStrokeStyle(32);
    collide.moveTo(234,1044);//
    collide.lineTo(260,1019);

    collide.setStrokeStyle(22);
    collide.moveTo(348,1022);//
    collide.lineTo(376,1050);

    collide.setStrokeStyle(28);
    collide.moveTo(408,1009);//
    collide.lineTo(432,1032);

    collide.setStrokeStyle(1);
    collide.drawCircle(536,1004,33);
    collide.drawCircle(618,1004,33);

    collide.setStrokeStyle(37);
    collide.moveTo(564,1065);
    collide.lineTo(626,1016);

    collide.moveTo(551,1020);
    collide.lineTo(604,1020);

    collide.setStrokeStyle(28);
    collide.moveTo(501,1032);//
    collide.lineTo(522,1011);


    return collide;
}

function cav_game_collide_die(x,y,r){

    var die = new createjs.Graphics();

    die.beginFill(createjs.Graphics.getRGB(0,255,0));
    die.drawCircle(x,y,r);

    return die;
}