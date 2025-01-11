import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  async function getSingleProduct(id) {
    const data = await axios.get("https://fakestoreapi.in/api/products/" + id);
    console.log(data.data.product);
    setProduct(data.data.product);
  }

  return (
    <>
      <div className="px-12 py-6 flex gap-4 justify-between">
        <div className="w-1/4">
          <img className="w-full" src={product.image} alt="" />
        </div>
        <div className="w-3/4">
          <h2 className="font-bold text-2xl mb-1">{product.title}</h2>
          <h4>
            <em>
              <span>{product.category}</span> <span>{product.brand}</span>
            </em>
          </h4>
          <p className="font-bold">$ {product.price}</p>
          <p>{product.description}</p>
          <div className="mt-3 flex justify-between w-[50%]">
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
      </div>
    </>
  );
}

export default SingleProduct;
