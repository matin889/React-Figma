import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { GlobalStyle } from "./Styles/Global.styled";
import Collections from "./Pages/Collections";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Collections />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Container>
  );
}

export default App;
