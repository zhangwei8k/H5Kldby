function cav_end_load(){

    endCav = new CanvasCreate($("#endCav"));

    Loads.loads("end_bg",  "img/end/", "bg.png");
    // Loads.loads("end_line",  "img/end/", "line.png");

    Loads.loads("end_w1",  "img/end/", "w1.png");
    Loads.loads("end_w2",  "img/end/", "w2.png");
    Loads.loads("end_w3",  "img/end/", "w3.png");
    Loads.loads("end_w4",  "img/end/", "w4.png");
    Loads.loads("end_w5",  "img/end/", "w5.png");
    Loads.loads("end_w0",  "img/end/", "w0.png");

    // Loads.loads("end_s1",  "img/end/", "s1.png");
    // Loads.loads("end_s2",  "img/end/", "s2.png");
    // Loads.loads("end_s3",  "img/end/", "s3.png");
    // Loads.loads("end_s4",  "img/end/", "s4.png");
    // Loads.loads("end_s5",  "img/end/", "s5.png");

    Loads.loads("end_s",  "img/end/", "game.png");

    Loads.loads("code",  "img/", "code.png");

}

function cav_end(){

    endCav.ccv("ends");
    endCav.drawImg("end_bg");

    endCav.drawArea("end_b1","",[350,576,18,18],"#fe4c6f",{alpha:0});
    endCav.drawArea("end_b2","",[374,576,18,18],"#fe4c6f",{alpha:0});
    endCav.drawArea("end_b3","",[398,576,18,18],"#fe4c6f",{alpha:0});
    endCav.drawArea("end_b4","",[422,576,18,18],"#fe4c6f",{alpha:0});
    endCav.drawArea("end_b5","",[446,576,18,18],"#fe4c6f",{alpha:0});

    // var m1 = new createjs.Graphics().beginFill("#000000").drawRect(0,0,165,29);
    // endCav.drawMark("end_line1",m1,{x:285, y:564});
    // endCav.drawImgMark("end_line1","",{x:285, y:564}, Loads.loaded["end_line"]);

    // var m2 = new createjs.Graphics().beginFill("#000000").drawRect(0,0,165,29);
    // endCav.drawMark("end_line2",m2,{x:285, y:608});
    // endCav.drawImgMark("end_line2","",{x:285, y:608}, Loads.loaded["end_line"]);

    endCav.drawImg("end_w0","",{x:220, y:526, alpha:0});
    endCav.drawImg("end_w1","",{x:220, y:526, alpha:0});
    endCav.drawImg("end_w2","",{x:220, y:526, alpha:0});
    endCav.drawImg("end_w3","",{x:220, y:526, alpha:0});
    endCav.drawImg("end_w4","",{x:220, y:526, alpha:0});
    endCav.drawImg("end_w5","",{x:220, y:526, alpha:0});

    // endCav.drawImg("end_s1","",{x:312, y:674, alpha:0});
    // endCav.drawImg("end_s2","",{x:325, y:674, alpha:0});
    // endCav.drawImg("end_s3","",{x:307, y:674, alpha:0});
    // endCav.drawImg("end_s4","",{x:323, y:674, alpha:0});
    // endCav.drawImg("end_s5","",{x:294, y:674, alpha:0});

    endCav.drawImg("end_s","",{x:252, y:609, alpha:0});

    // endCav.drawFont("end_font1","","0", "20px Arial", "#fe4c6f",{x:462, y:570});
    // endCav.drawFont("end_font2","","0", "20px Arial", "#fe4c6f",{x:462, y:613});

    endCav.drawFont("end_font1","","20", "bold 58px LiquidCrystal", "#fe4c6f",{x:285, y:654});
    endCav.drawFont("end_fontX","",":", "bold 63px LiquidCrystal", "#fe4c6f",{x:352, y:639});
    endCav.drawFont("end_font2","","20", "bold 58px LiquidCrystal", "#fe4c6f",{x:372, y:654});


    endCav.drawFont("end_font3","","no", "bold 28px Microsoft YaHei", "#fe4c6f",{x:212, y:714});

    endCav.drawImg("code", "", {x:270, y:859});

    var drawArr = [
        endCav.img["end_bg"],

        // endCav.img["end_line1"],
        // endCav.img["end_line2"],

        endCav.dom["end_b1"],
        endCav.dom["end_b2"],
        endCav.dom["end_b3"],
        endCav.dom["end_b4"],
        endCav.dom["end_b5"],

        endCav.img["end_w0"],
        endCav.img["end_w1"],
        endCav.img["end_w2"],
        endCav.img["end_w3"],
        endCav.img["end_w4"],
        endCav.img["end_w5"],

        endCav.img["end_s"],

        // endCav.img["end_s1"],
        // endCav.img["end_s2"],
        // endCav.img["end_s3"],
        // endCav.img["end_s4"],
        // endCav.img["end_s5"],

        endCav.dom["end_font1"],
        endCav.dom["end_font2"],
        endCav.dom["end_fontX"],
        endCav.dom["end_font3"],

        endCav.img["code"]

    ];
    endCav.draw("ends", drawArr);

    endCav.show("ends");

}