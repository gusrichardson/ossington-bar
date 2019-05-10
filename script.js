$('document').ready(function () {

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

    $('#side-nav-button').on('click', function () {
        $('.header-nav').css({
            width: '100%',
        })
    })
    $('#close-menu').on('click', function () {
        $('.header-nav').css({
            width: '0'
        })
    })

})