import React from "react";

import "./BigImage.css";

interface IBigImage {
  isVisible: boolean;
  image: string;
  closePage: () => void;
}

const BigImage: React.FC<IBigImage> = ({ isVisible, image, closePage }) => {
  return (
    <>
      {isVisible && (
        <div className="big-image-wrapper" onClick={() => closePage()}>
          <img className="big-image-container p-5" src={image} />
        </div>
      )}
    </>
  );
};

export default BigImage;
