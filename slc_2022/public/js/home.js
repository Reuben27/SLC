/*Manual and Automatic Slideshow*/
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } 
  else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides1");
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

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}




/*Manual Slideshow Only

var slideIndex = [1];
var slideId = ["mySlides1"]
showSlides(1);

//var slideIndexo = 0;
//carousel();

function plusSlides(n) {
    showSlides(slideIndex[0] += n);
    var element = document.getElementsByClassName(slideId[0]);
    if(n > 0){
        for (i = 0; i < element.length; i++) {
            element[i].classList.remove("animate-left");
            element[i].classList.add("animate-right");
        }
    }
    if(n < 0){
        for (i = 0; i < element.length; i++) {
            element[i].classList.remove("animate-right");
            element[i].classList.add("animate-left");
        }
    }
}

//For the dots.
function currentSlide(n) {
    showSlides(slideIndex[0] = n);
}

//Function to show only the nth slide and rest are hidden.
function showSlides(n) {
    var i;
    var x1 = document.getElementsByClassName(slideId[0]);
    //var x2 = document.getElementsByClassName(slideId[1]);
    var dots = document.getElementsByClassName("dot");

    if (n > x1.length) {
        slideIndex[0] = 1;
    }
    if (n < 1) {
        slideIndex[0] = x1.length;
    }
    for (i = 0; i < x1.length; i++) {
        x1[i].style.display = "None";
        //x2[i].style.display = "None";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //slideIndexo++;
    x1[slideIndex[0]-1].style.display = "block";
    //x2[slideIndex[0]-1].style.display = "block";
    dots[slideIndex[0]-1].className += " active";
}

*/