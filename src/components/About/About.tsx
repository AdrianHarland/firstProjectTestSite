import React from "react";
import AppLayout from "../AppLayout";
import "./About.scss";
import ReactPlayer from "react-player";
import shrekAbout from "../../assets/shrekAbout.jpg";
import house from "../../assets/house.webp";
import { useHeaderContext } from "../../contexts/HeaderContext";

const About = () => {
  const { setMenu } = useHeaderContext();
  return (
    <AppLayout>
      <div className="content">
        <div className="about-content">
          <img
            src={shrekAbout}
            onClick={() => setMenu("is-open")}
            alt="A smiling ogre"
            className="shrekAboutImg"
          />
          <div className="text2">
            This is Shrek and his not just an ogre but he is also a proud land
            and property owner based in the swamp. He spends most of his time
            chasing villagers and nobles throuought the countryside and raising
            his children. When he is not terrorising the locals he or being a
            dad he spends the rest of his time maintaining his swamp and bathing
            in his luxurious mud bath.
          </div>
          <img
            src={house}
            alt="Exterior shot of shreks house"
            className="houseImg"
          />
          <div className="houseText">
            The Swamp House is a giant tree that contains two rooms. Upon
            entrance, there's the main room, which functions as both a kitchen
            and dining room. There is also a bed for the Ogre Triplets. And west
            of the main room is Shrek and Fiona's bedroom.
          </div>

          <ReactPlayer
            url="https://www.youtube.com/watch?v=67L1SiY2jiU"
            controls
            className="SwampTourVid"
          />

          <div className="videoText">
            Due to royal obligations the swamp is left empty for three months of
            the year because of this swamp is now available to rent out on
            AirBNB for those vacant months.
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default About;
