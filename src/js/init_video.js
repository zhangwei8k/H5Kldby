function video_load(){

    cavV1 = new CanvasCreate($("#v1"));
    cavV2 = new CanvasCreate($("#v2"));

    for(var i=1; i<=47; i++){
        Loads.loads("v1_"+i,  "img/v1/", "v1 ("+i+").png");
    }
    Loads.loads("mp3_v1",  "mp3/", "v1.mp3");

    for(var i=1; i<=46; i++){
        Loads.loads("v2_"+i,  "img/v2/", "v2 ("+i+").png");
    }
    Loads.loads("mp3_v2",  "mp3/", "v2.mp3");

}

function cav_video(){

    cavV1.ccv("video");
    cavV1.drawPhotos("v1", "video",  "v1_", 47, {
        frames:[0,0,474,267],
        framerate: 11,
        mov: {
            ini: [0],
            run:[0,46,"stop"],
            stop:[46]
        }
    });
    cavV1.show("video");

    cavV2.ccv("video");
    cavV2.drawPhotos("v2", "video",  "v2_", 46, {
        frames:[0,0,474,267],
        framerate: 11,
        mov: {
            ini: [0],
            run:[0,45,"stop"],
            stop:[45]
        }
    });
    cavV2.show("video");
}