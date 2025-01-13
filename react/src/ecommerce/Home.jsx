import axios from "axios";
import { useEffect, useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "./CartContext";

function Home() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const data = await axios.get("https://fakestoreapi.in/api/products");
    console.log(data.data.products);
    setProducts(data.data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  function trimContent(input) {
    return input.length > 40 ? input.slice(0, 41) + "..." : input;
  }

  return (
    <>
      <div className="min-h-screen h-full bg-slate-300">
        {products.length === 0 ? (
          <div className="min-h-screen flex justify-center items-center"></div>
        ) : (
          <div className="flex flex-wrap gap-3 justify-evenly">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="w-[23%] mt-4 mb-2 bg-white px-4 py-4 rounded-md"
                >
                  <a href={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt=""
                      className="w-full h-48 object-contain mb-2 mix-blend-multiply"
                    />
                  </a>
                  <h4 className="mb-1">{trimContent(product.title)}</h4>
                  <p className="flex items-center font-bold mb-2">
                    ${product.price}
                  </p>
                  <div className="flex justify-between">
                    <button className="flex items-center bg-black text-white text-sm px-2 py-2 rounded-md border-2 border-black hover:bg-white hover:text-black transition-all duration-300">
                      <GiShoppingBag />
                      &nbsp;Add to Wishlist
                    </button>
                    <div key={product.id}>
                      <button
                        onClick={() => addToCart(product)}
                        className="flex items-center bg-rose-300 text-white text-sm px-2 py-2 rounded-md border-2 border-black hover:bg-rose-800 hover:text-black transition-all duration-300"
                      >
                        <FaCartShopping />
                        &nbsp;Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
export default Home;
