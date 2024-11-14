
const multipleItemCarousel = document.querySelector
('#carouselExamplel')


if(window.matchMedia("(min-width:576px)").matches){
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false,
      })
    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $(".carousel-item").width();


var scrolPosition = 0;

$('.carousel-control-next').on('click',function(){
    if(scrolPosition < (carouselWidth - (cardWidth + 4))){
        console.log('next');
        scrolPosition = scrolPosition + cardWidth;
        $('.carousel-inner').animate({scrolLeft : scrolPosition},
            600);
    }
});

$('.carousel-control-prev').on('click',function(){
    if(scrolPosition > 0){
        console.log('prev');
        scrolPosition = scrolPosition - cardWidth;
        $('.carousel-inner').animate({scrolLeft : scrolPosition},
            600);
    }
});

}else{
    $(multipleItemCarousel).addClass('slide');
}


