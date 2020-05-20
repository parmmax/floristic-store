import {combineReducers} from "redux";
import productsReducer from "./productsReducer";

let reducers = combineReducers({
    productsPage: productsReducer
});

export default reducers;