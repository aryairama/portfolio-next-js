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
  dotsClass: 'slick-dots text-start',
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1.8,
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
