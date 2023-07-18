import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Layout, ProductTable } from "../../components";
import { StateType } from "../../types";

export default function HomePage () {
	const dispatch = useDispatch();
	const state = useSelector((state: StateType) => state);
	const { limit, skip } = state;

	useEffect(() => {
		dispatch({ type: "GET_PRODUCTS_DATA", limit, skip });
	}, [skip, dispatch]);

	return (
		<Layout>
			<ProductTable/>
		</Layout>
	);
}
