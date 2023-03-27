import { combineReducers } from "@reduxjs/toolkit";
import getCoffeeReducer from "./getCoffeeReducer/getCoffeeReducer";


const rootReducer = combineReducers({
    getCoffee: getCoffeeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;