import React from "react";
import "../App.scss";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import { ToastContainer } from "react-toastify";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="App">
      <Header />
      {/* <div
        className="ShrekFace"
        style={{ backgroundImage: `url(${shreksFace})` }}
      > */}
      <div className="innerContainer">{children}</div>
      {/* <ToastContainer /> */}
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default AppLayout;
