    $(document).ready(function(){
    var rowShow = 'row-show';
    var answerShow = 'answer-show';

      $('.myslider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear'

      });

       $(".slick-prev").on('click', function(event){
	 		$(this).css("background","url('images/right-arrow.png') no-repeat");
	 		$(this).css("background-size","contain");

		});

       $(".slick-next").on('click', function(event){
	 		$(this).css("background","url('images/right-arrow.png') no-repeat");
	 		$(this).css("background-size","contain");
		});

 
  $('.a-container').magnificPopup({
  		delegate: 'a', // child items selector, by clicking on it popup will open
  		type: 'image',
  		gallery: {
      	enabled: true
    	},
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('div') ? openerElement : openerElement.find('div');
    }
  }
});

$('.show-text').on('click', function (event) {

	$('.row-white').removeClass("animated fadeIn");
	$('.row-white').removeClass(rowShow);
	$('.row-white').addClass("row-hide");
	if($(this).parent('.col').parent('.row').find($('.'+answerShow)).length === 0)
	{

		$('.row-white').find($('.arrow-rotate')).removeClass('arrow-rotate');
		$('.row-white').find($('.text-answer')).removeClass(answerShow);
    	$(this).parent('.col').parent('.row').addClass(rowShow);
    	$(this).parent('.col').parent('.row').find($('.text-answer')).addClass(answerShow);
    	$(this).parent('.col').parent('.row').find($('.row-white-arrow')).addClass('arrow-rotate');
    }
    else
    {	

    	$(this).parent('.col').parent('.row').find($('.text-answer')).removeClass(answerShow);
    	$(this).parent('.col').parent('.row').find($('.arrow-rotate')).removeClass('arrow-rotate');
    }
});



$(".menu").on('click', function(event){

});



var bar1 = {"transform": "rotate(0deg)","top": "0px","left": "-1px", "height" : "4px", "width" : "30px"};
var bar3 = {"transform": "rotate(0deg)","right": "0", "height" : "4px", "width" : "30px", "top": "14.5px" };
var bar4 = {"display": "block", "height" : "4px", "width" : "30px", "top":"7px"};


var bar1rc = {"transform": "rotate(45deg)","top": "-4px"};
var bar3rc = {"transform": "rotate(-45deg)", "top": "17px" };
var bar2rc = {"transform": "rotate(-45deg)"};
var bar4rc = {"display": "none", "width" : "5px", "height" : "1px", "top": "-4px" };

    
    


/*
.bar1-rc{
    transform: rotate(45deg);
    height: 1px;
    width: 22px;
    top: -5px;
}

.bar3-rc{
    transform: rotate(-45deg);
    height: 1px;
    width: 22px;
    left: -1px;

}

.bar2-rc{
    transform: rotate(-45deg);
    height: 3px;
    width: 22px;

}

.bar4-rc{
    opacity: 0;
    width: 5px;
    height: 1px;


    background-color: transparent;
}
*/

var $div = $(".menu");
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.attributeName === "class") {
      var attributeValue = $(mutation.target).prop(mutation.attributeName);
          if($('#checkbox3').attr('checked')) {
      $('#checkbox3').attr('checked', false);
      $('.bar1').css(bar1);
      $('.bar3').css(bar3);
      $('.bar4').css(bar4);
    }
    else {

      $('#checkbox3').attr('checked', true);
      $('.bar1').css(bar1rc);
      $('.bar3').css(bar3rc);
      $('.bar4').css(bar4rc);      

    }
    }
  });
});
observer.observe($div[0], {
  attributes: true
});










$('.section-hide').waypoint({
    handler: function() {
        $(this.element).removeClass('section-hide');
        $(this.element).find('div').addClass("animated fadeInUp")
    },
   	offset: '75%'
});

$('.section-partners').waypoint({
    handler: function() {
    	$('.button-theme-logo').addClass('button-theme-logo-black');
    	$('.menu').find('span').css('background','black');
    	$('.hamburger').find('span').css('background','black');
    	$('.container').find('.text').addClass('text-black');
    	$('.header').find('.text-logo').addClass('text-black');
    	$('.header').addClass('header-change');
    }
});


$('.section-features').waypoint({
    handler: function() {

    	$('.button-theme-logo').removeClass('button-theme-logo-black');
    	$('.menu').find('span').css('background','white');
    	$('.hamburger').find('span').css('background','white');
    	$('.container').find('.text').removeClass('text-black');
    	$('.header').find('.text-logo').removeClass('text-black');
    	$('.header').removeClass('header-change');
    },
    offset: '80%'

});


$('.section-counters').waypoint({
    handler: function() {
$('.timer1').countTo({
    from: 0,
    to: 28,
    speed: 5000,
    refreshInterval: 50,
    formatter: function (value, options) {
      return value.toFixed(options.decimals);
    },
    onUpdate: function (value) {
      console.debug(this);
    },
    onComplete: function (value) {
      console.debug(this);
    }
  });

    $('.timer2').countTo({
    from: 0,
    to: 57,
    speed: 5000,
    refreshInterval: 50,
    formatter: function (value, options) {
      return value.toFixed(options.decimals);
    },
    onUpdate: function (value) {
      console.debug(this);
    },
    onComplete: function (value) {
      console.debug(this);
    }
  });

      $('.timer3').countTo({
    from: 0,
    to: 34203,
    speed: 5000,
    refreshInterval: 50,
    formatter: function (value, options) {
      return value.toFixed(options.decimals);
    },
    onUpdate: function (value) {
      console.debug(this);
    },
    onComplete: function (value) {
      console.debug(this);
    }
  });
    },
   	offset: '65%'
});





 $('.menu-link').bigSlide({
	side: 'right'	
 });






/*
function myFunction(x) {
  if (x.matches) { // If media query matches

    $('.section-slide').addClass('section-slide-768');
    $('.section-slide').find('button').css('display','none');

  } else {
   	$('.section-slide').find('button').css('display','block');
  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
*/




$(".send-mail").on('click', function(event){

var msg   = JSON.stringify($('input')[1].value+$('input')[2].value+$('input')[3].value);

$.post(
  'http://127.0.0.1:3000',
  {
    FirstName: $('.form').find('input')[0].value,
    LastName: $('.form').find('input')[1].value,
    Email: $('.form').find('input')[2].value
  }
);

});



/*
function m(y) {
  if (y.matches) { // If media query matches
    $('.section-design').find('.row').addClass('row-wrap');
    $('.section-design').addClass('section-design-980');
    $('.col-size-phone').addClass('phone-flex-order');
	
 
 
  } else {
    
  }
}

var y = window.matchMedia("(max-width: 980px)")
m(y) // Call listener function at run time
y.addListener(m) // Attach listener function on state changes





function my(z) {
  if (z.matches) { // If media query matches

    $('.section-apps').addClass('section-apps-680');
    $('.section-apps').find('.block').addClass('section-apps-block-680');
    $('.section-design').addClass('section-design-680');
    $('.section-features').find('.row-section-features').addClass('row-sec-size-680');
    $('.section-features').addClass('section-features-680');
	$('.section-features').find('.block').css('width','80%');
 	$('.slick-arrow').css('display','none');
 	$('.slick-dots').css('display','none');
  } else {
   
  }
}

var z = window.matchMedia("(max-width: 680px)");
my(z); // Call listener function at run time
z.addListener(my); // Attach listener function on state changes

*/

    });