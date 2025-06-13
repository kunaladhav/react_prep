import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="p-5 font-bold text-3xl">
        Cart items - {cartItems.length}{" "}
      </h1>
      <button className="p-2 bg-green-200" onClick={() => handleClearCart()}>
        Clear Cart
      </button>

      <div className="flex">
        {cartItems.map((item) => (
          <FoodItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
