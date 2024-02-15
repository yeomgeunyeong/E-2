$(function(){

    $(".main > li").hover(function(){
        $(this).find($(".sub")).stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })



    setInterval(function(){
        $(".top_move").animate({top:"-100%"}, 500, function(){
            $(".top_move").css({top:"0"});
            $(".top_move").append($(".top_move li").first());
        })
    }, 3000)


    $(".p_click").click(function(){
        $(".modal, .pop").show();
    })

    $(".close").click(function(){
        $(".modal, .pop").hide();
    })
})//