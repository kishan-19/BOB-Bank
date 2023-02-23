
burger = document.querySelector('.burger')
itam = document.querySelector('.itam')
div = document.querySelector('.div_itam')
nav = document.querySelector('.nav_logo')
navBtn = document.querySelector('.nav_button')

burger.addEventListener('click', function () {
    div.classList.toggle('v-class-resp');
    nav.classList.toggle('v-class-resp');
    navBtn.classList.toggle('v-class-resp');
    itam.classList.toggle('h-nav-resp');

})
info = document.querySelector('.body-more-info')
a = document.querySelector('.responsiv')
b = document.querySelector('.contain-information-pepole')

info.addEventListener('click', function () {
    a.classList.toggle('v-info-resp');
    b.classList.toggle('h-info-resp');
})