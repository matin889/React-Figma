import styled from "styled-components";

export const DataHolderStyles = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .company {
    width: 44.5rem;
    height: 1.6rem;
    font-family: "Kumbh Sans", sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.612rem;
    color: #ff7e1b;
  }
  .title {
    width: 44.5rem;
    height: 9.68rem;
    font-family: "Kumbh Sans", sans-serif;
    font-size: 4.4rem;
    font-weight: 700;
    line-height: 4.8rem;
    color: #1d2026;
  }
  .description {
    width: 44.5rem;
    height: 7.8rem;
    font-family: "Kumbh Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
    color: #69707d;
  }
  .price-details {
    display: flex;

    gap: 1rem;
  }
  .buttons {
    display: flex;
    gap: 1rem;
  }
  .add-to-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 27.2rem;
    height: 5.6rem;
    background-color: #ff7e1b;
    border: none;
    border-radius: 1rem;
    font-family: "Kumbh Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.984rem;
    color: #ffffff;
  }

  .basket {
    width: 1.746rem;
    height: 1.6rem;
    color: #ffffff;
  }
  .cart {
    background: #ff7e1b;
    border: none;
    font-family: "Kumbh Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.984rem;
    color: #ffffff;
    cursor: pointer;
  }
  .quantity {
    width: 15.7rem;
    height: 5.6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f6f8fd;
    border: none;
    border-radius: 1rem;
    font-family: "Kumbh Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.984rem;
    color: #000000;
  }

  .quantity > button {
    border: none;
    background: #f6f8fd;
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 1.984rem;
    color: #ff7e1b;
    cursor: pointer;
  }
`;
