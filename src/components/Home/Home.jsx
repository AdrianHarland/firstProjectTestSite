import AppLayout from "../AppLayout";
import "./Home.scss";
import aexteriorSwamp from "../../assets/house/aexteriorSwamp.webp";

const Home = () => {
  return (
    <AppLayout>
      <div className="content">
        <h1>The Swamp of Shrek is available to Rent</h1>
        <img src={aexteriorSwamp} className="mainImg" />
      </div>
    </AppLayout>
  );
};

export default Home;
