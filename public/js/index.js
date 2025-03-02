import search from "./ui/search.js";
import newlocation from "./ui/map.js";
import results from "./ui/results.js";
import popup from "./ui/popup.js";
import user from "./ui/user.js";

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

  user.login();
};

init();

console.log("Hello world");
