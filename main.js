let searchform = document.querySelector(".form-search");


document.querySelector("#search-btn").onclick = () => {
    searchform.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}


let shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-btn').onclick = () => {
    shoppingcart.classList.toggle('active');
   searchform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}


let loginform = document.querySelector('.login-form');


document.querySelector('#login-btn').onclick = () => {
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');t
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
  
    searchform.classList.remove('active');
}


window.onscroll = () =>
{
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
loop:true,
  spaceBetween: 20,
 autoplay:
 {
  delay:3000,
  disableOnIteraction: false,
 },
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 3,
    
    },
    1020: {
      slidesPerView: 4,
     
    },
  },
});


var swiper = new Swiper(".review-slider", {
  loop:true,
    spaceBetween: 20,
   autoplay:
   {
    delay:2500,
    disableOnIteraction: false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView:1,
      
      },
      1020: {
        slidesPerView: 1,
       
      },
    },
  });