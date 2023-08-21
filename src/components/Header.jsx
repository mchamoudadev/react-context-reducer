import React from "react";
import { Link } from "react-router-dom";
import useGlobalState from "../hooks/useGlobalState";

const Header = () => {
	const { state, dispatch } = useGlobalState();

	return (
		<div>
			<Link to="/">Logo</Link>
			<ul>
				<Link to="/">Home</Link>
				<Link to="/posts">Posts</Link>
				<Link to="/create-post">Create New Post</Link>
			</ul>
			{state.auth.isAuthenticated ? (
				<>
					<div>Welcome, {state.auth.currentUser.username}!</div>
					<button onClick={() => dispatch({ type: "LOGOUT" })}>Logout!</button>
				</>
			) : (
				<Link to="/login">Login</Link>
			)}
		</div>
	);
};

export default Header;
