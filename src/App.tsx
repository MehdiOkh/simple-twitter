import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import UpdateProfile from "./pages/UpdateProfile";

const queryClient = new QueryClient();
const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{ path: "/", element: <Main /> },
	{ path: "/users/:userId", element: <Profile /> },
	{ path: "/register", element: <Register /> },
	{ path: "/update-profile", element: <UpdateProfile /> },
]);
function App() {
	useEffect(() => {
		axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
		// axios.defaults.headers["Access-Control-Request-Method"] = "*";
	}, []);
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				pauseOnHover
				theme="light"
			/>
		</QueryClientProvider>
	);
}

export default App;
