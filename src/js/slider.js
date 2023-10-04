$(function(){
    var amt;
    var delay = 3000;
    var curIndex = 0;

    initSlider();
    autoPlay();

    function initSlider(){
        amt = $('.sobre-autor').length;
        var sizeContainer = 100 * amt;
        var sizeSingle = 100 / amt;
        $('.sobre-autor').css('width', sizeSingle+'%');
        $('.scroll-wraper').css('width', sizeContainer+'%');
        
        for (var i = 0; i<amt; i++){
            if(i==0)
                $('.slider-bullets').append('<span style="background-color: black;"></span>')
            else
            $('.slider-bullets').append('<span></span>')
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt)
                curIndex=0;
            goToSlider(curIndex);
        }, delay)
    }

    function goToSlider(curIndex){
        var offSet = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;

        $('.slider-bullets span').css('background-color', 'gray');
        $('.slider-bullets span').eq(curIndex).css('background-color', 'black');
        $('.slider').stop().animate({'scrollLeft':offSet+'px'});
    }
})