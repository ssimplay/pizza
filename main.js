var dw = document.documentElement.clientWidth;
        setInterval("resize()" , 0);
        function resize(){
            
            dw = document.documentElement.clientWidth;
            $(".visual_img").css({ width:dw*3 });
            $(".visual_img li").css({ width:dw })
            
            
        }

$(function(){
   
    /* 슬라이드 쇼 */
    $('.visual_img').each(function(){
        
        var $slides = $(this).find('li'),
            slideCount = $slides.length,
            currentIndex = 0;
        
        $slides.eq(currentIndex).fadeIn();
        
        setInterval(showNextSlide, 7500);
        
        function showNextSlide(){
            
            var nextIndex = (currentIndex + 1) % slideCount;
            
            $slides.eq(currentIndex).fadeOut(); 
            $slides.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;
        }
        
        
    })
    
    
    /* mnb */
    $("nav .mnb").on('click', function(){
        $("nav ul").fadeIn();
        $("nav ul").animate({ 
            marginRight:0
        },750
                           );
        $("nav .mnb").fadeOut();
    });
        
    $("nav ul .end").click(function(){
        $("nav ul").animate({
            marginRight:-175
        },750
                           );
        $("nav ul").fadeOut();
        $("nav .mnb").fadeIn();
    })
    
});

