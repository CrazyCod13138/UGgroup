// add class when scrolling (for navigation)
window.onscroll = function showTopnav() {

    var header = document.querySelector('.topnav');

    if(window.pageYOffset > 100){
        header.classList.add('topnav_fixed');
    } else {
        header.classList.remove('topnav_fixed');
    }
}
// mobile site block 
window.mobscroll = function scroll() {

    var mobile = document.querySelectorAll('.phone');

    if(window.pageYOffset > 10){
        mobile.classList.add('scroll_phone');
    } else {
        mobile.classList.remove('scroll_phone');
    }
}
// Block gallery (jquery)
$(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled: true
    }
});

// Кнопка вверх(button back to top)
function backToTop(){
let button = $('.back-to-top');

$(window).on('scroll', () => {
    if ($(this).scrollTop() >= 50) {
    button.fadeIn();
    } else {
    button.fadeOut();
    }
});

button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 1000);
 })
}   

backToTop();

// // Адаптивное меню добавляем класс (responsive navigation add a class when clicking)
$('.mobile_tab').hide();

$('#burg').on('click', function(){
    $('.mobile_tab').slideToggle(800);
})
