import './sass/main.scss';
import './assets/sprite.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

  // import Swiper JS
  import Swiper from 'swiper';
  import 'swiper/scss';


  const verticalSwiper = new Swiper('.swiper', {
    direction: 'vertical',
    slidesPerView: 5,
    spaceBetween: 50,
    freeMode: true,
    effect: 'fade',
    centeredSlides: true,
    initialSlide: 6,
    autoHeight: true,
  

    breakpoints: {
      320: {
        spaceBetween: 40,
      },

      960: {
        spaceBetween: 50,
      },
      
    },
  });

  const prev = document.querySelector(".program-swiper-button-prev");
  const next = document.querySelector(".program-swiper-button-next");

  prev.addEventListener('click', ()=>{
    verticalSwiper.slidePrev()
  });

  next.addEventListener('click', ()=>{
    verticalSwiper.slideNext()
});




const horizentalSwiper = new Swiper(".swiper-horiz", {
  slidesPerView: 1,
  spaceBetween: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
  freeMode: true,

  // autoHeight: true,
  // containerModifierClass: '.swiper-horiz',
  // wrapperClass: '.swiper-wrapper-horiz',
  // slideClass: '.swiper-slide-horiz',
  // direction: 'horizontal',

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 22,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 25,
    },
  },
});


document.querySelector(".reviews-swiper-button-prev").addEventListener('click', ()=>{
  horizentalSwiper.slidePrev()
});

document.querySelector(".reviews-swiper-button-next").addEventListener('click', ()=>{
  horizentalSwiper.slideNext()
});



// ALL ANIMATIONS STAFF >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const headerTimeline = gsap.timeline({ scrollTrigger: {trigger: ".nav"}});

headerTimeline
  .fromTo(".header h1", {scale:0, opacity: 0},{scale:1, opacity: 1, duration: 1.5, ease: "power4.out",})
  .fromTo(".header p.paragraph-sm", {y: -200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out"}, "<+1")
  .fromTo(".header p.paragraph-md", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out"}, "<")
  .fromTo(".header .link",{y: 200},{y: 0, duration: 1.5, ease: "power4.out",}, "<+.5")
  .fromTo(".header__picture--1 img",{yPercent: 130},{yPercent: 0, duration: 1.5, ease: "power4.out",}, "<+.3")
  .fromTo(".header__picture--2 img",{yPercent: -130},{yPercent: 0, duration: 1.5, ease: "power4.out",}, "<+.5")
  .fromTo(".nav", {opacity: 0},{opacity: 1, duration: 1.5, ease: "power4.out",})


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

gsap.fromTo(".about__picture--2 img", 
    {xPercent: -330}, 
    {xPercent: 0, duration: 2.5, ease: "power4.out",
    scrollTrigger: {trigger: ".about",toggleActions: "restart none none reverse"}});


gsap.fromTo('.about__content__text', 
    {yPercent: 100, opacity: 0}, 
    {yPercent: 0, opacity: 1 , duration: 2.5, ease: "power4.out",
    scrollTrigger: { trigger: ".about", toggleActions: "restart none none reverse"}});


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const aboutTimeline = gsap.timeline({ scrollTrigger: {trigger: ".features", toggleActions: "restart none none reverse",  start: "top center"}});

aboutTimeline
  .fromTo(".features h2", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 2, ease: "power4.out",})
  .fromTo(".features .sub-heading",{y: 200, opacity: 0},{y: 0, opacity: 1, duration: 2, stagger: .15,ease: "power4.out",},"<+.4")
  .fromTo(".features .divider",{y: 200, opacity: 0},{y: 0, opacity: 1, duration: 2, stagger: .15, ease: "power4.out",}, "<")
  .fromTo(".features .text", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 2, stagger: .15, ease: "power4.out",}, "<")
  .fromTo(".features__picture img", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 2, ease: "power4.out",}, "<")
  .fromTo(".features__picture span", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 2, ease: "power4.out",}, "<+.15")
  .fromTo(".features__picture p", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 2, ease: "power4.out",}, "<+.15")


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const learnTimeline = gsap.timeline({ scrollTrigger: {trigger: ".learn", toggleActions: "restart none none reverse",  start: "top center"}});

