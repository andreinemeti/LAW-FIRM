//slow scrolling when clicking on links
    $(document).ready(function() {
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });
    });

    // slick carousel settings

  $(document).ready(function() {
        $(".slick-carousel").slick({
            slidesToShow: 6,
            slidesToScroll: 2,
            autoplay: true,
            infinite: true,

            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }]
        });
    });



   $('.overflow').hover(function() {
        $(this).toggleClass('scroll');
    });



       // Add slideDown animation to Bootstrap dropdown when collapsing.

    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').slideUp();
    });




//Auto show elements on landing page 
$(window).on('load', function(){
    $('.landing-page .hide1').addClass('show');
    $('.landing-page .hide2').addClass('show');
    $('.landing-page .hide3').addClass('show');
    $('.landing-page .hide4').addClass('show');
    $('.landing-page .hide5').addClass('show');
});


 //animations logic
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
   
    if( wScroll > $('.hide1').offset().top - 100){
        $('.hide1').addClass('show');

    }

    if( wScroll > $('.hide2').offset().top - 100){
        $('.hide2').addClass('show');
    }

      if( wScroll > $('.hide3').offset().top - 100){
        $('.hide3').addClass('show');
    }

      if( wScroll > $('.hide4').offset().top + 220){
        $('.hide4').addClass('show');
    }

       if( wScroll > $('.hide5').offset().top - 600){
        $('.hide5').addClass('show');
    }
 
    
});

// login popup 

$("#clientsLogin, #auditorsLogin").click(function() {
$("#clients").show('easing');
});

$("#clients .fa-close").click(function() {
$("#clients").hide('easing');
});


//read more button

$("#readMore").click(function() {
 if($(".hidden-p").css('display') == 'none') {
        $("#readMore").text('Read less');
        $(".hidden-p").show('easing');
        $("#first-child").css("overflow-y", "scroll");
    }
    else if ($(".hidden-p").css('display') == 'block') {
        $("#readMore").text('Read more');
        $(".hidden-p").hide('easing');
        $(".overlap.first").css("overflow-y", "hidden");
    }
});



