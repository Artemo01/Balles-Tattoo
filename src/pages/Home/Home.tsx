import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

import bartosz from "../../images/bartosz.jpg";

import image_1 from "../../images/projects/image_26.jpg";
import image_2 from "../../images/projects/image_17.jpg";
import image_3 from "../../images/projects/image_33.jpg";

import example_1 from "../../images/projects/image_12.jpg";
import example_2 from "../../images/projects/image_14.jpg";
import example_3 from "../../images/projects/image_13.jpg";
import example_4 from "../../images/projects/image_24.jpg";

import "./Home.css";
import Projects from "../Projects/Projects";

interface IHome {
  changePage: (page: JSX.Element) => void;
}

const Home: FC<IHome> = ({ changePage }) => {
  const example_projects = [example_1, example_2, example_3, example_4];
  return (
    <Container>
      <Row className="my-5">
        <Col className="hidden-image">
          <img className="img-fluid" src={image_1} alt="Obrazek 1" />
        </Col>
        <Col>
          <img className="img-fluid" src={image_2} alt="Obrazek 2" />
        </Col>
        <Col className="hidden-image">
          <img className="img-fluid" src={image_3} alt="Obrazek 3" />
        </Col>
      </Row>
      <div className="my-5">
        <h1>Moje projekty</h1>
        <div className="d-flex flex-wrap justify-content-between">
          {example_projects.map((element) => (
            <img className="card-image" src={element} alt="image" />
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button
            className="balles-button"
            onClick={() => changePage(<Projects />)}>
            Więcej prac <FaArrowRight />
          </button>
        </div>
      </div>
      <Row className="contact-card m-auto mb-5 p-5 w-75">
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

export default Home;
