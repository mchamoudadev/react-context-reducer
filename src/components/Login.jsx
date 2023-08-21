import React, { useState } from "react";
import useGlobalState from "../hooks/useGlobalState";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

const Login = () => {
	const { state, dispatch } = useGlobalState();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch({
			type: "LOGIN",
			payload: { username, password },
		});

		if (!state.auth.authError) {
			navigate("/");
		} else {
			alert("Incorrect username or password");
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<div>
					<label>Username:</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Login</button>
				<Link to={"/register"}>i don't have accoount</Link>
			</form>
		</div>
	);
};

export default Login;
