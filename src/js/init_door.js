function cav_door_load(){
    Loads.loads("door_bg",  "img/door/", "bg.png");

    Loads.loads("door_bg1",  "img/door/", "bg1.png");
    Loads.loads("door_bg2",  "img/door/", "bg2.png");

    Loads.loads("door_mark1",  "img/door/", "mark1.png");
    Loads.loads("door_mark2",  "img/door/", "mark2.png");

    Loads.loads("door_m",  "img/door/", "mark3.png");
    Loads.loads("door_dot",  "img/door/", "dot.png");
    Loads.loads("door_lit",  "img/door/", "lit.png");

    Loads.loads("door_lock1",  "img/door/", "lock1.png");
    Loads.loads("door_lock2",  "img/door/", "lock2.png");

    Loads.loads("door_l1",  "img/door/", "line1.png");
    Loads.loads("door_l2",  "img/door/", "line2.png");
    Loads.loads("door_l3",  "img/door/", "line3.png");
    Loads.loads("door_l4",  "img/door/", "line4.png");

    Loads.loads("door_r1",  "img/door/", "r1.png");
    Loads.loads("door_r2",  "img/door/", "r2.png");
    Loads.loads("door_r3",  "img/door/", "r3.png");

}

function cav_door(){

    door.ccv("door");
    door.drawImg("door_bg");
    door.drawImg("door_bg1","",{alpha:0});
    door.drawImg("door_bg2","",{alpha:0, x:350});

    door.drawImg("door_lock1","",{x:302, y:514});
    door.drawImg("door_lock2","",{x:302+49, y:514+49, alpha:0, regY:49, regX:49});

    var gra1 = new createjs.Graphics().beginFill("#000000").drawRect(0,0,300,127);
    door.drawMark("door_mark1",gra1,{x:411+263, y:82+101});
    door.drawImgMark("door_mark1","",{x:411, y:82});

    var gra2 = new createjs.Graphics().beginFill("#000000").drawRect(0,0,169,175);
    door.drawMark("door_mark2",gra2,{x:26+169, y:857+175-25});
    door.drawImgMark("door_mark2","",{x:26, y:857});

    var m = new createjs.Graphics().beginFill("#000000").drawRect(0,0,147,41);
    door.drawMark("door_m1_1",m,{x:126-147, y:522});
    door.drawImgMark("door_m1_1","",{x:126, y:522}, Loads.loaded["door_m"]);

    door.drawMark("door_m1_2",m,{x:126-147, y:563});
    door.drawImgMark("door_m1_2","",{x:126, y:563}, Loads.loaded["door_m"]);

    door.drawMark("door_m1_3",m,{x:430+147, y:522});
    door.drawImgMark("door_m1_3","",{x:430, y:522}, Loads.loaded["door_m"]);

    door.drawMark("door_m1_4",m,{x:430+147, y:563});
    door.drawImgMark("door_m1_4","",{x:430, y:563}, Loads.loaded["door_m"]);

    door.drawImg("door_lit1","",{x:310, y:546, alpha:0}, Loads.loaded["door_lit"]);
    door.drawImg("door_lit2","",{x:310, y:564, alpha:0}, Loads.loaded["door_lit"]);
    door.drawImg("door_lit3","",{x:382, y:546, alpha:0}, Loads.loaded["door_lit"]);
    door.drawImg("door_lit4","",{x:382, y:564, alpha:0}, Loads.loaded["door_lit"]);

    door.drawImg("door_dot1","",{x:132, y:292, alpha:0}, Loads.loaded["door_dot"]);
    door.drawImg("door_dot2","",{x:77, y:346, alpha:0}, Loads.loaded["door_dot"]);
    door.drawImg("door_dot3","",{x:77, y:751, alpha:0}, Loads.loaded["door_dot"]);
    door.drawImg("door_dot4","",{x:132, y:805, alpha:0}, Loads.loaded["door_dot"]);
    door.drawImg("door_dot5","",{x:528, y:805, alpha:0}, Loads.loaded["door_dot"]);
    door.drawImg("door_dot6","",{x:582, y:751, alpha:0}, Loads.loaded["door_dot"]);
    door.drawImg("door_dot7","",{x:582, y:346, alpha:0}, Loads.loaded["door_dot"]);
    door.drawImg("door_dot8","",{x:528, y:292, alpha:0}, Loads.loaded["door_dot"]);

    door.drawImg("door_line1","",{x:307, y:256, alpha:0}, Loads.loaded["door_l1"]);
    door.drawImg("door_line2","",{x:280, y:260, alpha:0}, Loads.loaded["door_l1"]);
    door.drawImg("door_line3","",{x:64, y:427, alpha:0}, Loads.loaded["door_l3"]);
    door.drawImg("door_line4","",{x:56, y:452, alpha:0}, Loads.loaded["door_l3"]);
    door.drawImg("door_line5","",{x:57, y:643, alpha:0}, Loads.loaded["door_l4"]);
    door.drawImg("door_line6","",{x:65, y:668, alpha:0}, Loads.loaded["door_l4"]);
    door.drawImg("door_line7","",{x:280, y:805, alpha:0}, Loads.loaded["door_l2"]);
    door.drawImg("door_line8","",{x:305, y:809, alpha:0}, Loads.loaded["door_l2"]);

    door.drawImg("door_line9","",{x:360, y:809, alpha:0}, Loads.loaded["door_l1"]);
    door.drawImg("door_line10","",{x:388, y:805, alpha:0}, Loads.loaded["door_l1"]);
    door.drawImg("door_line11","",{x:566, y:669, alpha:0}, Loads.loaded["door_l3"]);
    door.drawImg("door_line12","",{x:574, y:643, alpha:0}, Loads.loaded["door_l3"]);
    door.drawImg("door_line13","",{x:575, y:452, alpha:0}, Loads.loaded["door_l4"]);
    door.drawImg("door_line14","",{x:567, y:427, alpha:0}, Loads.loaded["door_l4"]);
    door.drawImg("door_line15","",{x:386, y:260, alpha:0}, Loads.loaded["door_l2"]);
    door.drawImg("door_line16","",{x:360, y:256, alpha:0}, Loads.loaded["door_l2"]);

    door.drawImg("door_r1","",{x:167, y:898, alpha:0});
    door.drawImg("door_r2","",{x:161, y:914, alpha:0});
    door.drawImg("door_r3","",{x:180, y:1039, alpha:0});

    var drawArr = [
        door.img["door_bg"],

        door.img["door_mark1"],
        door.img["door_mark2"],

        door.img["door_lock1"],

        door.img["door_m1_1"],
        door.img["door_m1_2"],
        door.img["door_m1_3"],
        door.img["door_m1_4"],

        door.img["door_lit1"],
        door.img["door_lit2"],
        door.img["door_lit3"],
        door.img["door_lit4"],

        door.img["door_dot1"],
        door.img["door_dot2"],
        door.img["door_dot3"],
        door.img["door_dot4"],
        door.img["door_dot5"],
        door.img["door_dot6"],
        door.img["door_dot7"],
        door.img["door_dot8"],

        door.img["door_r1"],
        door.img["door_r2"],
        door.img["door_r3"]

    ];

    for(var i=1; i<=16; i++){
        drawArr.push(door.img["door_line"+i]);
    }
    drawArr.push(door.img["door_lock2"]);
    drawArr.push(door.img["door_bg1"]);
    drawArr.push(door.img["door_bg2"]);

    door.draw("door", drawArr);

    door.show("door");

}