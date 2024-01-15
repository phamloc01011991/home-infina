$(document).ready(function() {
    
    function toggleLoading(button) {
        button.classList.toggle('button--loading');
        setTimeout(function() {
          button.classList.remove('button--loading');
        }, 5000);
      }
    setTimeout(function() {
        $('.product .product-control .head span').text('Đầu tư dễ dàng chỉ từ 1.000.000đ');
    }, 4000);

    // 
    $('.screenshot .owl-carousel').owlCarousel({
        loop:false,
        margin:7,
        items: 2
    })

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });
// slide
    let isDown = false;
    let startX;
    let scrollLeft;
    const slider = $('.items');

    const end = () => {
    isDown = false;
    slider.removeClass('active');
    };

    const start = (e) => {
    isDown = true;
    slider.addClass('active');
    startX = e.pageX || e.originalEvent.touches[0].pageX - slider.offset().left;
    scrollLeft = slider.scrollLeft();
    };

    const move = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.originalEvent.touches[0].pageX - slider.offset().left;
    const dist = (x - startX);
    slider.scrollLeft(scrollLeft - dist);
    };

    (() => {
    slider.on('mousedown', start);
    slider.on('touchstart', start);

    slider.on('mousemove', move);
    slider.on('touchmove', move);

    slider.on('mouseleave', end);
    slider.on('mouseup', end);
    slider.on('touchend', end);
    })();
// load more
    $("#readmoredes").click(function(){
        $('#readmoredes').css('display', 'none');
        $('#more').css('display', 'block');
    });
    $('.download-btn').click(function(){
        
        $('.download-btn').addClass('button--loading');
        setTimeout(()=> {
            $('.download-btn').removeClass('button--loading')
            $('.pop-up-down').css('display', 'block');
            $('body').css('overflow', 'hidden')
        }, 7000)
    });
    $('.pop-up-down span').click(function() {
        $('.pop-up-down').css('display', 'none');
        $('body').css('overflow', 'visible')
    })
    $("#readmorefea").click(function(){
        $('#readmorefea').css('display', 'none');
        $('#morefea').css('display', 'block');
    });

    $(".product .product-control .control .btnUpload").click(function(e){
        e.preventDefault();
    })

    $(".feature .head a").click(function(e){
        e.preventDefault();
    })

    $(".extend  .app-extend .item .ci .inf a").click(function(e){
        e.preventDefault();
    })

    // extend

    $('.extend .app-extend .owl-carousel').owlCarousel({
        loop:false,
        margin:0,
        items: 1,
        autoplay:true,
        autoplayTimeout:7000
    })
});