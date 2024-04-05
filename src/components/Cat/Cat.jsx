import React from "react";
import AppLayout from "../AppLayout";
import CatForm from "../Form/CatForm";
import "./Cat.scss";
import { ImageReturn } from "../ImageReturn/ImageReturn";

const Cat = () => {
  const [cats, setCat] = React.useState([]);
  const [loading, setLoading] = React.useState({});

  return (
    <AppLayout>
      <div className="content">
        <div className="content-cat">
          hello
          <CatForm setCat={setCat} setLoading={setLoading} />
          <ImageReturn images={cats} loading={loading} />
        </div>
      </div>
    </AppLayout>
  );
};

export default Cat;
