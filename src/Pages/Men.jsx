import React from "react";
import { Wrapper } from "../Styles/Collections.styled";
import { Menstyle } from "../Styles/Mens.styled";
import Navbar from "./Components/Navbar";

export default function Men({ pageTitle, description, increase, decrease }) {
  return (
    <Wrapper>
      <Navbar />
      <Menstyle>
        <h1 onClick={increase}>{pageTitle}</h1>
        <p onClick={decrease}>{description}</p>
      </Menstyle>
    </Wrapper>
  );
}
