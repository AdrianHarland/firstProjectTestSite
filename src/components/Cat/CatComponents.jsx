const CatComponent = ({ item }) => {
  return (
    <>
      <div className="innerGridCat">
        <p>{item.breeds[0].name}</p>
        <p>{item.breeds[0].origin}</p>
        <p>Average age {item.breeds[0].life_span} years </p>
      </div>
      <div className="innerGridCat">
        <p>{item.breeds[0].description}</p>
        <p>{item.breeds[0].intelligence}</p>
        <p>{item.breeds[0].temperament}</p>
      </div>
    </>
  );
};

export default CatComponent;
