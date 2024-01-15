$(document).ready(function () {
  let isDown = false;
  let startX;
  let scrollLeft;
  const slider = $(".items");

  const end = () => {
    isDown = false;
    slider.removeClass("active");
  };

  const start = (e) => {
    isDown = true;
    slider.addClass("active");
    startX = e.pageX || e.originalEvent.touches[0].pageX - slider.offset().left;
    scrollLeft = slider.scrollLeft();
  };

  const move = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x =
      e.pageX || e.originalEvent.touches[0].pageX - slider.offset().left;
    const dist = x - startX;
    slider.scrollLeft(scrollLeft - dist);
  };

  slider.on("mousedown", start);
  slider.on("touchstart", start);

  slider.on("mousemove", move);
  slider.on("touchmove", move);

  slider.on("mouseleave", end);
  slider.on("mouseup", end);
  slider.on("touchend", end);

  // owlcarousel slider
  $(".slider-intro .owl-carousel").owlCarousel({
    loop: true,
    margin: 12,
  });
  $(".slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 12,
    //autoplay: true,
    autoplayTimeout: 5000,
  });

  //
  $(".data-secury .detail").click((e) => {
    e.preventDefault();
  });

  $(".review .btn-download").click((e) => {
    $(".app-inf").addClass("active");
    $(".download").addClass("active");
    $(".download a").text("Đang tải xuống");
    setTimeout(() => {
      $(".app-inf").removeClass("active");
      $(".download").removeClass("active");
      $(".download a").text("Cài đặt");
      $(".pop-up-down").css("display", "block");
      $("body").css("overflow", "hidden");
    }, 7000);
  });
  $(".pop-up-down span").click(function () {
    $(".pop-up-down").css("display", "none");
    $("body").css("overflow", "visible");
  });


});
