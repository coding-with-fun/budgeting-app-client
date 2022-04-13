import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const logger = createLogger({
    duration: true,
    diff: true,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
