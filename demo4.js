/**
 * Created by Administrator on 2017/5/4.
 */
var minSize = 5;
var maxSize = 50;
var newOn = 100;//单位毫秒
var flakeColor = "#fff";
var flake = $("<div></div>").css({"position":"absolute","top":"-50px"}).html("❄");
// var flake = $("<div></div>").css({"position":"absolute","top":"-50px"}).html("<img src='../image/30.jpg'style='width: 200px'>");
$(function () {
    var documentHeight = $(document).height();
    var documentWidth = $(document).width();
    setInterval(function () {
        var startPositionLeft = Math.random()*documentWidth;
        var startOpacity = 0.7 + Math.random()*0.3;
        var endPositionTop = documentHeight;
        var endPositionLeft = Math.random()*documentWidth;
        var durationFall = 4000 + Math.random()*3000;
        var sizeflake = minSize + Math.random()*(maxSize - minSize);
        flake.clone().appendTo("body").css({
            "left": startPositionLeft,
            "opacity": startOpacity,
            "font-size": sizeflake,
            "color": flakeColor
        }).animate({
            "top": endPositionTop,"left": endPositionLeft,"opacity": 0.5
        },durationFall,function () {$(this).remove();});
    },newOn);
});
