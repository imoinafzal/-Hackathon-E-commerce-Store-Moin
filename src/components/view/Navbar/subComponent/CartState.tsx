import { cartContext } from "@/global/context";
import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";

const CartState = () => {
  let { state } = useContext(cartContext);
  return (
    <div className="flex-shrink-0 relative w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center">
      <div className="absolute h-4 w-4 rounded-full top-1 right-2 bg-red-400 text-sx font-light flex justify-center items-center">
        {state.cart.length}
      </div>
      <BsCart2 size={24} />
    </div>
  );
};

export default CartState;
