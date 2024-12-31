/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

// animation show image certificate
const spanCertificate = document.querySelectorAll('.icon-eye');
const overlayCertificate = document.querySelectorAll('.overlay-image-certificate');
const fieldOverlayCertificate = document.querySelectorAll('.field-overlay-certificate')
const buttonCloseOverlay = document.querySelectorAll('.overlay-image-certificate button');
const slideBeforeCertificate = document.querySelectorAll('.slide-before-image-certificate')
const slideAfterCertificate = document.querySelectorAll('.slide-after-image-certificate');
const imageCertificate = document.querySelectorAll('.img-certificate');



spanCertificate.forEach(function (e, i) {
    e.addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(1)';
    });
})

buttonCloseOverlay.forEach(function (e, i) {
    e.addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(0)';
    });
})

for (let i = 0; i < slideAfterCertificate.length; i++) {
    slideAfterCertificate[i].addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(0)';
        overlayCertificate[i + 1].style.transform = 'scale(1)';
    })
}

for (let i = 0; i < slideBeforeCertificate.length; i++) {
    slideBeforeCertificate[i].addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(0)';
        overlayCertificate[i - 1].style.transform = 'scale(1)';
    })
}

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*=============== SWIPER JS GALLERY ===============*/
let swiperCards = new Swiper(".gallery1-cards", {
    loop: true,
    loopedSlides: 5,
    cssMode: true,
    effect: 'fade',
  });
    
  let swiperThumbs = new Swiper(".gallery1-thumbs", {
    loop: true,
    loopedSlides: 5,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
  
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  swiperThumbs.controller.control = swiperCards;

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTopUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== LIGHT DARK ====================*/
const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');

lightMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-active');
    darkMode.classList.toggle("active");
    lightMode.classList.toggle("active");
});

darkMode.addEventListener('click', () => {
    document.body.classList.remove("dark-mode-active");
    darkMode.classList.remove("active");
    lightMode.classList.remove("active");
});