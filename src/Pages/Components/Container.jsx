import React, { useState } from "react";
import { ContainerStyle } from "../../Styles/Container.styled";
import DataHolder from "./DataHolder";
import ImageHolder from "./ImageHolder";
import data from "../../Data/products.json";
import Navbar from "./Navbar";
import Modal from "./Modal";

export default function Container() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product, quantity) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <ContainerStyle>
      <Navbar toggleCart={toggleCart} cartLength={cart.length} />
      {showCart && <Modal cart={cart} closeCart={toggleCart} />}
      <div className="container">
        <ImageHolder />
        <DataHolder product={data} addToCart={addToCart} />
      </div>
    </ContainerStyle>
  );
}
