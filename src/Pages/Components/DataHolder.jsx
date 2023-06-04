import React, { useContext, useState } from "react";
import { DataHolderStyles } from "../../Styles/DataHolder.styled";
import cart from "../../assets/Images/Basket-icon.png";
import data from "../../Data/products.json";

const DataHolder = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const discountedPrice =
    product.price - product.price * (product.discount / 100);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <DataHolderStyles>
      <div className="card">
        <h3 className="company">{product.company}</h3>
        <h4 className="title">{product.title}</h4>
        <h4 className="description">{product.description}</h4>
        <div className="price-details">
          <h2 className="price">${discountedPrice.toFixed(2)}</h2>
          <h4 className="discount">{product.discount}% off</h4>
        </div>
        <h4 className="original-price">${product.price.toFixed(2)}</h4>
        <div className="buttons">
          <div className="quantity">
            <button onClick={handleDecrease}>-</button>
            <div className="values">{quantity}</div>
            <button onClick={handleIncrease}>+</button>
          </div>
          <div className="add-to-cart">
            <img className="basket" src={cart} alt="basket" />
            <button
              className="cart"
              onClick={() => addToCart(product, quantity)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </DataHolderStyles>
  );
};
export default DataHolder;
