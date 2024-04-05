import AppLayout from "../AppLayout";
import "./Images.scss";
import React from "react";
import Carousel from "../Carousel/Carousel";

const Images = () => {
  const imageContext = require.context(
    "../../assets/house",
    false,
    /\.(jpg|jpeg|png|gif|webp)$/
  );
  const imagePaths = imageContext.keys();
  const images = imagePaths.map(imageContext);
  console.log(images);
  return (
    <AppLayout>
      <Carousel images={images} />
    </AppLayout>
  );
};

export default Images;
