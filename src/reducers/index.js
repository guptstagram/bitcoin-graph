import {combineReducers} from "redux";
import graphReducer from "./graphReducer";
import priceReducer from "./priceReducer";

const rootReducer = combineReducers({
    priceReducer,
    graphReducer,
})

export default rootReducer;