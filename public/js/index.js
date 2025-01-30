import search from "./ui/search";
import newlocation from "./ui/map";
import results from "./ui/results";

const map = document.getElementById("map");

const init = function () {
  search.handleAnimation();
  search.handleSearch();
  if(map) {
    newlocation.displayMap();
  }
  results.windowAnimation();

};

init();

console.log("Hello world");
