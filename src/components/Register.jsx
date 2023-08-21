import React, { useState } from "react";
import useGlobalState from "../hooks/useGlobalState";
import { Link, redirect, useNavigate } from "react-router-dom";

const Register = () => {
	const { dispatch } = useGlobalState();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();
		const newUser = {
			id: Date.now(), // a simple way to generate a unique ID
			username,
			password,
		};
		dispatch({
			type: "REGISTER",
			payload: newUser,
		});
		console.log("why");
		navigate("/login");
		// You can redirect to login or display a success message here
	};

	return (
		<div>
			<h2>Register</h2>
			<form onSubmit={handleRegister}>
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
				<button type="submit">Register</button>
				<Link to="/login">i have account</Link>
			</form>
		</div>
	);
};

export default Register;
