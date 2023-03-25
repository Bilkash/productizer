import { takeEvery, put } from "redux-saga/effects";

import getAllProducts from "../requests/getAllProducts";
import { ProductType } from "../types";

type GetProductsParams = {
	limit: number,
	type: string
}

type DeleteItemParams = {
	id: number,
	products: ProductType[],
	type: string
}

function* getAllProductsData({ limit } : GetProductsParams):Generator<any> {
	try {
		const products = yield getAllProducts(limit);
		yield put({ type: "GET_PRODUCTS", payload: products });
	} catch (e) {
		yield put({ type: "SET_ERROR_PRODUCTS", payload: e });
	}
}

function* deleteProductItem({ id, products }: DeleteItemParams): Generator<any> {
	try {
		const newProducts = products.filter(n => n.id !== id);
		yield put({ type: "GET_PRODUCTS", payload: newProducts });
	} catch (e) {
		yield put({ type: "SET_ERROR_PRODUCTS", payload: e });
	}
}

export function* rootSaga() {
	yield takeEvery("GET_PRODUCTS_DATA", getAllProductsData );
	yield takeEvery("DELETE_PRODUCT_DATA", deleteProductItem );
}
