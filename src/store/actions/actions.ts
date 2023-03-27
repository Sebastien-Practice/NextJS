import { actionTypes } from "../actionTypes/actionTypes";


export const getCoffee = (payload: any) => ({
    type: actionTypes.GET_COFFEE,
    payload
});

export const fetchCoffeeBegin = () =>({
    type: actionTypes.FETCH_COFFEE_BEGIN
});

export const fetchCoffeeSuccess = (payload: any) => ({
    type: actionTypes.FETCH_COFFEE_SUCCESS,
    payload
});

export const fetchCoffeeFailure = (payload: any) => ({
    type: actionTypes.FETCH_COFFEE_FAILURE,
    payload
});