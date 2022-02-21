import React from "react";
import { useCartContext } from "../../context/CartContext";
import {
  CartButton,
  CartItem,
  CartItemContents,
  CartItemData,
  ImageContainer,
  ItemImage,
} from "../../containers/CartContainer/Cart.elements";
const CartContent = () => {
  const { cart, removeItem } = useCartContext();

  const mapItems = () =>
    cart.map((elem) => {
      return (
        <CartItem key={elem.item.id}>
          <CartItemContents>
            <ImageContainer>
              <ItemImage src={elem.item.image} />
            </ImageContainer>
            <CartItemData>
              <h5>{elem.item.titulo}</h5>
              <h6>Price: ${elem.item.precio}</h6>
            </CartItemData>
          </CartItemContents>
          <CartButton
            hoverColor="red"
            bgColor="dimgrey"
            onClick={() => removeItem(elem.item.id)}
          >
            Remove from cart
          </CartButton>
          <hr />
        </CartItem>
      );
    });
  return mapItems();
};

export default CartContent;
