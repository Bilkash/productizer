import { ProductType, RespondType } from "../types";

export default function getProducts(limit = 10, skip = 0): Promise<ProductType[]> {
	return fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
		.then(res => res.json())
		.then((data: RespondType) => {
			return data.products;
		});
}
