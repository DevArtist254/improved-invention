export default function createStore(reducer) {
  let state;
  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);

    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener); // Add listener to the array
    // Return an unsubscribe function
    return () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) listeners.splice(index, 1);
    };
  };

  dispatch({ type: "@@INIT" });

  return { getState, dispatch, subscribe };
}
