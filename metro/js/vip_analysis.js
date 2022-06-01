$("#play-btn").click(function(){
    var user_video=$("#video-url").val();
    user_video && (user_video=user_video.replace(/ /g,""));
    var play_url=$("#link-select").val() + user_video;
    $("#palyer-iframe").attr("src", play_url);
    $("#current-play-url").text(play_url);
    $("#current-play-url").attr("href", play_url);
})

   //获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
window.onload=function (){
    var user_video = getUrlParam("url");
    if (user_video != null){
        var play_url=$("#link-select").val() + user_video;
        $("#palyer-iframe").attr("src", play_url);  
        $("#current-play-url").text(play_url);
        $("#current-play-url").attr("href", play_url);
        $("#video-url").val(user_video);
    }
}