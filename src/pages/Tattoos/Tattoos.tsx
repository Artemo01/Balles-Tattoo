import React, { useState } from "react";

import { Container } from "react-bootstrap";

import img1 from "../../images/tattoos/image_1.jpg";
import img2 from "../../images/tattoos/image_2.jpg";
import img3 from "../../images/tattoos/image_3.jpg";
import img4 from "../../images/tattoos/image_4.jpg";
import img5 from "../../images/tattoos/image_5.jpg";
import img6 from "../../images/tattoos/image_6.jpg";
import img7 from "../../images/tattoos/image_7.jpg";
import img8 from "../../images/tattoos/image_8.jpg";
import img9 from "../../images/tattoos/image_9.jpg";
import img10 from "../../images/tattoos/image_10.jpg";
import img11 from "../../images/tattoos/image_11.jpg";
import img12 from "../../images/tattoos/image_12.jpg";
import img13 from "../../images/tattoos/image_13.jpg";
import img14 from "../../images/tattoos/image_14.jpg";
import img15 from "../../images/tattoos/image_15.jpg";
import img16 from "../../images/tattoos/image_16.jpg";
import img17 from "../../images/tattoos/image_17.jpg";
import img18 from "../../images/tattoos/image_18.jpg";
import img19 from "../../images/tattoos/image_19.jpg";
import img20 from "../../images/tattoos/image_20.jpg";
import img21 from "../../images/tattoos/image_21.jpg";
import img22 from "../../images/tattoos/image_22.jpg";
import img23 from "../../images/tattoos/image_23.jpg";
import img24 from "../../images/tattoos/image_24.jpg";
import BigImage from "../../components/BigImage/BigImage";

const Tattoos = () => {
  const tattoos_list = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
  ];
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const closeImageView = () => {
    setIsVisible(false);
  };
  return (
    <>
      <BigImage
        isVisible={isVisible}
        image={selectedImage}
        closePage={closeImageView}
      />
      <Container className="d-flex flex-wrap justify-content-between">
        {tattoos_list.map((element) => (
          <img
            className="card-image"
            src={element}
            alt="image"
            onClick={() => {
              setIsVisible(true);
              setSelectedImage(element);
            }}
          />
        ))}
      </Container>
    </>
  );
};

export default Tattoos;
