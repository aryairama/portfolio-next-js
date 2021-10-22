export const configSkillsCarousel = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  speed: 500,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
  cssEase: 'linear',
  swipeToSlide: true,
  dotsClass: 'slick-dots md:!-bottom-8 !-bottom-16',
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2.3,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2.6,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 3.3,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3.9,
      },
    },
  ],
};
