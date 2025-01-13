import Logo from "./assets/images/logo.svg";
function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 fixed w-full top-0">
      <a href="">
        <img src={Logo} alt="" />
      </a>
      <ul className="flex items-center gap-4 font-bold">
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Solar Panels</a>
        </li>
      </ul>
      <ul className="flex items-center gap-4 font-bold">
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
