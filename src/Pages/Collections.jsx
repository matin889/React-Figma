import React from "react";
import { Wrapper } from "../Styles/Collections.styled";
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";

export default function Collections() {
  return (
    <Wrapper>
      {/* <Navbar cartLength={cart.length} /> */}
      <Container />
    </Wrapper>
  );
}
