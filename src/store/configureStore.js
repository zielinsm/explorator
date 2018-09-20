import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
  return store;
}

export default configureStore;
