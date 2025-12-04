import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Sidebar from "./Components/Sidebar";
import Products from "./Components/Products";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Ofertas, Descontos, Carrinho } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />

      <Container className="my-4">
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>

          <Col md={9}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ofertas" element={<Ofertas />} />
              <Route path="/descontos" element={<Descontos />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Routes>

            <Products />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
