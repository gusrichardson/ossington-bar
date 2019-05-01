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

})