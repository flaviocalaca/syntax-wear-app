import { CartContext } from "./CartContest";
import type { Product } from "../../assets/interfaces/product";
import { useEffect, useState } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

export interface ProductCart extends Product {
  quantity: number;
}

const localStorageKey = "@SyntaxWear:cart";

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setcart] = useState<ProductCart[]>(() => {
    const cartFromLocalStorage = localStorage.getItem(localStorageKey);
    return cartFromLocalStorage !== null
      ? JSON.parse(cartFromLocalStorage)
      : [];
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(cart));
  }, [cart]);



  function addToCart(product: Product): void {
    const productExistsInCart = cart.find(
      (itemIncart) => itemIncart.id === product.id,
    );

    let newCart;

    if (productExistsInCart) {
      newCart = cart.map((itemInCart) =>
        itemInCart.id === product.id
          ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
          : itemInCart,
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    setcart(newCart);
  }

  function removeFromCart(productId: number): void {
    setcart(cart.filter((itemInCart) => itemInCart.id !== productId));
  }

  function increment(product: ProductCart): void {
    updataProductQuantity(product, product.quantity + 1);
  }

  function decrement(product: ProductCart): void {
    updataProductQuantity(product, product.quantity - 1);
  }

  function updataProductQuantity(
    product: ProductCart,
    newQuantity: number,
  ): void {
    if (newQuantity <= 0) return;
    const productExistsInCart = cart.find(
      (itemIncart) => itemIncart.id === product.id,
    );

    if (!productExistsInCart) return;

    const newCart = cart.map((itemInCart) =>
      itemInCart.id === product.id
        ? { ...itemInCart, quantity: newQuantity }
        : itemInCart,
    );
    setcart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increment,
        decrement,

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// - adicionar um produto ao carrinho
// - remover um produto do carrinho
// - incrementar a quantidade de um produto
// - decrementar a quantidade de um produto
