import React, { useState } from "react";
import { Container } from "react-bootstrap";

import img1 from "../../images/projects/image_1.jpg";
import img2 from "../../images/projects/image_2.jpg";
import img3 from "../../images/projects/image_3.jpg";
import img4 from "../../images/projects/image_4.jpg";
import img5 from "../../images/projects/image_5.jpg";
import img6 from "../../images/projects/image_6.jpg";
import img7 from "../../images/projects/image_7.jpg";
import img8 from "../../images/projects/image_8.jpg";
import img9 from "../../images/projects/image_9.jpg";
import img10 from "../../images/projects/image_10.jpg";
import img11 from "../../images/projects/image_11.jpg";
import img12 from "../../images/projects/image_12.jpg";
import img13 from "../../images/projects/image_13.jpg";
import img14 from "../../images/projects/image_14.jpg";
import img15 from "../../images/projects/image_15.jpg";
import img16 from "../../images/projects/image_16.jpg";
import img17 from "../../images/projects/image_17.jpg";
import img18 from "../../images/projects/image_18.jpg";
import img19 from "../../images/projects/image_19.jpg";
import img20 from "../../images/projects/image_20.jpg";
import img21 from "../../images/projects/image_21.jpg";
import img22 from "../../images/projects/image_22.jpg";
import img23 from "../../images/projects/image_23.jpg";
import img24 from "../../images/projects/image_24.jpg";
import img25 from "../../images/projects/image_25.jpg";
import img26 from "../../images/projects/image_26.jpg";
import img27 from "../../images/projects/image_27.jpg";
import img28 from "../../images/projects/image_28.jpg";
import img29 from "../../images/projects/image_29.jpg";
import img30 from "../../images/projects/image_30.jpg";
import img31 from "../../images/projects/image_31.jpg";
import img32 from "../../images/projects/image_32.jpg";
import img33 from "../../images/projects/image_33.jpg";
import img34 from "../../images/projects/image_34.jpg";
import img35 from "../../images/projects/image_35.jpg";
import img36 from "../../images/projects/image_36.jpg";
import img37 from "../../images/projects/image_37.jpg";
import img38 from "../../images/projects/image_38.jpg";
import img39 from "../../images/projects/image_39.jpg";
import img40 from "../../images/projects/image_40.jpg";
import img41 from "../../images/projects/image_41.jpg";
import img42 from "../../images/projects/image_42.jpg";
import img43 from "../../images/projects/image_43.jpg";
import img44 from "../../images/projects/image_44.jpg";
import img45 from "../../images/projects/image_45.jpg";
import img46 from "../../images/projects/image_46.jpg";
import BigImage from "../../components/BigImage/BigImage";

const Projects = () => {
  var projects_list = [
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
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
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
        {projects_list.map((element) => (
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

export default Projects;
