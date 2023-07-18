export default function deleteProduct(id: number) {
	return fetch(`https://dummyjson.com/products/${id}`, {
		method: "DELETE"
	});
}
