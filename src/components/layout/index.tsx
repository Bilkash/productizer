import React from "react";
import { Layout as LayoutAnt } from "antd";

const { Header, Content } = LayoutAnt;

type LayoutType = {
	children: React.ReactNode|React.ReactNode[]
	title?: string | null;
}

export default function Layout({ children, title }: LayoutType) {
	return (
		<LayoutAnt>
			<Header style={headerStyle}>{title ? title : "Productzila"}</Header>

			<Content style={contentStyle}>
				{children}
			</Content>
		</LayoutAnt>
	);
}

const headerStyle: React.CSSProperties = {
	color: "#fff",
	height: 64,
	paddingInline: 50,
	lineHeight: "64px",
	fontSize: "28px",
	backgroundColor: "#66b6e6",
};

const contentStyle: React.CSSProperties = {
	minHeight: "88vh",
	lineHeight: "120px",
	color: "#000000",
	backgroundColor: "#ffffff",
};
