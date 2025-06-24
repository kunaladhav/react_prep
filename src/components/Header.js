import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Title = () => (
  <a href="/">
    <img
      data-testid="logo"
      className="h-28 p-2"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweev2cNZCgecH7BJbsS2WxVkVCOWIDj6M3Q&usqp=CAU"
    />
  </a>
);

// React Components

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-500 shadow-lg">
      <Title />

      <div className="nav-items">
        <ul className="flex py-10 ">
          <li className="px-2 text-amber-50">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2 text-amber-50">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 text-amber-50">
            <Link to={"/contact"}>Contact</Link>
          </li>

          <li className="px-2 text-amber-50">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2 text-amber-50">
            <Link data-testid="cartItems" to="/cart">
              Cart - {cartItems.length} items
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
