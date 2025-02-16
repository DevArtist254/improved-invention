import search from "./ui/search";
import newlocation from "./ui/map";
import results from "./ui/results";
import popup from "./ui/popup";

const map = document.getElementById("map");

const init = function () {
  search.handleAnimation();
  search.handleSearch();
  if(map) {
    newlocation.displayMap();
  }
  results.windowAnimation();
  popup.prevBtn();
  popup.nextBtn();
  popup.currentSlide();
};

init();

console.log("Hello world");
