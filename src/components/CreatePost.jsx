import React, { useEffect, useState } from "react";
import useGlobalState from "../hooks/useGlobalState";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
	const { state, dispatch } = useGlobalState();
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const newPost = {
			id: Date.now(),
			title,
			content,
			author: state.auth.currentUser.username, // assuming your user object has a username field
			// ... any other fields you'd like to add
		};
		dispatch({ type: "CREATE_POST", payload: newPost });
		navigate("/"); // redirect to home page after post creation
	};

	useEffect(() => {
		if (!state.auth.isAuthenticated) {
			navigate("/login");
		}
	}, [state]);

	return (
		<div>
			<h2>Create a New Post</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Title:</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div>
					<label>Content:</label>
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
				<button type="submit">Publish Post</button>
			</form>
		</div>
	);
};

export default CreatePost;
