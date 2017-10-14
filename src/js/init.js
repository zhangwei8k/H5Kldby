var cav,
    cav_ticker = {},
    door,
    loadcav,
    cavV1, cavV2,
    gamecav,
    gameStartCav,
    gameDoorCav,
    endCav;

function loader(){
    libs.create();
    libs.setTicker(25);
    loader_run();
}
function loader_run(){

    Dom.QueAnsList = {};

    Dom.Ans = {};
    Dom.Ans.que1 = 2;
    Dom.Ans.que2 = "4123";
    Dom.Ans.que3 = 3;
    Dom.Ans.que4 = 1;
    Dom.Ans.que5 = "1234";

    loadcav = new CanvasCreate($("#logo"));
    Loads.loads("loader_logo",  "img/loader/", "logo.png");
    Loads.loads("mp3_loader",  "mp3/", "loader.mp3");

    Loads.complete = function(){
        loadcav.drawImg("loader_logo", "stage");
        cvtw.get(loadcav.img["loader_logo"], {loop:true}).to({alpha:0.7}, 800, createjs.Ease.bounceInOut);
        Room.Loader.run();
        mp3_play("loader",1);
        loader_ini();
    };
    Loads.loading();
}

function loader_ini(){

    Dom.loadWord = $("#Loader .word");
    cav = new CanvasCreate($("#cav"));
    door = new CanvasCreate($("#door"));
    gamecav = new CanvasCreate($("#gamecav"));

    cav_door_load();
    cav_que_load();
    mp3_load();
    video_load();

    cav_game_start_load();
    cav_game_door_load();
    cav_game_load();

    cav_end_load();

    ques_load();

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;
        Room.Loader.progress(i);
    };
    Loads.complete = function(){

        cav_door();
        cav_que();
        html_ques();
        cav_video();
        cav_game_door();
        cav_game_start();
        cav_game();
        cav_end();

        createjs.Ticker.addEventListener("tick", function(){
            $.each(cav_ticker, function(i, fn) { fn() })
        });

        libs.iniDom();

    };
    Loads.loading();
}


function mp3_load(){
    Loads.loads("mp3_start",  "mp3/", "start.mp3");

    Loads.loads("mp3_door_open",  "mp3/door/", "open.mp3");
    Loads.loads("mp3_door_turn",  "mp3/door/", "turn.mp3");
    Loads.loads("mp3_door_cls",  "mp3/door/", "cls.mp3");

    Loads.loads("mp3_que_bg",  "mp3/que/", "bg.mp3");
    Loads.loads("mp3_que_right",  "mp3/que/", "right.mp3");
    Loads.loads("mp3_que_wrong",  "mp3/que/", "wrong.mp3");
    Loads.loads("mp3_que_water",  "mp3/que/", "water.mp3");
    Loads.loads("mp3_que_time",  "mp3/que/", "time.mp3");

    Loads.loads("mp3_gamebg",  "mp3/game/", "bg.mp3");
    Loads.loads("mp3_gamestart",  "mp3/game/", "start.mp3");
    Loads.loads("mp3_gameclick",  "mp3/game/", "click.mp3");
    Loads.loads("mp3_gamecome",  "mp3/game/", "come.mp3");

    Loads.loads("mp3_gameover",  "mp3/game/", "over.mp3");
    Loads.loads("mp3_gamefinish",  "mp3/game/", "finish.mp3");


}
