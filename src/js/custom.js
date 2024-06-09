$(document).ready(function(){
    $("#uniqueCarosel").owlCarousel({
      loop:true,
      margin:10,
      dots:false,
      nav:true,
      navText: ["<span class='button-outline-primary btn-connect btn-next me-2'><span class='icon icon-chevron-left'></span></span>","<span class='button-outline-primary btn-connect btn-next'><span class='icon icon-chevron-right'></span></span>"],
      items:8,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          800:{
              items:4
          },
          1200:{
              items:5
          }
      }

    });

    $('.roadmapCarosel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText: ["<span class='button-outline-primary btn-connect btn-next me-2'><span class='icon icon-chevron-left'></span></span>","<span class='button-outline-primary btn-connect btn-next'><span class='icon icon-chevron-right'></span></span>"],
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:3
        }
      }
    });
  });