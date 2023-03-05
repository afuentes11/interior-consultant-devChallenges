$('.active, .label').click( ()=>{
    window.scrollTo(0, 0);
    $('.body').toggleClass('body-burger-mode');
    $('.nav').toggleClass('nav-burger-mode');
    $('.logo').toggleClass('logo-burger-mode');
    $('#burger').toggleClass('checkbox');
});
