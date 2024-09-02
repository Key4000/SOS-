$(document).ready(function(){ 
    $('.hero__slider').slick({ 
        speed: 300, 
        infinite: true, 
        dots:true, 
        arrows:true,  
        slidesToShow: 1, 
        slidesToScroll: 1, 
        infinite: false 
    }); 
      
}); 

function clicked(){
   subList = document.getElementsByClassName('sub-lang-menu__list')[0];
   menuLink = document.getElementsByClassName('lang-menu__link')[0];
   menuSvg = document.getElementsByClassName('svg-lang-menu')[0];
   menuPath = document.getElementsByClassName('path-lang-menu')[0];
   
   
   
   if(subList.className === 'sub-lang-menu__list unclicked'){
       subList.className = 'sub-lang-menu__list clicked';
       menuSvg.style.cssText = "transform: rotate(180deg); transition: all 1s ease;";
       menuPath.style.cssText = "transition: all 1s ease; stroke: #ffb548;";
       menuLink.style.cssText = "transition: all 1s ease; color: #ffb548;";
       return;
   };
  
  
   if(subList.className === 'sub-lang-menu__list clicked'){
       subList.className = 'sub-lang-menu__list unclicked' 
       menuSvg.style.cssText = "transform: rotate(0); transition: all 1s ease;";
       menuPath.style.cssText = "transition: all 1s ease; stroke: white;";
       menuLink.style.cssText = "transition: all 1s ease; color: white;";
       return;
       }; 
  
 };
   
$('.header__burger').click(function(event){  
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
});

new Swiper('.two__slider-cards', {
                effect: "cards",
            cardsEffect: {
                grabCursor: !0,
                perSlideRotate: 0,
                perSlideOffset: 10,
                rotate: !1
            },
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev"
            }, 
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
            });


$(document).ready(function() {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 130);
    return false;
  });
});
 

function clickAcc(elHeader){
  elBodies = document.getElementsByClassName('show');
  Circles = document.getElementsByClassName('circle');
  
for (var i = 0; i < elBodies.length; i++) {
    Circles[i].className = "accordion__header two-title"; 
    elBodies[i].classList.remove("show");
}
 elHeader.className = 'accordion__header two-title circle';
 elPar = elHeader.parentNode.parentNode;
 elBody = elPar.querySelector('.accordion__body');
  
  setTimeout(() => {
  elBody.classList.toggle('show')}, 300);
}

  
/*
console.log(this.parentNode. parentNode.parentNode.parentNode.className)
     
     
     
     email.onfocus = function() {
    const windowInnerHeight =     window.innerHeight + "px"; 
 Img = document.getElementsByClassName('six__img-box')
 Img.classList = "height: 10%;"
  };

 */


    
