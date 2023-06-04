import React from "react";
import { useState } from "react";
import data from "../../Data/products.json";
import { ImageHolderStyles } from "../../Styles/ImageHolder.styled";

export default function ImageHolder() {
  const [activeImage, setActiveImage] = useState(data.img[0]);
  return (
    <ImageHolderStyles>
      <img className="product" src={activeImage} alt={data.title} />
      );
      <div className="icons">
        {data.img.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={data.title}
            onClick={() => setActiveImage(image)}
          />
        ))}
      </div>
    </ImageHolderStyles>
  );
}
