$('document').ready(function () {
    console.log('ready!')

    $('a[href*="#"]').on('click', function () {
        target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, "slow")
    })

    $('#show-food').on("click", function () {
        $('#drinks').css({
            display: "none"
        })
        $('#food').css({
            display: 'block'
        })
    })
    $('#show-drinks').on("click", function () {
        $('#food').css({
            display: "none"
        })
        $('#drinks').css({
            display: 'block'
        })
    })

    //RUSSIAN MENU BUTTONS
    $('#russian-show-food').on("click", function () {
        $('#russian-drinks').css({
            display: "none"
        })
        $('#russian-food').css({
            display: 'block'
        })
    })
    $('#russian-show-drinks').on("click", function () {
        $('#russian-food').css({
            display: "none"
        })
        $('#russian-drinks').css({
            display: 'block'
        })
    })

    $('.translate').on('click', function () {
        $('.english').toggleClass('display-none');
        $('.russian').toggleClass('display-none');
    })

    //PARALLAX
    $(window).scroll(function () {
        let windowScroll = $(this).scrollTop();
        console.log(windowScroll);
        $('.welcome-text').css({
            transform: `translate(0px, ${windowScroll / 5}%)`
        })
        // $('#letter-1').css({
        //     transform: `translate(0px, ${windowScroll}%) rotate(-${windowScroll / 4}deg`
        // })
        // $('#letter-2').css({
        //     transform: `translate(0px, ${windowScroll / 2}%) rotate(-${windowScroll / 5}deg)`
        // })
        // $('#letter-3').css({
        //     transform: `translate(0px, ${windowScroll / 3}%) rotate(-${windowScroll / 6}deg)`
        // })
        // $('#letter-4').css({
        //     transform: `translate(0px, ${windowScroll / 4}%)`
        // })
        // $('#letter-5').css({
        //     transform: `translate(0px, ${windowScroll / 5}%)`
        // })
        // $('#letter-6').css({
        //     transform: `translate(0px, ${windowScroll / 4}%)`
        // })
        // $('#letter-7').css({
        //     transform: `translate(0px, ${windowScroll / 3}%) rotate(${windowScroll / 6}deg)`
        // })
        // $('#letter-8').css({
        //     transform: `translate(0px, ${windowScroll / 2}%) rotate(${windowScroll / 5}deg)`
        // })
        // $('#letter-9').css({
        //     transform: `translate(0px, ${windowScroll}%) rotate(${windowScroll / 4}deg)`
        // })

        $('.shutter').css({
            transform: `translate(0px, -${windowScroll / 10}%)`
        })
        // $('.welcome-text').css({
        //     transform: `translate(0px, ${windowScroll / 4}%)`
        // })
        // $('#parallax-logo').css({
        //     transform: `translate(${windowScroll / 4}%, -${windowScroll / 1.5}%) rotate(${windowScroll / 4}deg)`
        // })
    })

})