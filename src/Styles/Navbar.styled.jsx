import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: #f2f2f2;
  color: #035367;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 3rem;
  padding: 1rem;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 1110px;
    height: 1px;
    left: 0;
    bottom: -10px;
    background: #e4e9f2;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 4.85rem;
  }
  .logo {
    width: 13.75rem;
    height: 2rem;
  }
  ul {
    display: flex;
    gap: 3.3rem;
    font-size: 2rem;
    list-style: none;
    padding: 1rem 0.5rem;
  }
  .cart {
    display: flex;
    align-items: center;
    gap: 4.618rem;
  }
  .basket {
    position: relative;
    width: 2.2rem;
    height: 2rem;
    overflow: hidden;
  }
  .cart-quantity {
    position: absolute;
    margin-top: -2.8rem;
    margin-left: 0.8rem;
    border: none;
    width: 1.9rem;
    height: 1.3rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .update-amount {
    font-family: "Kumbh Sans", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    background: #ff7e1b;
    color: #ffffff;
    text-align: center;
  }
  .user {
    border: 2px solid #ff7e1b;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
`;
