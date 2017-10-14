var libs = {};
var cc = {};
var Room = {};
var Ticker = {};
var Dom = {};
var Base = {};
var Canvas = {};
var If = {};
Dom._unable = $("#_unable");
cc.id = "Loader";

libs.create = function(){
    cc.m = {};
    $("section.cc").each(function(){
        var dom = $(this);
        cc.m[dom.attr("id")] = dom;
    });

    $("canvas.CAV").each(function(){
        var dom = $(this);
        var id = dom.attr("id");
        Canvas[id] = new CanvasCreate(dom);
    });
};

libs.iniDom = function(){
    for(var id in Room) {
        if(Room[id].dom) Room[id].dom();
    }
};

libs.setTicker = function(fps){
    createjs.Ticker.setFPS(fps);
    createjs.Ticker.addEventListener("tick", function(){
        $.each(Ticker, function(i, fn) { fn() })
    })
};
cc.tap = function(e){
    e.preventDefault();
    e.stopPropagation();
};
cc.ticker = function(id, fn){
    Ticker[id] = function(){
        if(cc.m[id].is(':visible')) fn();
        else delete Ticker[id];
    }
};
cc.clsTicker = function(id){
    delete Ticker[id];
};
cc.drag =  function(id) {

};

cc.ppt = function(id, transition, callback){
    //id:["go","come"]
    //transition(go_before, going, go_after, come_before, coming, come_after, callback):过渡动画 //传入Rooms[id[0]].go_before等
    //callback，完成后回调，或直接回调

    //容错
    if(!id[0] || !id[1]) {
        console.log("id设置错误", pa);
        return
    }

    //判断是否自己重复过场
    if(id[0]==id[1]) {
        if(callback) callback();
        return
    }


    cc.old = id[0];
    cc.id = id[1];

    //回调
    var after = {};
    if(!Room[id[0]]) Room[id[0]] = {};
    if(!Room[id[1]]) Room[id[1]] = {};

    if(Room[id[0]].go_after) after.go = Room[id[0]].go_after;
    if(Room[id[1]].come_after) after.come = Room[id[1]].come_after;

    if(Room[id[0]].go_before) {
        Room[id[0]].go_before(function(){
            if(Room[id[1]].come_before) {
                Room[id[1]].come_before(function(){
                    if(Room[id[0]].going) Room[id[0]].going();
                    if(Room[id[1]].coming) Room[id[1]].coming();
                    transition(after, callback)
                })
            }else{
                if(Room[id[0]].going) Room[id[0]].going();
                if(Room[id[1]].coming) Room[id[1]].coming();
                transition(after, callback)
            }
        })
    }else{
        if(Room[id[1]].come_before) {
            Room[id[1]].come_before(function(){
                if(Room[id[0]].going) Room[id[0]].going();
                if(Room[id[1]].coming) Room[id[1]].coming();
                transition(after, callback)
            })
        }else{
            if(Room[id[0]].going) Room[id[0]].going();
            if(Room[id[1]].coming) Room[id[1]].coming();
            transition(after, callback)
        }
    }
};

var Loads = {};
Loads.que = new createjs.LoadQueue();
Loads.que.installPlugin(createjs.Sound);

Loads.list = [];
Loads.has = {};
Loads.loaded = {};
Loads.loading = function(){

    if(!Loads.list.length) {
        Loads.progress({loaded:100});
        Loads.complete();
        return;
    }

    Loads.que.removeAllEventListeners();
    if(Loads.progress) Loads.que.on("progress", Loads.progress, this);
    if(Loads.complete) Loads.que.on("complete", Loads.complete, this);
    Loads.que.on("fileload", function(ev){
        var id = ev.item.id;
        //console.log("fileload", id);
        Loads.loaded[id] = ev.currentTarget._loadedResults[id];
    });

    var manifest = Loads.list;
    Loads.que.loadManifest(manifest)
};
Loads.loads = function(id, src, fi){
    //{id: "player1", src:"uploads/stage1/player1.png"}
    //{id:"sound", src:"http://path/to/sound.mp3"}
    if(Loads.has[id]) return;
    Loads.has[id] = 1;
    Loads.list.push({id:id, src:(src?src:"")+fi});

};
Loads.get = function(id){
    return Loads.que.getResult(id)
};
Loads.copy_list = [];
Loads.copy_img = {};
Loads.copy = function(id, cid){
    if(Loads.has[cid]) return;
    Loads.has[cid] = 1;

    Loads.copy_list.push({"id":id, "cid":cid});
};
Loads.copy_run = function(callback){

    var len = Loads.copy_list.length;

    for(var i in Loads.copy_list){
        createImageBlob(Loads.que._loadItemsById[Loads.copy_list[i]["id"]].src, callback, Loads.copy_list[i]["cid"]);
    }

    function getImageBlob(url, cb) {
        var xhr          = new XMLHttpRequest();
        xhr.open("get", url, true);
        xhr.responseType = "blob";
        xhr.onload       = function() {
            if (this.status == 200) {
                if(cb) cb(this.response);
            }
        };
        xhr.send();
    }

    function createImageBlob(url, callback, cid){
        var reader    = new FileReader();
        getImageBlob( url , function(blob){
            reader.readAsDataURL(blob);
        });
        reader.onload = function(e) {
            Loads.copy_img[cid] = e.target.result;
            len--;
            if(!len) callback();
        }
    }


};
Loads.get_copy = function(id){
    var img = document.createElement("img");
    img.src = Loads.copy_img[id];
    return img;
};
// Loads.progress(e) e.loaded
// Loads.complete() Loads.que.getResult("image")


function _get(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null )return  unescape(r[2]); return null;
}

function mp3_play(key, loop, vol){
    if(!Dom["mp3_"+key]){
        if(!loop) {
            Dom["mp3_"+key] = createjs.Sound.play("mp3_"+key, {interrupt: createjs.Sound.INTERRUPT_ANY});
        }else {
            Dom["mp3_"+key] = createjs.Sound.play("mp3_"+key, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
        }
    }
    //if(vol) Dom["mp3_"+key].volume = vol;
    Dom["mp3_"+key].play();

}
function mp3_stop(key){
    if(!Dom["mp3_"+key]) Dom["mp3_"+key] = createjs.Sound.play("mp3_"+key, {interrupt: createjs.Sound.INTERRUPT_ANY});
    if(!key) createjs.Sound.stop();
    else Dom["mp3_"+key].stop();
}