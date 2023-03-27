import { fetchData } from "@/pages/api/axios";
import { fetchCoffeeBegin, fetchCoffeeFailure, fetchCoffeeSuccess } from "../actions/actions";

export const loadCoffeeAsync = () => (dispatch: any) => {
	dispatch(fetchCoffeeBegin());

	fetchData
		.then((response) => dispatch(fetchCoffeeSuccess(response.data)))
		.catch((error) => dispatch(fetchCoffeeFailure(error.message)));
};