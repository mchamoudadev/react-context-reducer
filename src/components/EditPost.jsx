import React, { useState, useEffect } from "react";
import useGlobalState from "../hooks/useGlobalState";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
	const { state, dispatch } = useGlobalState();
	const navigate = useNavigate();
	const { id } = useParams();
	const post = state.posts.find((p) => p.id === parseInt(id));

	const [title, setTitle] = useState(post?.title || "");
	const [content, setContent] = useState(post?.content || "");

	useEffect(() => {
		// If the post doesn't exist, navigate back to the homepage
		if (!post) navigate("/");
	}, [post, navigate]);

	const handleUpdate = (e) => {
		e.preventDefault();
		const updatedPost = {
			id: post.id,
			title,
			content,
			author: post.author, // ensure the original author is retained
		};
		dispatch({
			type: "UPDATE_POST",
			payload: updatedPost,
		});
		navigate(`/posts`);
	};

	return (
		<div>
			<h2>Edit Post</h2>
			<form onSubmit={handleUpdate}>
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
				<button type="submit">Update Post</button>
			</form>
		</div>
	);
};

export default EditPost;
