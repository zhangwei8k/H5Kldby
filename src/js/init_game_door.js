function cav_game_door_load(){

    gameDoorCav = new CanvasCreate($("#gameDoorCav"));

    Loads.loads("gameDoor_bg",  "img/gamedoor/", "bg.png");
    Loads.loads("gameDoor_door1",  "img/gamedoor/", "door1.png");
    Loads.loads("gameDoor_door2",  "img/gamedoor/", "door2.png");

    Loads.loads("gameDoor_ball",  "img/gamedoor/", "ball.png");
    Loads.loads("gameDoor_circle",  "img/gamedoor/", "circle.png");

    Loads.loads("gameDoor_w1",  "img/gamedoor/", "w1.png");
    Loads.loads("gameDoor_w2",  "img/gamedoor/", "w2.png");

    Loads.loads("gameDoor_face1",  "img/gamedoor/", "face1.png");
    Loads.loads("gameDoor_face2",  "img/gamedoor/", "face2.png");
    Loads.loads("gameDoor_face3",  "img/gamedoor/", "face3.png");

    Loads.loads("gameDoor_btn",  "img/gamedoor/", "btn.png");

}

function cav_game_door(){

    var drawArr = [];

    $("#GameDoor .bgs").html(Loads.get("gameDoor_bg"));

    // gameDoorCav.drawImg("gameDoor_bg");
    gameDoorCav.drawImg("gameDoor_door1");
    gameDoorCav.drawImg("gameDoor_door2","",{x:0, y:846});

    gameDoorCav.drawImg("gameDoor_ball","",{x:127, y:67});
    gameDoorCav.drawImg("gameDoor_circle","",{x:92, y:32});

    gameDoorCav.drawImg("gameDoor_w1","",{x:181, y:98});
    gameDoorCav.drawImg("gameDoor_w2","",{x:87, y:201});

    gameDoorCav.drawImg("gameDoor_face1","",{x:210, y:263, alpha:0});
    gameDoorCav.drawImg("gameDoor_face2","",{x:310, y:263, alpha:0});
    gameDoorCav.drawImg("gameDoor_face3","",{x:409, y:263, alpha:0});

    gameDoorCav.drawImg("gameDoor_btn","",{x:238, y:1000, alpha:0});


    // gameDoorCav.ccv("gameDoor");
    // drawArr = [
    //     gameDoorCav.img["gameDoor_bg"]
    // ];
    // gameDoorCav.draw("gameDoor", drawArr);
    // gameDoorCav.show("gameDoor");


    gameDoorCav.ccv("gameDoor1");
    drawArr = [

        gameDoorCav.img["gameDoor_door1"],

        gameDoorCav.img["gameDoor_ball"],
        gameDoorCav.img["gameDoor_circle"],

        gameDoorCav.img["gameDoor_w1"],
        gameDoorCav.img["gameDoor_w2"],

        gameDoorCav.img["gameDoor_face1"],
        gameDoorCav.img["gameDoor_face2"],
        gameDoorCav.img["gameDoor_face3"]

    ];
    gameDoorCav.draw("gameDoor1", drawArr);
    gameDoorCav.show("gameDoor1");

    gameDoorCav.ccv("gameDoor2");
    drawArr = [
        gameDoorCav.img["gameDoor_door2"],
        gameDoorCav.img["gameDoor_btn"]

    ];
    gameDoorCav.draw("gameDoor2", drawArr);
    gameDoorCav.show("gameDoor2");

}
