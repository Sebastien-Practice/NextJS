import { RootState } from "@/store/reducers/rootReducers";
import { createSelector } from "@reduxjs/toolkit";


const getSavedCoffeeList = (state: RootState) => state.getCoffee;

export const getSavedCoffeeListSelector = createSelector(getSavedCoffeeList, (coffee) => coffee);