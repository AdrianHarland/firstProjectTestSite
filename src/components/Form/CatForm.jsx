import React, { useState } from "react";
import { fetchCat } from "../../api/PostApi/catAPI";

const CatForm = ({ setCat, setLoading }) => {
  const [breed, setBreed] = useState();
  const handleChange = async (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetchCat(breed);
      //   console.log("API Response:", response);
      setCat(response);
      setLoading(false);
    } catch (error) {
      // Handle errors
      console.error("Error submitting form data:", error.message);
    }
  };

  return (
    <form className="fields" onSubmit={handleSubmit}>
      <br />
      <label>
        <div>Cat Breed:</div>
        <input type="text" name="Cat" value={breed} onChange={handleChange} />
        <p />
        <button type="submit">Submit</button>
        <br />
      </label>
      <br />
    </form>
  );
};

export default CatForm;
