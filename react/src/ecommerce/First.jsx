import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <>
        <Header />
        <SingleProduct />
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <Cart />
        <Footer />
      </>
    ),
  },
]);
function First() {
  return (
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>;
    </CartProvider>
  );
}
export default First;
