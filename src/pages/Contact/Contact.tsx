import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import bartosz from "../../images/bartosz.jpg";

import "./Contact.css";

const Contact = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Row className="contact-card m-5 p-5 w-75">
        <Col xs={12} md={4}>
          <img className="contact-image" src={bartosz} />
        </Col>
        <Col xs={12} md={8}>
          <h3>Bartek Tomaszewski</h3>
          <p>Robię projekty na zamówienie.</p>
          <p>
            Możliwość dojechania bezpośrednio do klienta lub wykonania tatuażu u
            mnie.
          </p>
          <p>Telefon: 609 687 296</p>
          <p>Email: bartek.toma@interia.pl</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
