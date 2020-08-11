// mouse parallax

$(document).ready(function() {
  $("body").mousemove(function(e) {
    
    let screenWidth = $(window).width();
    let screenHeight = $(window).height();
    
    $(".parallax").css({
      transform:
        "scale(1.15) translate(-" + e.pageX/screenWidth * 50 + "px, -" + e.pageY/screenHeight * 50 + "px)"
    });
  });
});



// scroll parallax

// function parallax() {
//   var parallax = document.getElementById("parallax");
//   parallax.style.top = -(window.pageYOffset / 4)+'px';
// }

// window.addEventListener("scroll", parallax, false);