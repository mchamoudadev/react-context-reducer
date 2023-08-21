import React from "react";
import useGlobalState from "../hooks/useGlobalState";
import { useParams } from "react-router-dom";

const Post = () => {
	const { state } = useGlobalState();
	const { id } = useParams(); // getting the post ID from the URL
	const post = state.posts.find((p) => p.id === parseInt(id));

	if (!post) return <p>Post not found!</p>;

	return (
		<div>
			<h2>{post.title}</h2>
			<p>{post.content}</p>
			{/* Display comments, author details, and other related info here */}
		</div>
	);
};

export default Post;
