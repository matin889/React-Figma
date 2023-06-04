import React from "react";
import { ModalStyle } from "../../Styles/Modal.styled";

import bin from "../../assets/Images/Mask.png";

const Modal = ({ cart, closeCart }) => {
  const cartItems = cart.map((item) => {
    const discountedPrice =
      item.product.price - (item.product.price * item.product.discount) / 100;
    return (
      <div key={item.product.id} className="cart-item">
        <img
          src={item.product.img[0]}
          alt={item.product.title}
          className="cart-item-image"
        />
        <div>
          <h3>{item.product.title}</h3>
          <p>
            ${discountedPrice.toFixed(2)} x {item.quantity}
          </p>
        </div>

        <img className="bin" src={bin} alt="trash" />
      </div>
    );
  });

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      (item.product.price -
        (item.product.price * item.product.discount) / 100) *
        item.quantity,
    0
  );

  return (
    <ModalStyle>
      <div className="cart-modal">
        <h2 className="modalHeader">Cart</h2>
        <div className="cart-item">{cartItems}</div>
        <h2 className="total-cart-amount">${totalPrice.toFixed(2)}</h2>
        <button className="check-out-button" onClick={closeCart}>
          Checkout
        </button>
      </div>
    </ModalStyle>
  );
};
export default Modal;
