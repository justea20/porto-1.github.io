// Slider Js
let slideIdx = 1;
showSlide(slideIdx);

// Function for front end
function currentSlide(index) {
    showSlide(slideIndex = index);
  }

// Function to display slide
function showSlide(index){
    // Get all object first
    let slideShows = document.querySelectorAll(".porto-slide");
    let btnNavs = document.querySelectorAll(".btn-nav");
    // Check if index 
    if(index > slideShows.length){
        index = 1;
    }
    if (index < 1) {
        index = slideShows.length;
    }
    for (i = 0; i < slideShows.length; i++) {
        slideShows[i].style.display = "none";
    }
    for (i = 0; i < btnNavs.length; i++) {
        btnNavs[i].className = btnNavs[i].className.replace(" active", "");
    }
    // alert(slideShows[index-1]);
    slideShows[index-1].style.display = "none";
    // slideShows[index-1].style.display = "block";
    // alert(slideShows);
    slideShows[index-1].style.display = "block";
    btnNavs[index-1].className += " active";
}