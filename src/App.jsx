import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorPage from "./pages/error";
import DashboardPage from "./pages/dashboard";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/",
      element:<DashboardPage/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;