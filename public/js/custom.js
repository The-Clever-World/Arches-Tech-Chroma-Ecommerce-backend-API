
//BANNER SLIDER
$(document).ready(function () {
  var owl = $('.banner-slider');
  owl.owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
  });
});



//NEW TOP Categories
var owl = $('.top-categories-slider-new');
owl.owlCarousel({
  loop: true,
  margin: 0,
  autoplay: false,
  items: 6,
  dots: false,
  nav: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 2
    },
    440: {
      items: 2
    },
    500: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 3
    },
    1000: {
      items: 6
    },
    1200: {
      items: 6
    }
  }
});

//TOP Categories
var owl = $('.top-categories-slider');
owl.owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  items: 4,
  dots: false,
  nav: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 2
    },
    440: {
      items: 2
    },
    500: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 3
    },
    1000: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});



//HOME OFFER SECTION
var owl = $('.home-offer-slider');
owl.owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  items: 3,
  dots: false,
  nav: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 2
    },
    440: {
      items: 2
    },
    500: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 3
    },
    1000: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
});


//HOME PRODUCT SLIDER
var owl = $('.home-product-contnet-left-slider');
owl.owlCarousel({
  loop: true,
  margin: 0,
  autoplay: false,
  items: 1,
  dots: false,
  nav: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    440: {
      items: 1
    },
    500: {
      items: 1
    },
    600: {
      items: 1
    },
    800: {
      items: 1
    },
    1000: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
});





//HOME PRODUCT OWL SLIDER
var owl = $('.home-product-owl-sliders');
owl.owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  items: 1,
  dots: false,
  nav: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 2
    },
    440: {
      items: 2
    },
    500: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 3
    },
    1000: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});


//HOME PRODUCT OWL SLIDER RIGHT
var owl = $('.home-product-contnet-right-slider');
owl.owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  items: 1,
  dots: false,
  nav: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    440: {
      items: 1
    },
    500: {
      items: 2
    },
    600: {
      items: 2
    },
    800: {
      items: 2
    },
    1000: {
      items: 2
    },
    1200: {
      items: 2
    }
  }
});

/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $('.header').addClass('fixed-header');
    $('header div').addClass('visible-title');
  }
  else {
    $('header').removeClass('fixed-header');
    $('header div').removeClass('visible-title');
  }
});


/* ========================================== 
ADD TO CARD
========================================== */
document.addEventListener("DOMContentLoaded", function (event) {


  const cartButtons = document.querySelectorAll('.cart-button');

  cartButtons.forEach(button => {

    button.addEventListener('click', cartClick);

  });

  function cartClick() {
    let button = this;
    button.classList.add('clicked');
  }
});


/* ========================================== 
HOME TAB 
========================================== */

var tabs = document.getElementById('icetab-container').children;
var tabcontents = document.getElementById('icetab-content').children;

var myFunction = function() {
	var tabchange = this.mynum;
	for(var int=0;int<tabcontents.length;int++){
		tabcontents[int].className = ' tabcontent';
		tabs[int].className = ' icetab';
	}
	tabcontents[tabchange].classList.add('tab-active');
	this.classList.add('current-tab');
}	


for(var index=0;index<tabs.length;index++){
	tabs[index].mynum=index;
	tabs[index].addEventListener('click', myFunction, false);
}