$(document).ready(function () {

  // slider height
  // $(".owl-carousel").height($(window).height())
  // $(window).resize(function () {
  //   $(".owl-carousel").height($(window).height())
  // })

  // owl Carousel
  $('header .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    items:1,
    animateOut:"fadeOut",
    autoplay:true
  })

  // owl Carousel
  $('.brands .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    responsive: {
      0: {
        items:2
      },
      768: {
        items:4
      },
      992: {
        items:6
      }
    }
  })
  
  $(".side-menu").height($(window).height())

  // add class "open" of side menu
  $(".menu").on("click", function () {
    $(".side-menu").toggleClass("open")
  })

  // remove class "open" of side menu
  $(".fa-times").on("click", function () {
    $(".side-menu").removeClass("open")
  })

  // toggle between nav "top" & "left"
  $(window).scroll(function () {
    if($(this).scrollTop() > 50) {
      $(".nav-left").fadeOut(500);
      $(".nav-top").fadeIn(500);
    } else {
      $(".nav-left").fadeIn(500);
      $(".nav-top").fadeOut(500);
    }
  })

  // counter-up
  const counters = document.querySelectorAll(".about .num");
  const daley = 200.5;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = counter.getAttribute("data-target");
      const count = + counter.innerText;
      const speed = target / Math.floor(daley);
      
      if (count < target) {
        counter.innerText = count + speed;
        setTimeout(updateCount, 1)
      } else {
        counter.innerText = target
      }
      
    }

    updateCount();
  })


  // count down
  var counter = $(".countdown").html()
  $('.countdown').countdown('2021/01/01', function(event) {
    $(this).html(event.strftime(counter));
  });


  // change theme
  var link = $("link[data-theme='switch']"),
      logo = $(".logo img");

  $(".fa-moon").on("click", function () {
    if (link.attr('href') == 'css/dark-theme.css') {
      link.attr('href', 'css/light-theme.css')
      logo.attr("src", "images/logo-dark.png")
    }
    else {
      link.attr('href', 'css/dark-theme.css')
      logo.attr("src", "images/logo.png")
    }
  })


  var scrollTop = $(".scroll-top");
  // scroll top
  scrollTop.on("click", function () {
    $("html, body").animate( {
      scrollTop: 0
    }, 2000)
  })

  // toggle scroll top section (show / hide)
	$(window).scroll(function () { 
    if ($(Window).scrollTop() <= 700) {
      scrollTop.fadeOut(1000)
    } else {
      scrollTop.fadeIn(1000)
    }
  })

  
  new WOW().init();

})

