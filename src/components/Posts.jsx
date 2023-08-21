import React, { useEffect } from "react";
import useGlobalState from "../hooks/useGlobalState";
import { Link, useNavigate } from "react-router-dom";

const Posts = () => {
	const { state, dispatch } = useGlobalState();

	const navigate = useNavigate();

	useEffect(() => {
		if (!state.auth.isAuthenticated) {
			navigate("/login");
		}
	}, [state]);
	// Assuming you want to fetch posts from mock data on initial load
	useEffect(() => {
		// Fetch posts here if using an API
		// For now, let's assume you're setting it from mock data
		// dispatch({ type: 'SET_POSTS', payload: mockPosts });
	}, [state]);

	return (
		<div>
			<h1>Welcome to the Blogging Platform</h1>
			<Link to="/create-post">Create a New Post</Link>
			<div>
				{state.posts.length > 0 &&
					state.posts.map((post) => (
						<div key={post.id}>
							<h2>{post.title}</h2>
							<p>{post.content}</p>
							<p>By: {post.author}</p>
							{post.author === state.auth.currentUser.username && (
								<>
									<button
										onClick={() =>
											dispatch({
												type: "REMOVE_POST",
												payload: post.id,
											})
										}>
										delete
									</button>
									<button onClick={() => navigate(`/post/${post.id}`)}>
										info
									</button>
									<button onClick={() => navigate(`/edit-post/${post.id}`)}>
										update
									</button>
								</>
							)}
						</div>
					))}
			</div>
		</div>
	);
};

export default Posts;
