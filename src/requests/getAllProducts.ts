import { RespondType } from "../types";

export default function getAllProducts(limit = 10) {
	return fetch(`https://dummyjson.com/products?limit=${limit}&skip=0`)
		.then(res => res.json())
		.then((data: RespondType) => data.products);
}
