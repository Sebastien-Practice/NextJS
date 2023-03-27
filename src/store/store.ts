import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducers";


const store = createStore(rootReducer);

export default store