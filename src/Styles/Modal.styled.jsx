import styled from "styled-components";

export const ModalStyle = styled.div`
  .cart-modal {
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
    position: absolute;
    width: 360px;
    height: 256px;
    left: 914px;
    top: 108px;
    width: 360px;
    height: 256px;
    background: white;
    color: black;
    border-radius: 10px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  }

  .cart-modal-content {
    width: 400px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
  }
  .modalHeader {
    width: 360px;
    height: 60px;
    padding: 5px;
    background: white;
    overflow: hidden;
    position: relative;
  }
  .modalHeader::after {
    content: "";
    position: absolute;
    width: 360px;
    height: 6px;
    left: 0;
    bottom: -5px;
    background: #e4e9f2;
  }
  /* .cart-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  } */

  .cart-modal-title {
    font-size: 20px;
    font-weight: bold;
  }

  .cart-modal-close {
    border: none;
    background-color: transparent;
    color: #999999;
    font-size: 20px;
    cursor: pointer;
  }

  .cart-items {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .cart-item {
    width: 360px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
  }

  .cart-item-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 10%;
    margin-right: 10px;
  }
  .bin {
    width: 20px;
    height: 24px;
  }

  .cart-item-details {
    flex-grow: 1;
  }

  .cart-item-name {
    font-size: 16px;
    font-weight: bold;
  }

  .cart-item-quantity {
    font-size: 14px;
    color: #666666;
  }

  .cart-item-price {
    font-size: 16px;
    font-weight: bold;
  }

  .cart-total {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  }
  .bin {
    color: grey;
  }
  .cart-total-label {
    margin-bottom: 10px;
  }

  .cart-total-amount {
    color: #ff6600;
  }

  .cart-modal-button {
    padding: 12px 24px;
    border: none;
    background-color: #ff6600;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
  }

  .cart-modal-button:hover {
    background-color: #ff8533;
  }

  .total-cart-amount {
    position: absolute;
    width: 280px;
    height: 16px;
    left: 183px;
    top: 84px;
  }

  .check-out-button {
    position: absolute;
    width: 280px;
    height: 62px;
    top: 180px;
    background-color: #ff7e1b;
    border-radius: 10px;
    color: white;
  }
`;
