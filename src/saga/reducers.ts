import { StateType } from "../types";

type RootAction = {
	type: string,
	payload: any
};

const initialState = {
	products: [],
	productForEdit: null,
	error: null,
	limit: 10,
	skip: 0
};

export default function rootReducer(
	state: StateType = initialState,
	action: RootAction
) {
	switch (action.type) {
	case "GET_PRODUCTS":
		return { ...state, products: [...state.products, ...action.payload] };
	case "UPDATE_PRODUCTS":
		return { ...state, products: action.payload };
	case "SET_ERROR_PRODUCTS":
		return { ...state, error: action.payload };
	case "CLEAR_ERROR_PRODUCTS":
		return { ...state, error: null };
	case "ADD_LIMIT_PRODUCTS":
		return { ...state, skip: state.skip+10 };
	default:
		return state;
	}
}
