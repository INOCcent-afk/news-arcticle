import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { newsReducer } from "./news/newsReducer";
import { sponsorsReducer } from "./sponsors/sponsorsReducer";

const rootReducer = combineReducers({
  newsReducer,
  sponsorsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
