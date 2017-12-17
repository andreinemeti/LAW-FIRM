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
    $('.hide1').addClass('show');
    $('.hide2').addClass('show');
    $('.hide3').addClass('show');
    $('.hide4').addClass('show');
    $('.hide5').addClass('show');
});



$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    //how it work scroll function
    
    if( wScroll > $('.hide1').offset().top - 250){
        $('.hide1').addClass('show');

    }

  if( wScroll > $('.hide2').offset().top - 250){
        $('.hide2').addClass('show');
    }

      if( wScroll > $('.hide3').offset().top - 250){
        $('.hide3').addClass('show');
    }

      if( wScroll > $('.hide4').offset().top - 250){
        $('.hide4').addClass('show');
    }

   
    
    
});
