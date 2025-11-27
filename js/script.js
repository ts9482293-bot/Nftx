const search = document.querySelector(".search-icon");
const searchfield = document.querySelector(".search-result");

let close = true;

search.addEventListener("click", (e)=>{
    e.preventDefault();
   if(close==true){
    close=false;
    searchfield.style.display = "block";
   } else{
       close=true;
       searchfield.style.display = "none";
   }
});

const closebtn =document.querySelector(".close-btn");
const navcollapes = document.querySelector(".nav-collapes");

closebtn.addEventListener("click", ()=>{
    if(close == true){
        close=false;
        navcollapes.style.right = "0%";
        closebtn.classList.add("open");
    }else{
        close = true;
        navcollapes.style.right = "-100%";
        closebtn.classList.remove("open");
    }
});

const swiper = new Swiper(".swiper",{
      slidesPerView: 2,
      spaceBetween: 30,
      loop:true,
     navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
 var swiper2 = new Swiper(".myswiper", {
      slidesPerView:4,
      loop:true,
      autoplay: {
        delay: 200,
        disableOnInteraction: false,
      },
    });
    const swiper3 = new Swiper(".artisswiper",{
      slidesPerView: 3,
      spaceBetween: 30,
      loop:true,
     navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
