import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

function Header() {
  const { cart } = useCart();
  return (
    <header className="bg-rose-400 flex px-12 py-2 justify-between items-center">
      <h1 className="font-bold text-2xl text-white">Ecommerce</h1>
      <ul className="flex">
        <li>
          <Link className="px-2 mx-2" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="px-2 mx-2" to="/">
            About
          </Link>
        </li>
        <li>
          <Link className="px-2 mx-2" to="/cart">
            Cart ({cart.length})
          </Link>
        </li>
        <li>
          <Link className="px-2 mx-2" to="/">
            Contact Us
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
