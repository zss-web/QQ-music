

$(function(){

    //设置content_list的滚动条
    $(".content_list").mCustomScrollbar();

    //歌曲移入移出事件
    $(".list_music").hover(function(){
        $(this).find(".list_monu a").stop().fadeIn(100);
        $(this).find(".list_time a").stop().fadeIn(100);
        $(this).find(".list_time span").stop().fadeOut(100);
    },function(){
        $(this).find(".list_monu a").stop().fadeOut(50);
        $(this).find(".list_time a").stop().fadeOut(50);
        $(this).find(".list_time span").stop().fadeIn(50);

    })
    //复选框点击事件
    $(".list_check").click(function(){
        $(this).toggleClass("iconfont  icon-fuxuankuang ")
        
    })
    $(".music_play").click(function(){
        $(this).toggleClass(" icon-bofang1 ")
        
    })
    $(".music_only").click(function(){
        $(this).toggleClass("music_only_bg")
        
    })
    $(".music_like").click(function(){
        $(this).toggleClass("icon-danseshixintubiao-")
        
    })
    
   
})