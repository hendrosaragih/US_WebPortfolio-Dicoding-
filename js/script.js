//event pada saat link diklik
$('.page-scroll').on('click', function(e) {
    //ambil isi tujuan
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elementujuan = $(tujuan);
    // console.log(elementujuan.offset);
    //pindahkan scroll
    $('html, body').animate({
        scrollTop: elementujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});


//paralax
//about
$(window).on('load', function() {
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });


    //portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 400 * (i + 1));
        });
    }
});