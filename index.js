/*** ===================================

Creating a Responsive Navbar Component

======================================== ***/

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});
/*** ====================================== 
 
   Creating A Portfolio Tabbed Component

=========================================== ***/

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;

  if (!p_btn_clicked.classList.contains("p-btn")) return;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  //   To Find The Number In Data Attribute

  const btn_num = p_btn_clicked.dataset.btnNum;

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
});

/*** =================================== 
 
            Swiper Js START

======================================== ***/

new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,

  autoplay: {
    Delay: 2500,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*** ===================================

      Media Queries Of Swiper JS

======================================== ***/

const myJsmedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
};

const widthSize = window.matchMedia("(max-width: 780px)");

myJsmedia(widthSize);

widthSize.addEventListener("change", myJsmedia);

/*** =================================== 
 
        Scroll To Top Button START

======================================== ***/

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = ` <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon> `;

footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);

/*** =================================== 
 
        For Smooth Checking START

======================================== ***/

const portfolioSec = document.querySelector(".section-portfolio");
const contactSec = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", () => {
  portfolioSec.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
  e.preventDefault();
  contactSec.scrollIntoView({ behavior: "smooth" });
});

/*** =================================== 
 
      Animated Number Counter START

======================================== ***/

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    const initialNum = parseInt(curElem.innerText);

    const increamentNumber = Math.trunc(targetNumber / speed);

    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + increamentNumber}+`;
      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
});
