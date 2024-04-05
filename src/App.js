import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Images from "./components/Images/Images";
import Contact from "./components/Contact/contact";
import News from "./components/news/News";
import SingleNews from "./components/news/SingleNews";
import Weather from "./components/Weather/weather";
import Cat from "./components/Cat/Cat";
import Exercise from "./components/Exercise/Exercise";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Images />} path="/Images" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<News />} path="/news" />
        <Route element={<SingleNews />} path="/news/:postId" />
        <Route element={<Weather />} path="/Weather" />
        <Route element={<Cat />} path="/cat" />
        <Route element={<Exercise />} path="/exercise" />
        {/* <Route element={<Home />} path="/" /> */}
      </Routes>
    </>
  );
}

export default App;
