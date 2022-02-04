var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");

var sticky = navbar.offsetTop;

function myFunction() {
 if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
 } else {
    navbar.classList.remove("sticky");
  }
} 

TweenMax.from(".logo", 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.staggerFrom(".menu-links ul li", 1, {
  opacity: 0,
  x: -20,
  ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".layer:nth-child(1)", 2, {
  delay: 2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut
})

TweenMax.from(".layer:nth-child(2)", 2, {
  delay: 2.1,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut
})

TweenMax.from(".layer:nth-child(3)", 2, {
  delay: 2.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut
})

TweenMax.from(".layer:nth-child(4)", 2, {
  delay: 2.3,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut
})

TweenMax.from(".layer:nth-child(5)", 2, {
  delay: 2.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut
})

TweenMax.from(".title", 1, {
  delay: 1,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
})

TweenMax.from(".tagline", 1, {
  delay: 1.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
})

TweenMax.from(".pages", 1, {
  delay: 1.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
})

TweenMax.from(".more", 1, {
  delay: 1.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
})

TweenMax.from(".desc", 1, {
  delay: 1.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
})