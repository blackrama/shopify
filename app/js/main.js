document.addEventListener("DOMContentLoaded", function(event) {
const header_salebox = document.querySelector('.header-salebox');
  if(header_salebox !== null) {
    header_salebox.querySelector('.header-salebox_close').onclick = (e) =>{
      e.preventDefault();
      header_salebox.classList.remove('active');
    }
    header_salebox.onclick= (e)=>{
      if(e.target.classList.contains('header-salebox')) {
        e.target.classList.remove('active');
    }
    };
  }

const header_checkout = document.querySelector('#header_checkout');
if(header_checkout !== null) {
  header_checkout.onclick = (e)=> {
    e.preventDefault();
    header_salebox.classList.add('active');
  }
}
const header_nav = document.querySelector('#header_nav');
  if(header_nav !==null) {
    header_nav.onclick= (e)=>{
      if(e.target.classList.contains('header-nav')) {
        e.target.classList.remove('active');
    }
    };
    header_nav.querySelector('.header-nav_close').onclick = (e)=>{
      e.preventDefault();
      header_nav.classList.remove('active');
    }
  }
const header_nav_toggle = document.querySelector('#header_nav_toggle');
if(header_nav_toggle !== null) {
  header_nav_toggle.onclick = (e)=> {
    e.preventDefault();
    if(header_nav !== null) {
      header_nav.classList.add('active');
    }
  }
}




  console.log("%cDOM loaded, @blackrama13", "color: #3e5a86; font-size:10px;background:#020819;padding:10px;border-radius:5px;");
});

$( document ).ready(function() {
  const product_slider_top = $('#product_slider_top');
    if(product_slider_top.length) {
      product_slider_top.slick();
    }
    const product_slider_bottom = $('#product_slider_bottom');
    if(product_slider_bottom.length) {
      product_slider_bottom.slick({
        slidesToShow: 3,
        arrows: false,
        infinite:false
      });
    }


});



