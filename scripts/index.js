$(function() {

    // Add Class Avtive To The Links In Navbar 
    $('.navbar-dark .navbar-nav .nav-item').click(function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');

    });

    // Make The Slider Take The Full Height Of The Window
    $(window).resize(function() {
        $('#main-slider, #main-slider .carousel-item img').height($(window).height());
    });
    $('#main-slider, #main-slider .carousel-item img').height($(window).height());

    // Make The Data In Slider In The Middle And Center
    $('#main-slider .carousel-item .data').css('padding-top', ($('#main-slider .overlay').height() - $('#main-slider .carousel-item .data').innerHeight()) / 2);

    // Scrolled By Hand Icon
    $('#main-slider .hand-icon').click(function() {

        $('body, html').animate({
            scrollTop: $($(this).data('below')).offset().top
        }, 1000);

    });

    // Show The Data When Hover In Our Works
    $('.our-works .box-data').hover(function() {
        $(this).children('.data').fadeIn();
        $(this).css('background-color', '#fff');
        $(this).children('.img-box').children('img').css({
            width: '150px',
            height: '150px'
        });

    }, function() {
        $(this).children('.data').fadeOut();
        $(this).css('background-color', '#efefef');
        $(this).children('.img-box').children('img').css({
            width: '100%',
            height: '100%'
        });
    });

    // Make The Img Bigger When Clicked
    $('.testi #testi-slider .carousel-indicators li').click(function() {

        $(this).css({
            width: '120px',
            height: '120px'
        });

        $(this).siblings().css({
            width: '60px',
            height: '60px'
        });

    });

    // Put Color To The Team Section
    $('.about .team').hover(function() {
        $(this).css({
            color: '#000',
            marginTop: '-20px'
        });
        $(this).find('img').css('filter', 'none');

    }, function() {
        $(this).css({
            color: '#757272',
            marginTop: '0'
        });
        $(this).find('img').css({
            filter: '#757272',
            filter: 'grayscale(1)'
        });
    });

    // Make Scrolled To Section
    $('.navbar .navbar-collapse .navbar-nav li').click(function() {

        $('body, html').animate({
            scrollTop: $($(this).data('scrolled')).offset().top
        }, 600);

    });

});