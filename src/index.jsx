import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import { setupStore } from "./store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// import App from "@/pages/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={setupStore}>
			<BrowserRouter>
				<Header></Header>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
