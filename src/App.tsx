import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { routing } from "./routing";
import store from "./saga/store";

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={routing} />
		</Provider>
	);
}

export default App;
