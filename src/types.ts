export type ProductType = {
	id: number,
	title: string,
	description: string,
	price: number,
	discountPercentage: number,
	rating: number,
	stock: number,
	brand: string,
	category: string,
	thumbnail: string
	images: string[]
}

export type RespondType = {
	limit: number,
	products: ProductType[],
	skip: number,
	total: number
}

export type StateType = {
	products: ProductType[] | null;
	productForEdit: ProductType | null;
	error: string | null;
	limit: number
};
