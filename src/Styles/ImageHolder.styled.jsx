import styled from "styled-components";

export const ImageHolderStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .product {
    border: none;
    border-radius: 1.5rem;
    width: 44.5rem;
    height: 44.5rem;
  }
  .icons {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem;
  }

  .icon {
    border: none;
    border-radius: 1rem;
    width: 8.8rem;
    height: 8.8rem;
  }
`;