learnTimeline
  .fromTo(".learn h2", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out",})
  .fromTo(".learn .link",{y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out",},"<+.4")
  .fromTo(".learn .photo img",{y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out",}, "<")
  .fromTo(".learn__text__list svg", { opacity: 0},{ opacity: 1, duration: 1.5, stagger: .15, ease: "power4.out"}, "<+.75")
  .fromTo(".learn__text__list p", { opacity: 0},{ opacity: 1, duration: 2, stagger: .15, ease: "power4.out",}, "<+.75")

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

gsap.fromTo(".growth__cards", {opacity: .7, y: 300}, 
                              {opacity:1, y:0, duration: 2, ease: "power4.out" , 
                              scrollTrigger: {trigger: ".growth", toggleActions: "restart none none reverse", start: "top center"}})



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const programTimeline = gsap.timeline({ scrollTrigger: {trigger: ".program", toggleActions: "restart none none reverse",  start: "top center"}});

programTimeline
  .fromTo(".program__collection .cardd:nth-child(2n+2)", {yPercent: 330}, {yPercent: 0, duration: 2.5, ease: "power4.out", stagger:.2,})
  .fromTo(".program__collection .cardd:nth-child(2n+1)", {yPercent: 330}, {yPercent: 0, duration: 2.5, ease: "power4.out", stagger:.2,}, "<+.3");


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const subscriptionTimeline = gsap.timeline({ scrollTrigger: {trigger: ".subscription", toggleActions: "restart none none reverse",  start: "top center"}});

subscriptionTimeline
  .fromTo(".subscription h2", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out",})
  .fromTo(".subscription .separator",{y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out",},"<+.15")
  .fromTo(".subscription p", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, stagger: .15, ease: "power4.out"}, "<+.15")
  .fromTo(".subscription .sub-card",{y: 200, opacity: 0},{y: 0, opacity: 1, duration: 2, ease: "power4.out",}, "<")


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


ScrollTrigger.create({
  trigger: ".reviews",
  onEnter: function(){ 
    horizentalSwiper.slideTo(horizentalSwiper.activeIndex + 5, 2000)
    setTimeout(()=>{
      horizentalSwiper.slideTo(horizentalSwiper.activeIndex + 5, 2000)
    },2500)
  },
  onLeaveBack:function(){ 
    horizentalSwiper.slideTo(0)
  }
});


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const whoUsTimeline = gsap.timeline({ scrollTrigger: {trigger: ".who-us", toggleActions: "restart none none reverse",  start: "top center"}});

whoUsTimeline
  .fromTo(".who-us h2", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out",})
  .fromTo(".who-us .separator",{y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out",},"<+.15")
  .fromTo(".who-us p", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out"}, "<+.15")
  .fromTo(".who-us .link", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out"}, "<+.15")
  .fromTo(".who-us .chat__boy",{y: 400, opacity: 0},{y: 0, opacity: 1, duration: 1, ease: "power4.out",}, "<")
  .fromTo(".who-us .chat__girl",{y: 400, opacity: 0},{y: 0, opacity: 1, duration: 1, ease: "power4.out",})


  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const ideaTimeline = gsap.timeline({ scrollTrigger: {trigger: ".idea", toggleActions: "restart none none reverse",  start: "top center"}});

ideaTimeline
  .fromTo(".idea__top h2", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out",})
  .fromTo(".idea__top .separator",{y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out",},"<+.15")
  .fromTo(".idea__top p", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5,  ease: "power4.out"}, "<+.15")
  .fromTo(".idea__top__photo img", {x: 300, opacity: 0},{x: 0, opacity: 1, duration: 1.5, ease: "power4.out"}, "<+.3")
  
  .fromTo(".idea__bottom__gallery img", {scale: 0, opacity: 0},{scale: 1, opacity: 1, duration: 1.5, stagger:.5, ease: "power4.out",}, "<+1")

  .fromTo(".idea__bottom__text h2", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 2, ease: "power4.out",}, "<+1")
  .fromTo(".idea__bottom__text .separator",{y: 200, opacity: 0},{y: 0, opacity: 1, duration: 2, ease: "power4.out",},"<+.15")
  .fromTo(".idea__bottom__text p", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, stagger: .3, ease: "power4.out"}, "<+.15")


  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  const costTimeline = gsap.timeline({ scrollTrigger: {trigger: ".cost", toggleActions: "restart none none reverse",  start: "top center"}});

costTimeline
  .fromTo(".cost h2", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out",})
  .fromTo(".cost .separator",{y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out",},"<+.15")
  .fromTo(".cost p", {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.5, ease: "power4.out"}, "<+.15")
  .fromTo(".cost .sub-card",{yPercent: 150},{yPercent: 0, duration: 1.5, ease: "power4.out",}, "<+.5")
