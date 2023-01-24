$('.active').on('click', ()=>{
    window.scrollTo(0, 0);
    $('.body').toggleClass('body-burger-mode');
    $('.nav').toggleClass('nav-burger-mode');
    $('.logo').toggleClass('logo-burger-mode');
    console.log('hola')
});
