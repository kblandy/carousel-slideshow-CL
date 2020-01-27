//Clicking the prev/next controls and the dots should change the slide as expected.

//While on the last slide, clicking the next button should take you back to the first slide.

//Clicking the prev button while on the first slide should take you to the last slide.




//targeting DOM objects

// let prevButton = document.getElementsByClassName("prev");
// let nextButton = document.getElementsByClassName("next");

// let slides = document.getElementsByClassName("slide");

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function specificSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



