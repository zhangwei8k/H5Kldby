Room.GameDoor = {};
Room.GameDoor.dom = function(){
    Dom.GameDoorOrientation = 1;

    gameDoorCav.img["gameDoor_btn"].on("click", function () {
        Dom.GameDoorOrientation = 0;
        window.removeEventListener("deviceorientation", GameDoorOrientation, true);
        mp3_play("gameclick");
        Room.GameDoor.next();
    });
};
Room.GameDoor.ppt = function(){

    cc.ppt(["GameDoor", "Game"] , function(after , callback){
        cc.m["GameDoor"].velocity({ opacity: 0}, { duration: 800, display: "none" });
        cc.m["Game"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 800});
        after.come();
        after.go();
    })

};
Room.GameDoor.come_before = function(next){

    console.log(1);
    gameDoorCav.cc["gameDoor1"].y = 0;
    gameDoorCav.cc["gameDoor2"].y = 0;

    next();

};
Room.GameDoor.come_after = function(){

    mp3_play("gamebg", 1);

    cvtw.get(gameDoorCav.img["gameDoor_circle"], {loop:true}).to({alpha:0 }, 300).to({alpha:0.7 }, 300);

    cvtw.get(gameDoorCav.img["gameDoor_face1"], {loop:true}).to({alpha:1 }, 300).wait(400).to({alpha:0 }, 300).wait(1000);
    cvtw.get(gameDoorCav.img["gameDoor_face2"], {loop:true}).wait(500).to({alpha:1 }, 300).wait(400).to({alpha:0 }, 300).wait(500);
    cvtw.get(gameDoorCav.img["gameDoor_face3"], {loop:true}).wait(1000).to({alpha:1 }, 300).wait(400).to({alpha:0 }, 300);

    Room.GameDoor.orientation();

};
Room.GameDoor.go_after = function(){

    cvtw.removeTweens(gameDoorCav.img["gameDoor_circle"]);
    cvtw.removeTweens(gameDoorCav.img["gameDoor_face1"]);
    cvtw.removeTweens(gameDoorCav.img["gameDoor_face2"]);
    cvtw.removeTweens(gameDoorCav.img["gameDoor_face3"]);
    gameDoorCav.img["gameDoor_face1"].alpha = 0;
    gameDoorCav.img["gameDoor_face2"].alpha = 0;
    gameDoorCav.img["gameDoor_face3"].alpha = 0;

};


Room.GameDoor.orientation = function(){
    window.addEventListener("deviceorientation", GameDoorOrientation, true);
};

Room.GameDoor.next = function(){

    cvtw.get(gameDoorCav.cc["gameDoor1"]).to({y:-416 }, 700);
    cvtw.get(gameDoorCav.cc["gameDoor2"]).to({y:294 }, 700);
    setTimeout(Room.GameDoor.ppt, 500);
};

function GameDoorOrientation(event) {

    if(!Dom.GameDoorOrientation) return;

    var x = event.gamma;  // In degree in the range [-180,180]
    var y = event.beta; // In degree in the range [-90,90]

    if(x<4 && x>-4 && y<4 && y>-4) {
        cvtw.get(gameDoorCav.img["gameDoor_btn"]).to({alpha:1 }, 500);
    }else{
        //cvtw.get(gameDoorCav.img["gameDoor_btn"]).to({alpha:0 }, 500);
    }

}