jQuery(function($){
    if ($('body').hasClass('home')) {
        console.log('HOME')
        $('#home-link').addClass('active')
    } else if ($('body').hasClass('services')) {
        $('#services-link').addClass('active')
    }
})