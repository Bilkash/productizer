import { Avatar, List, Skeleton } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

import { ProductType } from "../../types";

export default function ProductItem({
	id,
	title,
	description,
	images,
	price,
	category,
	rating,
	stock,
	products
}: ProductType & { products: ProductType[] | null }) {
	const dispatch = useDispatch();

	return (
		<List.Item
			style={itemStyle}
			actions={[
				<div
					key={"delete"}
					onClick={() => dispatch({ type: "DELETE_PRODUCT_DATA", id, products })}
					style={deleteButtonStyle}
				>
					Delete
				</div>
			]}
		>
			<Skeleton avatar title={false} active loading={false}>
				<Avatar src={images[0]}/>

				<div style={titleBlockStyle}>
					<div style={titleStyle}>{title}</div>
					<div>ID: {id}</div>
				</div>

				<div style={mainBlockStyle}>
					<div>Price: {price}$</div>
					<div>Rating: {rating}</div>
					<div>Category: {category}</div>
					<div>Stock: {stock}</div>
				</div>

				<div style={descriptionStyle}>Description: {description}</div>
			</Skeleton>
		</List.Item>
	);
}

const descriptionStyle: React.CSSProperties = {
	width: "30%"
};

const itemStyle: React.CSSProperties = {
	justifyContent: "normal",
	gap: "20px"
};

const titleStyle: React.CSSProperties = {
	fontWeight: "700",
	fontSize: 18
};

const titleBlockStyle: React.CSSProperties = {
	width: "25%"
};

const mainBlockStyle: React.CSSProperties = {
	width: "20%"
};

const deleteButtonStyle: React.CSSProperties = {
	color: "#ff0000",
	cursor: "pointer"
};
