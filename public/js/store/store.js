import createStore from "./createStore";
import combineReducers from "./combineReducers";
import counterReducer from "./counterReducer";
import userReducer from "./usersReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

const store = createStore(rootReducer);

export default store;
