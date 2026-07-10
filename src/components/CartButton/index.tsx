import IconCart from "@/assets/images/icon-cart.png";
import { CartContext } from "../../contexts/CartContest";
import { useContext } from "react";


interface CartButtonProps {
  onclick?: () => void;
}
export const CartButton = ({ onclick }: CartButtonProps) => {
  const { cart } = useContext(CartContext);
  return (
    <button
      className="relative cursor-pointer flex items-center"
      onClick={onclick}
    >
      <img src={IconCart} alt="Ícone carrinho de compras" />

      {cart.length > 0 && (
        <span className="absolute -top-3 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-error text-xs font-bold text-white">
          {cart.length}
        </span>
      )}
    </button>
  );
};
