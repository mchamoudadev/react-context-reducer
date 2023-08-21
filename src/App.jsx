import React from "react";
import useGlobalState from "./hooks/useGlobalState";
import Login from "./components/Login";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
	const { state } = useGlobalState();

	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

export default App;
