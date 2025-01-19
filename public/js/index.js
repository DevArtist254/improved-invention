import store from "./store/store";
import search from "./ui/search";


const init = function () {
  search.handleAnimation();
  search.handleSearch();
}

init();

// const unsubscribe = store.subscribe(() => {
//   console.log("Current state:", store.getState());
// });

// unsubscribe();
// // Dispatch some actions

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });

// store.dispatch({type: 'SET_NAME', payload: 'Alice'});
// store.dispatch({ type: 'SET_AGE', payload: 25});

// unsubscribe();

// store.dispatch({ type: "INCREMENT" });

console.log("Hello world");
