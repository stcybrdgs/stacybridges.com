/*
===================================================
  jQUery Scripts for Online Portfolio 
  2016, Stacy Bridges
===================================================
*/

/*************************************************** 
* SMOOTH SCROLLING EFFECT FOR NAV MENU SCROLL SPY
***************************************************/
// (code borrowed from http://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp)
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a, #myBrand a, .welcome-content a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to 
    // scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
});


/*************************************************** 
* ENABLE TOOLTIPS    
***************************************************/
$(document).ready(function(){
  $('[data-toggle = "tooltip"]').tooltip();
});


/*************************************************** 
* CLOSE THE COLLAPSED MENU AFTER A LINK IS CLICKED
***************************************************/
$(document).ready(function () {
  $(".navbar-nav li a, #myBrand a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});   


/*************************************************** 
* DEFINE MOUSE EVENTS FOR 'ABOUT' LINKS
***************************************************/
$("document").ready(function(){
    $(".gitHub .links-hot-zone").mouseover(function(){
        $(".gitHub .links-label").toggleClass("u");
    });
    $(".gitHub .links-hot-zone").mouseout(function(){
        $(".gitHub .links-label").toggleClass("u");
    });
    $(".linkedIn .links-hot-zone").mouseover(function(){
        $(".linkedIn .links-label").toggleClass("u");
    });
    $(".linkedIn .links-hot-zone").mouseout(function(){
        $(".linkedIn .links-label").toggleClass("u");
    }); 
    $(".resume .links-hot-zone").mouseover(function(){
        $(".resume .links-label").toggleClass("u");
    });
    $(".resume .links-hot-zone").mouseout(function(){
        $(".resume .links-label").toggleClass("u");
    });       
});


/*************************************************** 
* TOGGLE THE 'WELCOME' SLIDE-DOWN PANEL 
***************************************************/
$(document).ready(function(){
    $("#camera-tab, .welcome-dismiss, .welcome-content a").click(function(){
        $("#panel").slideToggle("slow");
    });
});


/*************************************************** 
* DEFINE THE PORTFOLIO PICTURE HOVER BEHVAIOR
***************************************************/
$(document).ready(function(){
  $(".p1-panel").mouseover(function(){
    $(".p1 .p-heading").toggleClass("transparent");
    $(".p1 .p-hover").toggleClass("showInfo");
  });
  $(".p1-panel").mouseout(function(){
    $(".p1 .p-heading").toggleClass("transparent");
    $(".p1 .p-hover").toggleClass("showInfo");
  });

  $(".p2-panel").mouseover(function(){
    $(".p2 .p-heading").toggleClass("transparent");
    $(".p2 .p-hover").toggleClass("showInfo");
  });
  $(".p2-panel").mouseout(function(){
    $(".p2 .p-heading").toggleClass("transparent");
    $(".p2 .p-hover").toggleClass("showInfo");
  });   

  $(".p3-panel").mouseover(function(){
    $(".p3 .p-heading").toggleClass("transparent");
    $(".p3 .p-hover").toggleClass("showInfo");
  });
  $(".p3-panel").mouseout(function(){
    $(".p3 .p-heading").toggleClass("transparent");
    $(".p3 .p-hover").toggleClass("showInfo");
  });   
  $(".p4-panel").mouseover(function(){
    $(".p4 .p-heading").toggleClass("transparent");
    $(".p4 .p-hover").toggleClass("showInfo");
  });
  $(".p4-panel").mouseout(function(){
    $(".p4 .p-heading").toggleClass("transparent");
    $(".p4 .p-hover").toggleClass("showInfo");
  });    

  $(".p5-panel").mouseover(function(){
    $(".p5 .p-heading").toggleClass("transparent");
    $(".p5 .p-hover").toggleClass("showInfo");
  });
  $(".p5-panel").mouseout(function(){
    $(".p5 .p-heading").toggleClass("transparent");
    $(".p5 .p-hover").toggleClass("showInfo");
  }); 

  $(".p6-panel").mouseover(function(){
    $(".p6 .p-heading").toggleClass("transparent");
    $(".p6 .p-hover").toggleClass("showInfo");
  });
  $(".p6-panel").mouseout(function(){
    $(".p6 .p-heading").toggleClass("transparent");
    $(".p6 .p-hover").toggleClass("showInfo");
  });

  $(".p7-panel").mouseover(function(){
    $(".p7 .p-heading").toggleClass("transparent");
    $(".p7 .p-hover").toggleClass("showInfo");
  });
  $(".p7-panel").mouseout(function(){
    $(".p7 .p-heading").toggleClass("transparent");
    $(".p7 .p-hover").toggleClass("showInfo");
  }); 
});


/*************************************************** 
* DEFINE THE BA-LINK BEHVAIOR (underline on hover)
***************************************************/
$(document).ready(function(){
    $(".ba-link").mouseover(function(){
        $(".ba-link").toggleClass("underline");
    });
    $(".ba-link").mouseout(function(){
        $(".ba-link").toggleClass("underline");
    });    
});


/*************************************************** 
* FIRE THE LEFT & RIGHT SLIDING PANELS
****************************************************/
$(document).ready(function() {
    $('.left-menu-link').bigSlideLeft();
    $('.right-menu-link').bigSlideRight();        
});


/*************************************************** 
* TOGGLE MODALS
***************************************************/
$(document).ready(function(){
  $('.modal-trigger').click(function(){
    $('#p-modal').modal('toggle');
  });
});