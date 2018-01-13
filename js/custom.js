jQuery(document).ready(function($){

	$( "#tabs" ).tabs({
	  active: 0
	});

	//prallax
	$window = $(window);
	$('*[data-type="background"]').each(function(){
        var $bgobj = $(this); // Назначаем объект
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Собираем значение координат фона вместе
            var coords = '550% '+ yPos + 'px';
            // Смещаем фон
            $bgobj.css({ backgroundPosition: coords });
        });
    });

    //width

    var contW = $('.contacts-container').width();
    $('.contacts-container .background').width(contW);

    $( window ).resize(function() {
	  var contWr = $('.contacts-container').width();
      $('.contacts-container .background').width(contWr);
	});

    AOS.init({
      duration: 1200,
    })


})
