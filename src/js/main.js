const arrRightLarge = document.querySelector('.poto-gallery__arrowright-large')
const arrLeftLarge = document.querySelector('.poto-gallery__arrowleft-large')
const arrRightMedium = document.querySelector('.poto-gallery__arrowright-medium')
const arrLeftMedium = document.querySelector('.poto-gallery__arrowleft-medium')
const arrRightSmall = document.querySelector('.poto-gallery__arrowright-small')
const arrLeftSmall = document.querySelector('.poto-gallery__arrowleft-small')
const slidesLarge = document.querySelectorAll('.photo-gallery__slide-large')
const slidesMedium = document.querySelectorAll('.photo-gallery__slide-medium')
const slidesSmall = document.querySelectorAll('.photo-gallery__slide-small')

let slideNumber

function initVisibleSlide(arrSlides, n) {
    for (let i=0; i < arrSlides.length; i++) {
        arrSlides[i].classList.remove('photo-gallery__slide-visible')
    }
    slideNumber = n
    arrSlides[slideNumber].classList.add('photo-gallery__slide-visible')
}

function slideRight(arrSlides) {
    slideNumber++
    if (slideNumber >= arrSlides.length) {
        arrSlides[slideNumber - 1].classList.remove('photo-gallery__slide-visible')
        slideNumber = 0
        arrSlides[slideNumber].classList.add('photo-gallery__slide-visible')
    } else {
        arrSlides[slideNumber - 1].classList.remove('photo-gallery__slide-visible')
        arrSlides[slideNumber].classList.add('photo-gallery__slide-visible')
    }
}

function slideLeft(arrSlides) {
    if (slideNumber <= 0) {
        arrSlides[slideNumber].classList.remove('photo-gallery__slide-visible')
        slideNumber = arrSlides.length - 1
        arrSlides[slideNumber].classList.add('photo-gallery__slide-visible')
    } else {
        arrSlides[slideNumber].classList.remove('photo-gallery__slide-visible')
        slideNumber--
        arrSlides[slideNumber].classList.add('photo-gallery__slide-visible')
    }
}

initVisibleSlide(slidesLarge, 0)

arrRightLarge.addEventListener('click', function () {
    slideRight(slidesLarge)
})

arrLeftLarge.addEventListener('click', function () {
    slideLeft(slidesLarge)
})

initVisibleSlide(slidesMedium, 0)

arrRightMedium.addEventListener('click', function () {
    slideRight(slidesMedium)
})

arrLeftMedium.addEventListener('click', function () {
    slideLeft(slidesMedium)
})

initVisibleSlide(slidesSmall, 0)

arrRightSmall.addEventListener('click', function () {
    slideRight(slidesSmall)
})

arrLeftSmall.addEventListener('click', function () {
    slideLeft(slidesSmall)
})

const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuBtn = document.querySelector('.mobile-menu__button')
const mobileMenuNav = document.querySelector('.mobile-menu__nav')

mobileMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('mobile-menu-active')
    mobileMenuBtn.classList.toggle('mobile-menu__button-active')
    mobileMenuNav.classList.toggle('mobile-menu__nav-active')
})

