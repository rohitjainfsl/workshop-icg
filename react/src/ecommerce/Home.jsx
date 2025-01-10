import axios from "axios";
import { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";

function Home() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const data = await axios.get("https://fakestoreapi.in/api/products");
    // console.log(data.data.products);
    setProducts(data.data.products);
  }

  function trimContent(input) {
    return input.length > 40 ? input.slice(0, 41) + "..." : input;
  }

  return (
    <>
      <div className="min-h-screen h-full bg-slate-300">
        {products.length === 0 ? (
          <div className="min-h-screen flex justify-center items-center">
            <button
              className="px-8 py-3 rounded-md border-2 border-black font-bold uppercase hover:bg-black hover:text-white hover:shadow-md"
              onClick={getProducts}
            >
              Get Products
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 justify-evenly">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="w-[23%] mt-4 mb-2 bg-white px-4 py-4 rounded-md"
                >
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-48 object-contain mb-2 mix-blend-multiply"
                  />
                  <h4 className="mb-1">{trimContent(product.title)}</h4>
                  <p className="flex items-center font-bold mb-2">
                    ${product.price}
                  </p>
                  <div className="flex justify-between">
                    <button className="flex items-center bg-black text-white text-sm px-2 py-2 rounded-md border-2 border-black hover:bg-white hover:text-black transition-all duration-300">
                      <GiShoppingBag />
                      &nbsp;Add to Wishlist
                    </button>
                    <button className="flex items-center bg-pink-300 text-black text-sm px-2 py-2 rounded-md border-2 border-pink-300 hover:bg-white hover:text-pink-800 transition-all duration-300">
                      <FaCartShopping />
                      &nbsp;Add to Cart
                    </button>
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
