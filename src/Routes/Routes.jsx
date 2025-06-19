import { createBrowserRouter } from "react-router-dom";
import Main from "../Leyout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "./Error";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signin",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          
          fetch(`http://localhost:5000/services/${params.id}`),
        
      },
    ],
  },
]);
export default router