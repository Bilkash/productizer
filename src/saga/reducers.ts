import { StateType } from "../types";

type RootAction = {
	type: string,
	payload: any
};

const initialState = {
	products: null,
	productForEdit: null,
	error: null,
	limit: 10,
};

export default function rootReducer(
	state: StateType = initialState,
	action: RootAction
) {
	switch (action.type) {
	case "GET_PRODUCTS":
		return { ...state, products: action.payload };
	case "SET_ERROR_PRODUCTS":
		return { ...state, error: action.payload };
	case "CLEAR_ERROR_PRODUCTS":
		return { ...state, error: null };
	case "ADD_LIMIT_PRODUCTS":
		return { ...state, limit: state.limit+10 };
	case "SET_PRODUCT_FOR_EDIT":
		return { ...state, productForEdit: action.payload };
	case "CLEAR_PRODUCT_FOR_EDIT":
		return { ...state, productForEdit: null };
	default:
		return state;
	}
}
