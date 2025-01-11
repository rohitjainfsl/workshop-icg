import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  return <div>SingleProduct</div>;
}

export default SingleProduct;
