function ques_load(){
    Loads.loads("que1_read",  "img/ques/que1/", "read.png");

    Loads.loads("que1_b1",  "img/ques/que1/", "b1.png");
    Loads.loads("que1_b2",  "img/ques/que1/", "b2.png");
    Loads.loads("que1_b3",  "img/ques/que1/", "b3.png");
    Loads.loads("que1_b4",  "img/ques/que1/", "b4.png");
    Loads.loads("que1_w",  "img/ques/que1/", "w.png");

    Loads.loads("que2_p1",  "img/ques/que2/", "pic1.png");
    Loads.loads("que2_p2",  "img/ques/que2/", "pic2.png");
    Loads.loads("que2_p3",  "img/ques/que2/", "pic3.png");
    Loads.loads("que2_p4",  "img/ques/que2/", "pic4.png");
    Loads.loads("que2_w",  "img/ques/que2/", "w.png");

    Loads.loads("que3_w",  "img/ques/que3/", "w.png");

    Loads.loads("que4_w",  "img/ques/que4/", "w.png");
    Loads.loads("que4_p1",  "img/ques/que4/", "1.png");
    Loads.loads("que4_p2",  "img/ques/que4/", "2.png");
    Loads.loads("que4_p3",  "img/ques/que4/", "3.png");
    Loads.loads("que4_p4",  "img/ques/que4/", "4.png");

    Loads.loads("que5_w",  "img/ques/que5/", "w.png");
    Loads.loads("que5_btn",  "img/ques/que5/", "btn.png");

    Loads.loads("x",  "img/", "x.png");
}

function html_ques(){

    $("#Que1 .b1").html(Loads.get("que1_b1"));
    $("#Que1 .b2").html(Loads.get("que1_b2"));
    $("#Que1 .b3").html(Loads.get("que1_b3"));
    $("#Que1 .b4").html(Loads.get("que1_b4"));
    $("#Que1 .w").html(Loads.get("que1_w"));
    $("#Que1 .read").html(Loads.get("que1_read"));

    $("#Que2 .p1").html(Loads.get("que2_p1"));
    $("#Que2 .p2").html(Loads.get("que2_p2"));
    $("#Que2 .p3").html(Loads.get("que2_p3"));
    $("#Que2 .p4").html(Loads.get("que2_p4"));
    $("#Que2 .w").html(Loads.get("que2_w"));

    $("#Que3 .w").html(Loads.get("que3_w"));

    $("#Que4 .w").html(Loads.get("que4_w"));
    $("#Que4 .p1").html(Loads.get("que4_p1"));
    $("#Que4 .p2").html(Loads.get("que4_p2"));
    $("#Que4 .p3").html(Loads.get("que4_p3"));
    $("#Que4 .p4").html(Loads.get("que4_p4"));

    $("#Que5 .w").html(Loads.get("que5_w"));
    $("#Que5 .finish").html(Loads.get("que5_btn"));

}