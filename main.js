// Variables
const back = document.querySelector(".back"); // Back button
const foeward = document.querySelector(".foeward"); // Forward button
const imgsContainer = document.querySelector(".imgs"); // Images container
const swiper = document.querySelector(".swiper");
const swiperImgs = document.querySelectorAll(".swiper img"); // Swiper images

let movement = 0;
// End of variables

// Functions

// Sroll back
function backInImages() {
  swiper.scrollBy(230, 0);
}

// Scroll forward
function forwardInIamges() {
  swiper.scrollBy(-230, 0);
}

// End of functions

// mouseover event => swiper images
swiperImgs.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.cssText = "transform: scale(1.1); filter: none;";
  });
});

// mouseleave event => swiper images
swiperImgs.forEach((img) => {
  img.addEventListener("mouseleave", () => {
    img.style.cssText = "transform: scale(1)";
  });
});
