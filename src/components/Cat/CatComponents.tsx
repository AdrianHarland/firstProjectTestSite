import React from "react";

export type CatTypes = {
  item: {
    item: string;
    breeds: any;
    name: string;
    origin: string;
    life_span: number;
    description: string;
    intelligence: number;
    temperament: string;
  };
};

const CatComponent = ({ item }: CatTypes) => {
  return (
    <>
      <div className="innerGridCat">
        <p>{item.breeds[0].name}</p>
        <p>{item.breeds[0].origin}</p>
        <p>Average life span is {item.breeds[0].life_span} years </p>
      </div>
      <div className="innerGridCat">
        <p>{item.breeds[0].description}</p>
        <p>
          The Average intelligence score is {item.breeds[0].intelligence} out of
          ten
        </p>
        <p>{item.breeds[0].temperament}</p>
      </div>
    </>
  );
};

export default CatComponent;
