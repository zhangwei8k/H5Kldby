<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type">
    <meta content="text/html; charset=utf-8">
    <meta charset="utf-8">
    <title>快乐家族为你打call！</title>
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="viewport" content="target-densitydpi=device-dpi,width=700px,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <script>
        var DEFAULT_WIDTH = 700,//页面的默认宽度
            ua=navigator.userAgent.toLowerCase(),//根据useragent的信息获取浏览器信息
            deviceWidth=window.screen.width,//设备的宽度
            devicePixelRatio=window.devicePixelRatio||1,//物理像素和设备独立像素的比例，默认为1
            targetDensitydpi;
        //Android4.0以下手机不支持viewport的width，需要设置target-densitydpi
        if(ua.indexOf("android")!==-1&&parseFloat(ua.slice(ua.indexOf("android")+8))<4){
            targetDensitydpi=DEFAULT_WIDTH/deviceWidth*devicePixelRatio*160;
            $('meta[name="viewport"]').attr('content','target-densitydpi=' + targetDensitydpi + ',width=device-width,user-scalable=no');
        }
    </script>

    <link rel="stylesheet" href="./src/css/style.css" />
    <link rel="stylesheet" href="./src/css/index.css" />
    <link rel="stylesheet" href="./src/css/que.css" />
    <link rel="stylesheet" href="./src/css/game.css" />

</head>

<body>
<div id="_unable"></div>

<div id="app">

    <section class="cc " id="Loader">
        <div class="main">
            <canvas id="logo" width="424" height="348"></canvas>
            <div class="logo"></div>
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
            <div class="cc1"></div>
            <div class="cc2"></div>
            <div class="box"></div>
            <div class="word">20:19:50</div>

            <div class="start"></div>
        </div>
    </section>

    <section class="cc " id="Door">
        <div class="main">
            <canvas id="door" width="700" height="1140"></canvas>
        </div>
    </section>

    <section class="cc " id="Index">
        <div class="main">
            <canvas id="cav" width="700" height="1140"></canvas>
        </div>
    </section>

    <section class="cc " id="Que1">
        <div class="main">

            <div class="b1"></div>
            <div class="b2"></div>
            <div class="b3"></div>
            <div class="b4"></div>
<!--            <div class="que"></div>-->
            <div class="w"></div>

            <div class="_bback b1_back"></div>
            <div class="_bback b2_back"></div>
            <div class="_bback b3_back"></div>
            <div class="_bback b4_back"></div>

            <div class="btn1"></div>
            <div class="btn2"></div>
            <div class="btn3"></div>
            <div class="btn4"></div>

            <div class="read"></div>

        </div>
    </section>

    <section class="cc " id="Que2">
        <div class="main">

            <div class="w"></div>

            <div class="pp p1"></div>
            <div class="pp p2"></div>
            <div class="pp p3"></div>
            <div class="pp p4"></div>

            <div class="_bback b1_back"></div>
            <div class="_bback b2_back"></div>
            <div class="_bback b3_back"></div>
            <div class="_bback b4_back"></div>

            <div class="btn1"></div>
            <div class="btn2"></div>
            <div class="btn3"></div>
            <div class="btn4"></div>

        </div>
    </section>

    <section class="cc " id="Que3">
        <div class="main">

            <div class="w"></div>

            <canvas id="v1" width="468" height="263"></canvas>
            <canvas id="v2" width="468" height="263"></canvas>

            <div class="btn1"></div>
            <div class="btn2"></div>
            <div class="btn3"></div>
            <div class="btn4"></div>

        </div>
    </section>

    <section class="cc " id="Que4">
        <div class="main">

            <div class="w"></div>

            <div class="pp p1"></div>
            <div class="pp p2"></div>
            <div class="pp p3"></div>
            <div class="pp p4"></div>

            <div class="_bback b1_back"></div>
            <div class="_bback b2_back"></div>
            <div class="_bback b3_back"></div>
            <div class="_bback b4_back"></div>

            <div class="btn1"></div>
            <div class="btn2"></div>
            <div class="btn3"></div>
            <div class="btn4"></div>

        </div>
    </section>

    <section class="cc " id="Que5">
        <div class="main">

            <div class="time">10</div>

            <div class="w"></div>

            <div class="btn1"></div>
            <div class="btn2"></div>
            <div class="btn3"></div>
            <div class="btn4"></div>

            <div class="btn1_back back"></div>
            <div class="btn2_back back"></div>
            <div class="btn3_back back"></div>
            <div class="btn4_back back"></div>

            <div class="finish"></div>

        </div>
    </section>

    <section class="cc " id="GameStart">
        <div class="main">
            <canvas id="gameStartCav" width="700" height="1140"></canvas>
        </div>
    </section>

    <section class="cc " id="GameDoor">
        <div class="main">
            <div class="bgs"></div>
            <canvas id="gameDoorCav" width="700" height="1140"></canvas>
        </div>
    </section>

    <section class="cc " id="Game">
        <div class="main">
