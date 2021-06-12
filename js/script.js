$("body").toggleClass("loaded");
setTimeout(function () {
  $("#preloader").addClass("d-none");
}, 100);
$("a[href^='https://']").attr("target", "_blank");
// .scroll() creates an event when the user scrolls
$(document).on("scroll", function () {
  if ($(this).scrollTop() >= $(".sticknavi").position().top) {
    $(".navbar").addClass("nav-entry");
  } else $(".navbar").removeClass("nav-entry");
});

$(document).ready(function () {
  $(".accordion-list > li > .answer").hide();

  $(".accordion-list > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
});

$(function () {
  "use strict";
  /* ================================================
        Back to top
        ================================================ */

  /* ================================================
        Video popup
        ================================================ */

  /* ================================================
        Banner Slider
        ================================================ */

  var $bannerSlider = $(".banner-slider");

  if ($bannerSlider.length && $.fn.slick) {
    $bannerSlider.slick({
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      infinite: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: false,
            verticalSwiping: false,
          },
        },
      ],
    });
  }

  /* ================================================
        Main Slider
        ================================================ */

  /* ================================================
      Before After Slider
      ================================================ */
  if ($.fn.twentytwenty) {
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
      default_offset_pct: 0.7,
    });
    $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({
      default_offset_pct: 0.3,
      orientation: "vertical",
    });
  }
});

$(".webform").submit(function (e) {
  e.preventDefault();
  $(
    ".submit"
  ).html(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Please Wait`);
  $.ajax({
    url: "https://api.web3forms.com/submit",
    type: "post",
    data: $(".webform").serialize(),
    success: function () {
      $(".submit").html("Submitted");
    },
  });
});

function serviceDetail(service) {
  $(".tab-pane").addClass("d-none");
  $(service).removeClass("d-none");
}
const vidya = `<p>“Everyone loves to be beautiful. 
Many people spend a lifetime in the fear that 
their flaws are permanent and beyond repair. As
 part of my job, I have helped many people achieve 
 confidence and thereby become stronger. Such
  moments make my life happier and career fruitful.
   I hope to continue helping people be confident 
   and beautiful”</p> <span>Dr Vidya S</span>`;
const arun = ` <p>
   “The current lifestyle has led to people suffering from
   many kinds of gastrological ailments. But these issues are
   often overlooked and ignored. At our clinic, we hope to
   help people overcome their gastrological problems and lead
   fuller and better lives”
 </p>
 <span>Dr ANUSH MOHAN</span>`;

$(document).ready(function () {
  $("#vidya").mouseenter(function () {
    $("#drquote").hide().html(vidya).fadeIn("slow");
  });
  $("#anush").mouseenter(function () {
    $("#drquote").hide().html(arun).fadeIn("slow");
  });
});
