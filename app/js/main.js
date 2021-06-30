$(function () {
  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "17px",
    readOnly: true,
    normalFill: "#A0A0A0",
    ratedFill: "#ffc000",
  });

  $(".weekly__slider").slick({
    prevArrow:
      '<button class="slick-arrow slick-prev"> <img src="images/content/prev.png" alt=""></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"> <img src="images/content/next.png" alt=""></button>',
  });

  if ($(".newest__cards").length) {
    var mixer = mixitup(".newest__cards");
  }

  $(".feed__slider").slick({
    slidesToShow: 3,
    prevArrow:
      '<button class="slick-arrow slick-prev"> <img src="images/content/prev.png" alt=""></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"> <img src="images/content/next.png" alt=""></button>',
  });
});
