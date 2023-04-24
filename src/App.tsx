import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./pages/Login";
import ChangePassword from "./pages/UpdateProfile";
import UserProfile from "./components/UserProfile";
import Post from "./components/Post";
import Posts from "./pages/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { Route } from "@mui/icons-material";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import NewPost from "./components/NewPost";
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
