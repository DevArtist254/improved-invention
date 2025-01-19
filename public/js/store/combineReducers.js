export default function combineReducers(reducers) {
    return (state = {}, action) => {
        const nextState = {};

        for(const key in reducers) {
            const reducer = reducers[key];
            const previousStateForKey = state[key];
            nextState[key] = reducer(previousStateForKey, action);
        }

        return nextState;
    }
}