<!--            <div class="msg"></div>-->
            <canvas id="gamecav" width="700" height="1140"></canvas>


            <div class="box box1"></div>
            <div class="box box2"></div>
            <div class="box box3"></div>
            <div class="box box4"></div>
            <div class="btns">
                <div class="w">00:00:00</div>
                <div class="btn1"></div>
                <div class="btn2"></div>
            </div>
        </div>
    </section>

    <section class="cc " id="End">
        <div class="main">
            <canvas id="endCav" width="700" height="1140"></canvas>
            <img id="Photo" src="" alt="">
            <div class="link"></div>
        </div>
    </section>

</div>


<script src="./lib/jquery-2.1.4.min.js"></script>
<script src="./lib/jquery.mobile-1.4.5.min.js"></script>
<!--<script src="./lib/underscore.js"></script>-->
<script src="./lib/createjs/createjs-2015.11.26.min.js"></script>
<script src="./lib/hammer/hammer.min.js"></script>
<script src="./lib/hammer/hammer_move.js"></script>

<script src="./lib/velocity/velocity.js"></script>

<script src="./lib/libs.js"></script>
<script src="./lib/libs_canvas.js"></script>

<script src="./src/js/sprite.js"></script>

<script src="./src/js/resize.js"></script>
<script src="./src/js/init.js"></script>
<script src="./src/js/init_door.js"></script>
<script src="./src/js/init_que.js"></script>
<script src="./src/js/init_ques.js"></script>
<script src="./src/js/init_video.js"></script>
<script src="./src/js/init_game.js"></script>
<script src="./src/js/init_game_start.js"></script>
<script src="./src/js/init_game_door.js"></script>
<script src="./src/js/init_end.js"></script>

<script src="./src/js/index.js"></script>
<script src="./src/js/door.js"></script>
<script src="./src/js/que.js"></script>
<script src="./src/js/que1.js"></script>
<script src="./src/js/que2.js"></script>
<script src="./src/js/que3.js"></script>
<script src="./src/js/que4.js"></script>
<script src="./src/js/que5.js"></script>
<script src="./src/js/gamestart.js"></script>
<script src="./src/js/gamedoor.js"></script>
<script src="./src/js/game.js"></script>
<script src="./src/js/end.js"></script>

<script>
    $("body").on('touchmove',function(event){ event.preventDefault(); },false);

    $(function(){
        $("iframe").hide();
        $("#ad_colse_container").remove();
        $("body > *").each(function(){
            if(!$(this).hasClass("ui-page")) $(this).hide();
        });

        setTimeout(function(){
            if(!Dom.ad_bad) window.location.reload();
        },2000);

    });

    //loader();

</script>

<?php
require_once "wx/jssdk.php";
$jssdk = new JSSDK("wxb4ae673c2fb393d0", "076c9e44b11756767c10c085d70825dd");
$signPackage = $jssdk->GetSignPackage();
?>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
    /*
     * 注意：
     * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
     * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
     * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
     *
     * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
     * 邮箱地址：weixin-open@qq.com
     * 邮件主题：【微信JS-SDK反馈】具体问题
     * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
     */
    wx.config({
        debug: false,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: <?php echo $signPackage["timestamp"];?>,
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
    });
    wx.ready(function () {
        Dom.ad_bad = 1;
        loader();
        wx.onMenuShareAppMessage({
            title: '全国只有3%的人通关，快乐家族玩疯了，不服来挑战！', // 分享标题
            desc: '这么多年的《快乐大本营》居然白看了？！', // 分享描述
            link: 'http://www.ririvip.com/index.php', // 分享链接
            imgUrl: 'http://www.ririvip.com/wx/logo.jpg', // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '' // 如果type是music或video，则要提供数据链接，默认为空
        });

        wx.onMenuShareTimeline({
            title: '全国只有3%的人通关，快乐家族玩疯了，不服来挑战！', // 分享标题
            link:'http://www.ririvip.com/index.php',
            imgUrl: 'http://www.ririvip.com/wx/logo.jpg' // 分享图标
        });
    });
</script>
<script src="https://s19.cnzz.com/z_stat.php?id=1264371986&web_id=1264371986" language="JavaScript"></script>
</body>
</html>