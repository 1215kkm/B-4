/* 슬라이드 */
setInterval(function(){
    $('.slide ul').animate({left:-1200}, 1000, function(){
        $('.slide li').eq(0).appendTo($('.slide ul'))
        $('.slide ul').css({left:0})
    })
}, 2000)




//팝업
$('.notice li').eq(0).click(function(){
    $('.popup').show()
})


$('.popup a').click(function(){
    $('.popup').hide()
})