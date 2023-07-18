import { takeEvery, put } from "redux-saga/effects";

import { ProductType } from "../types";
import deleteProduct from "../requests/deleteProduct";
import getProducts from "../requests/getProducts";

type GetProductsParams = {
	limit: number,
	type: string,
	skip: number,
}

type DeleteItemParams = {
	id: number,
	products: ProductType[],
	type: string
}

function* getProductsData({ limit, skip } : GetProductsParams):Generator<any> {
	try {
		const newProducts = yield getProducts(limit, skip);
		yield put({ type: "GET_PRODUCTS", payload: newProducts });
	} catch (e) {
		yield put({ type: "SET_ERROR_PRODUCTS", payload: e });
	}
}

function* deleteProductItem({ id, products }: DeleteItemParams): Generator<any> {
	try {
		yield deleteProduct(id);
		const newProducts = products.filter(n => n.id !== id);
		yield put({ type: "UPDATE_PRODUCTS", payload: newProducts });
	} catch (e) {
		yield put({ type: "SET_ERROR_PRODUCTS", payload: e });
	}
}

export function* rootSaga() {
	yield takeEvery("GET_PRODUCTS_DATA", getProductsData );
	yield takeEvery("DELETE_PRODUCT_DATA", deleteProductItem );
}
