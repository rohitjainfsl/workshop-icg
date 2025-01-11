import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
function First() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default First;
