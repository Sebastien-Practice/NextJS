import { actionTypes } from "../actionTypes/actionTypes"

export interface pageState {
    coffeeList: {}[],
    loading: boolean,
    error: []
};

// export interface getCoffee {
//     coffeeList: {}[];
//     payload: {} [];
//     type: typeof actionTypes.GET_COFFEE;
// };

export interface fetchCoffeeBegin {
    coffeeList: {}[],
    loading: boolean,
    error: []
    type: typeof actionTypes.FETCH_COFFEE_BEGIN;
}

export interface fetchCoffeeSuccess {
    coffeeList: {}[],
    loading: boolean,
    error: []
    type: typeof actionTypes.FETCH_COFFEE_SUCCESS;
}

export interface fetchCoffeeFailure {
    coffeeList: {}[],
    loading: boolean,
    error: []
    type: typeof actionTypes.FETCH_COFFEE_FAILURE;
}

// export type coffeeList = getCoffee;
export type coffeeList = fetchCoffeeBegin;
