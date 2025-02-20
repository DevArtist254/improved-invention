import search from "./ui/search";
import newlocation from "./ui/map";
import results from "./ui/results";
import popup from "./ui/popup";

const map = document.getElementById("map");
const popupSec = document.querySelector(".popup");

const init = function () {
  search.handleAnimation();
  search.handleSearch();
  if (map) {
    newlocation.displayMap();
  }
  results.windowAnimation();
  if (popupSec !== null) {
    popup.prevBtn();
    popup.nextBtn();
    popup.currentSlide();
    popup.showSlides(1);
  }
};

init();

console.log("Hello world");
