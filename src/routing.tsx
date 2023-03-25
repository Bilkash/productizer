import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { CreateProductPage, HomePage, ProductPage, SearchPage } from "./pages";

export const routing = createBrowserRouter([
	{
		path: "/",
		element: <HomePage/>,
	},
	{
		path: "/product/:id",
		element: <ProductPage/>,
	},
	{
		path: "/search/:searchInput",
		element: <SearchPage/>,
	},
	{
		path: "/create",
		element: <CreateProductPage/>,
	},
]);
