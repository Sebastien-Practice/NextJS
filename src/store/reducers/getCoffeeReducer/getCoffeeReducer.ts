import { actionTypes } from "@/store/actionTypes/actionTypes";
import { coffeeList, pageState } from "@/store/types/types";


const initialState: pageState = {
    coffeeList: []
};

const getCoffeeReducer = (state = initialState, action: coffeeList) =>{
    switch (action.type){
        case actionTypes.GET_COFFEE:
            return{
                ...state,
                coffeeList: action.payload.slice()
            }
        default:
            return{
                ...state
            }
    }
}

export default getCoffeeReducer;