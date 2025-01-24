import store from "./store/store";
import search from "./ui/search";


const sideBar = document.querySelector(".images__sec");
const main = document.getElementById("main");
const sideBarTop = sideBar.offsetTop;

window.addEventListener("scroll", () => {
  const parentRect = main.getBoundingClientRect();
  const sidebarRect = sideBar.getBoundingClientRect();

  if (parentRect.top <= 20 && parentRect.bottom - sidebarRect.height >= 20) {
    sideBar.classList.add("sticky");
  } else {
    sideBar.classList.remove("sticky");
  }
})

const init = function () {
  search.handleAnimation();
  search.handleSearch();
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
