// function loadDeferredIframe() {
//     // this function will load the Google homepage into the iframe
//     var iframe = document.getElementsByClassName("my-deferred-iframe");
//     iframe.src = "https://www.youtube.com/embed/LVC-t_0SuaA" // here goes your url
//     iframe.src = "https://www.youtube.com/embed/OJ6558B3Xz8" // here goes your url
//     iframe.src = "https://www.youtube.com/embed/LVC-t_0SuaA" // here goes your url
// };

// window.onload = loadDeferredIframe;



$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
    $('html').css({
        'overflow': 'auto',
        'height': 'auto',
        'position': 'relative'
    });
    $('.home').css({
        'position': 'relative'
    });
    $('.social-icons').css({
        'display': 'inline',
        'position': 'fixed'
    });
});

$(window).scroll(function () {
    clearTimeout($.data(this, 'scrollTimer'));
    $('.social-icons').hide();
    $.data(this, 'scrollTimer', setTimeout(function () {
        //  activity on off-scrolling
        $('.social-icons').show();
    }, 250));
});


$(document).ready(function () {
    $('.lazyYT').lazyYT();
    new WOW().init();

    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    });

    // owl carousel script
    $('.owl-one').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
    // projects carosol
    $('.owl-two').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        items: 1,
        center: true
    });
});

document.getElementById("year").innerHTML = new Date().getFullYear();

function copyEmail() {
    var copyText = 'abiruzzaman.molla@gmail.com';
    navigator.clipboard.writeText(copyText);
    alert("Copied the Email: " + copyText);
}

document.addEventListener("DOMContentLoaded", function (event) {
    //Load YouTube Videos on page...
    var youTubeVideos = document.querySelectorAll('.youtube-video');
    for (var i = 0; i < youTubeVideos.length; i++) {
        var thumbnail = "https://img.youtube.com/vi/" + youTubeVideos[i].dataset.embed + "/mqdefault.jpg";
        //set CSS
        youTubeVideos[i].style.cssText = "max-width: 560px;margin: 40px auto;";

        //set microdata attributes for SEO
        youTubeVideos[i].setAttribute("itemprop", "video");
        youTubeVideos[i].setAttribute("itemscope", '');
        youTubeVideos[i].setAttribute("itemtype", "http://schema.org/VideoObject");

        //set HTML
        youTubeVideos[i].innerHTML = '<div class="play"></div>' +
            '<meta itemprop="embedURL" content="https://www.youtube.com/embed/' + youTubeVideos[i].dataset.embed + '" />' +
            '<img style="cursor: pointer;" width="560" height="315" src="' + thumbnail + '" />';

        //add click event that will load YouTube video
        youTubeVideos[i].addEventListener("click", function () {
            this.innerHTML = '<iframe width="560" height="315" frameBorder="0" ' +
                'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"' +
                'src="https://www.youtube.com/embed/' + this.dataset.embed + '?enablejsapi=1&rel=0&showinfo=0&autoplay=1"' +
                ' allowFullScreen="allowfullscreen"></iframe>';
        });

    }

});