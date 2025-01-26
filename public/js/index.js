import store from "./store/store";
import search from "./ui/search";
import newlocation from "./ui/map";


const sideBar = document?.querySelector(".images__sec");
const main = document?.getElementById("main");

window.addEventListener("scroll", () => {
  const parentRect = main.getBoundingClientRect();
  const sidebarRect = sideBar.getBoundingClientRect();

  if (parentRect.top <= 20 && parentRect.bottom - sidebarRect.height >= 20) {
    sideBar.classList.add("sticky");
  } else {
    sideBar.classList.remove("sticky");
  }
})

const sideTip = document?.getElementById("safety_tips");

window.addEventListener("scroll", () => {
  const parentRect = sideBar.getBoundingClientRect();
  const sideBarRect = sideTip.getBoundingClientRect();

  if (parentRect.top <= 20 && parentRect.bottom - sideBarRect.height >= 20) {
    sideTip.classList.add("sticky");
  } else {
    sideTip.classList.remove("sticky");
  }
})

const init = function () {
  search.handleAnimation();
  search.handleSearch();
  newlocation.displayMap();
}

init();

const unsubscribe = store.subscribe(() => {
  console.log("Current state:", store.getState());
});

// Dispatch some actions

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

store.dispatch({type: 'SET_NAME', payload: 'Alice'});
store.dispatch({ type: 'SET_AGE', payload: 25});

unsubscribe();

store.dispatch({ type: "INCREMENT" });

console.log("Hello world");
