import React, { useState, useContext } from "react";

export const CartContext = React.createContext({
  id: undefined,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (isInCart(item.id)) {
      let index = cart.findIndex((e) => e.item.id === item.id); //Index del item repetido
      cart.splice(index, 1); // Saco la cantidad vieja.
      setCart([...cart, { item: item }]);
    } else {
      setCart([...cart, { item: item }]);
    }
  };

  const removeItem = (removeId) => {
    const newList = cart.filter((element) => element.item.id !== removeId);
    setCart(newList);
  };

  const isInCart = (id) => {
    return cart.find((element) => {
      if (element.item.id === id) {
        return element.item.id;
      } else {
        return false;
      }
    });
  };

  const emptyCart = () => {
    return setCart([]);
  };
  const calculateTotal = () => {
    let num = 0;
    cart.forEach((elem) => {
      num += elem.item.precio;
    });
    return num;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        isInCart,
        emptyCart,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "El hook useCartContext debe ser usado dentro de un CartProvider. No seas pavo."
    );
  }
  return context;
};
