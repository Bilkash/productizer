import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, List } from "antd";

import { StateType } from "../../types";
import ProductItem from "../product";

export default function ProductTable() {
	const dispatch = useDispatch();
	const [initLoading, setInitLoading] = useState(true);
	const state = useSelector((state: StateType) => state);
	const { products } = state;


	useEffect(() => {
		if (products) {
			setInitLoading(false);
		}
	}, [products]);

	const onLoadMore = () => {
		dispatch({ type: "ADD_LIMIT_PRODUCTS" });
	};

	const loadMore =
		!initLoading ? (
			<div
				style={{
					textAlign: "center",
					marginTop: 12,
					height: 32,
					lineHeight: "32px",
				}}
			>
				<Button onClick={onLoadMore}>Load more</Button>
			</div>
		) : null;

	return (
		<List
			loading={initLoading}
			itemLayout={"horizontal"}
			dataSource={products ?? []}
			loadMore={loadMore}
			renderItem={(item) => (<ProductItem {...item} products={products}/>)}
		/>
	);
}
