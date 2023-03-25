import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Layout, ProductTable } from "../../components";
import { StateType } from "../../types";

export default function HomePage () {
	const dispatch = useDispatch();
	const state = useSelector((state: StateType) => state);
	const { limit } = state;

	console.log(limit);

	useEffect(() => {
		dispatch({ type: "GET_PRODUCTS_DATA", limit });
	}, [limit]);

	return (
		<Layout>
			<ProductTable/>
		</Layout>
	);
}
