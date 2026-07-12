import { Link } from "@tanstack/react-router";
import { MdAddShoppingCart } from "react-icons/md";
import type { Product } from "../../interfaces/product";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContest";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col justify-between">
      <Link
        to="/products/$productId"
        params={{ productId: String(product.id) }}
      >
        <img
          className="w-full aspect-square object-cover"
          src={product.image}
          alt={product.name}
        />
      </Link>

      <div className="text-black p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.color}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="font-bold text-lg">R${product.price},00</p>
          <button className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={() => addToCart(product)}>
            <MdAddShoppingCart className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};
