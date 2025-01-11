import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import SingleProduct from "./SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
]);
function First() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default First;
