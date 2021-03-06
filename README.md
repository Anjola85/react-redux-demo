from react-redux:
#The <Provider> component makes the Redux store available to any nested components that need to access the Redux store. https://react-redux.js.org/api/provider

#dispatch(action): https://redux.js.org/api/store#dispatchaction
Dispatches an action. This is the only way to trigger a state change.

The store's reducing function will be called with the current getState() result and the given action synchronously. Its return value will be considered the next state. It will be returned from getState() from now on, and the change listeners will immediately be notified.

#subscribe(listener)
Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.

SELECTORS(USUALLY A SEPARATE FILE): return some state information from the redux store

#connect from 'react-redux': This connects react components to the redux store

#useSelector: Allows you to extract data from the Redux store state, using a selector function. The selector is approximately equivalent to the mapStateToProps argument to connect conceptually. The selector will be called with the entire Redux store state as its only argument. (link: https://react-redux.js.org/api/hooks)

#useDispatch: This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.

#REDUX-DEVTOOL-EXTENSION: Helps witrh debugging

#axios: get request to API endpoints

#redux-thunk: allow defining of asyn action creators
