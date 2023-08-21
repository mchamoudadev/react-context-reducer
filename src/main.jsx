import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import CreatePostPage from "./pages/CreatePostPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import PostDetailsPage from "./pages/PostDetailsPage.jsx";
import EditPage from "./pages/EditPostPage.jsx";
import EditPostPage from "./pages/EditPostPage.jsx";

const routerProvider = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <PostsPage />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/create-post",
				element: <CreatePostPage />,
			},
			{
				path: "/posts",
				element: <PostsPage />,
			},
			{
				path: "/post/:id",
				element: <PostDetailsPage />,
			},
			{
				path: "/edit-post/:id",
				element: <EditPostPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalProvider>
			<RouterProvider router={routerProvider} />
		</GlobalProvider>
	</React.StrictMode>
);
