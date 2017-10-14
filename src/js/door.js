Room.Door = {};
Room.Door.begin = function(fn){
    cc.m["Door"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 500});
    Room.Door.run(fn);
};
Room.Door.run = function(fn){
    var step = 55;
    var i = 1;
    setTimeout(function(){
        mp3_play("door_open");
    },300);
    door.img["door_bg"].alpha = 1;

    cvtw.get(door.img["door_r1"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_r2"]).wait(step*i++).to({alpha:1 }, step);

    cvtw.get(door.img["door_line1"]).wait(step*i).to({alpha:1 }, step);
    cvtw.get(door.img["door_line9"]).wait(step*i).to({alpha:1 }, step);
    cvtw.get(door.mark["door_mark2"]).wait(step*i).to({x:26+100 }, step*8).to({y:857, x:26+80 }, step*8).to({x:26 }, step*8);

    cvtw.get(door.img["door_r3"]).wait(step*i++).to({alpha:1 }, step);

    cvtw.get(door.img["door_line2"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line10"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line3"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line11"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line4"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line12"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line5"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line13"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line6"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line14"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line7"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line15"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line8"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_line16"]).wait(step*i++).to({alpha:1 }, step);

    cvtw.get(door.img["door_dot1"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_dot5"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_dot2"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_dot6"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_dot3"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_dot7"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_dot4"]).wait(step*i++).to({alpha:1 }, step);
    cvtw.get(door.img["door_dot8"]).wait(step*i++).to({alpha:1 }, step);

    cvtw.get(door.mark["door_m1_1"]).wait(step*i).to({x:126 }, step*8);
    cvtw.get(door.mark["door_m1_2"]).wait(step*i).to({x:126 }, step*8);
    cvtw.get(door.mark["door_m1_3"]).wait(step*i).to({x:430 }, step*8);
    cvtw.get(door.mark["door_m1_4"]).wait(step*i).to({x:430 }, step*8);

    cvtw.get(door.mark["door_mark1"]).wait(step*i).to({x:411-31 }, step*8).to({y:82, x:411}, step*4);

    cvtw.get(door.img["door_lit1"]).wait(step*(i+8)).to({alpha:1 }, 100);
    cvtw.get(door.img["door_lit2"]).wait(step*(i+8)).to({alpha:1 }, 100);
    cvtw.get(door.img["door_lit3"]).wait(step*(i+8)).to({alpha:1 }, 100);
    cvtw.get(door.img["door_lit4"]).wait(step*(i+8)).to({alpha:1 }, 100).call(function(){

        setTimeout(Room.Door.run_cls_lock, 100);
        door.img["door_lock2"].alpha = 1;
        mp3_stop("door_open");
        mp3_play("start");
        cvtw.get(door.img["door_lock2"]).to({rotation:-90 }, 500).call(function(){
            door.img["door_bg1"].x = 0;
            door.img["door_bg2"].x = 350;

            cvtw.get(door.img["door_bg1"]).to({alpha:1 }, 100);
            cvtw.get(door.img["door_bg2"]).to({alpha:1 }, 100).call(function(){
                Room.Door.run_cls();

                cvtw.get(door.img["door_bg1"]).to({x:-350 }, 800);
                cvtw.get(door.img["door_bg2"]).to({x:700 }, 800).call(function(){
                    if(fn) fn();
                    cc.m["Door"].hide();
                });

            });

        })

    });

};
Room.Door.run_cls_lock = function(){
    door.img["door_lit1"].alpha = 0;
    door.img["door_lit2"].alpha = 0;
    door.img["door_lit3"].alpha = 0;
    door.img["door_lit4"].alpha = 0;
    door.img["door_lock1"].alpha = 0;
};
Room.Door.run_cls = function(){

    door.img["door_lock2"].rotation = 0;
    door.img["door_lock2"].alpha = 0;

    door.img["door_bg"].alpha = 0;

    door.img["door_r1"].alpha = 0;
    door.img["door_r2"].alpha = 0;
    door.img["door_r3"].alpha = 0;

    for(var i=1; i<=16; i++){
        door.img["door_line"+i].alpha = 0;
    }
    for(var i=1; i<=8; i++){
        door.img["door_dot"+i].alpha = 0;
    }

    door.mark["door_mark1"].x = 411+263;
    door.mark["door_mark1"].y = 82+101;

    door.mark["door_mark2"].x = 26+169;
    door.mark["door_mark2"].y = 857+175-25;

    door.mark["door_m1_1"].x = 126-147;
    door.mark["door_m1_1"].y = 522;
    door.mark["door_m1_2"].x = 126-147;
    door.mark["door_m1_2"].y = 563;

    door.mark["door_m1_3"].x = 430+147;
    door.mark["door_m1_3"].y = 522;
    door.mark["door_m1_4"].x = 430+147;
    door.mark["door_m1_4"].y = 563;

};

//////////////////////////////////////////////////

Room.Door.close = function(){
    Room.Door.close_ini();
    cc.m["Door"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 500});
    Room.Door.close_mov();
};
Room.Door.close_ini = function(){
    door.img["door_bg"].alpha = 0;
    door.img["door_lock1"].alpha = 0;
    door.img["door_lock2"].alpha = 0;

    door.img["door_bg1"].x = -350;
    door.img["door_bg1"].alpha = 1;
    door.img["door_bg2"].x = 700;
    door.img["door_bg2"].alpha = 1;
};

Room.Door.close_mov = function(){
    mp3_play("door_cls");
    mp3_stop("que_bg");
    cvtw.get(door.img["door_bg1"]).to({x:0 }, 800);
    cvtw.get(door.img["door_bg2"]).to({x:350 }, 800).call(function(){
        Room.Door.close_mov_lock();
    });
};
Room.Door.close_mov_lock = function(){
    door.img["door_bg"].alpha = 1;
    door.img["door_lock2"].alpha = 1;
    door.img["door_lock2"].rotation = -90;

    door.img["door_r1"].alpha = 1;
    door.img["door_r2"].alpha = 1;
    door.img["door_r3"].alpha = 1;

    for(var i =1; i<=16; i++){
        door.img["door_line"+i].alpha = 1;
    }

    for(var i =1; i<=8; i++){
        door.img["door_dot"+i].alpha = 1;
    }

    door.mark["door_mark1"].x = 411;
    door.mark["door_mark1"].y = 82;
    door.mark["door_mark2"].x = 26;
    door.mark["door_mark2"].y = 857;

    door.mark["door_m1_1"].x = 126;
    door.mark["door_m1_2"].x = 126;
    door.mark["door_m1_3"].x = 430;
    door.mark["door_m1_4"].x = 430;

    door.img["door_bg1"].alpha = 0;
    door.img["door_bg2"].alpha = 0;

    cvtw.get(door.img["door_lock2"]).to({rotation:0 }, 500).call(function(){
        Room.Door.close_mov_off();
    })

};

Room.Door.close_mov_off = function(){
    door.img["door_lit1"].alpha = 1;
    door.img["door_lit2"].alpha = 1;
    door.img["door_lit3"].alpha = 1;
    door.img["door_lit4"].alpha = 1;

    door.img["door_lock1"].alpha = 1;

    door.img["door_lock2"].alpha = 0;


    cvtw.get(door.img["door_lit1"]).to({alpha:0 }, 100);
    cvtw.get(door.img["door_lit2"]).to({alpha:0 }, 100);
    cvtw.get(door.img["door_lit3"]).to({alpha:0 }, 100);
    cvtw.get(door.img["door_lit4"]).to({alpha:0 }, 100);


    cvtw.get(door.mark["door_m1_1"]).wait(100).to({x:126-200 }, 500);
    cvtw.get(door.mark["door_m1_2"]).wait(100).to({x:126-200 }, 500);
    cvtw.get(door.mark["door_m1_3"]).wait(100).to({x:430+200 }, 500);
    cvtw.get(door.mark["door_m1_4"]).wait(100).to({x:430+200 }, 500);

    for(var i=1; i<=16; i++){
        cvtw.get(door.img["door_line"+i]).wait(400).to({alpha:0 }, 200);
    }

    for(var i=1; i<=8; i++){
        cvtw.get(door.img["door_dot"+i]).wait(500).to({alpha:0 }, 200);
    }

    cvtw.get(door.mark["door_mark1"]).wait(200).to({y:82+50, x:411+300}, 500);
    cvtw.get(door.mark["door_mark2"]).wait(200).to({y:857+100, x:26+200}, 300);

    cvtw.get(door.img["door_r1"]).wait(400).to({alpha:0 }, 300);
    cvtw.get(door.img["door_r2"]).wait(400).to({alpha:0 }, 300);
    cvtw.get(door.img["door_r3"]).wait(400).to({alpha:0 }, 300).call(function(){
        cc.m["Door"].velocity({ opacity: 0}, { duration: 800, display: "none" });
    });
};