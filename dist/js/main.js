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




  console.log("%cDOM loaded, @blackrama13", "color: #3e5a86; font-size:10px;background:#020819;padding:10px;border-radius:5px;");
});



