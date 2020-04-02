import { createStore, combineReducers} from "redux";
import rulesReducer from "../reducers/rules-reducer";

const rootReducer = combineReducers({
  rules: rulesReducer
});

const store = createStore(
  rootReducer,
);
export default store;