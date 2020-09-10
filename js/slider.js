jQuery(document).ready(function($){

    $('#model-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px',
        arrows: false,
      });

      // console.log($(".popover"));
      // $(".popover").click(function() {
      //   console.log('Clicked!');
      // });
});