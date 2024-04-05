import "./UserForm.scss";
import React, { useState } from "react";
import { getWeather } from "../../api/PostApi/WeatherApi";
import { ForcastTypes } from "../Weather/weather";

const WeatherForm = ({
  setForecast,
  setLoading,
}: {
  setForecast: React.Dispatch<React.SetStateAction<ForcastTypes | undefined>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [postcode, setPostcode] = useState("EH13EG");

  const handleChange = async (e: any) => {
    const { name, value } = e.target;
    setPostcode(value);
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await getWeather(postcode);
      console.log("API Response:", response);
      setForecast(response);
      setLoading(false);
    } catch (error: any) {
      // Handle errors
      console.error("Error submitting form data:", error.message);
    }
  };

  return (
    <form className="fields" onSubmit={handleSubmit}>
      <br />
      <label>
        Postcode:
        <input
          type="text"
          name="postcode"
          value={postcode}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </label>
      <br />
    </form>
  );
};

export default WeatherForm;
