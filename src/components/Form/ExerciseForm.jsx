import React, { useState } from "react";
import { fetchExercise } from "../../api/PostApi/ExerciseApi";

const ExerciseForm = ({ setEx, setLoading }) => {
  const [muscle, setMuscle] = useState();

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setMuscle(value);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetchExercise(muscle);
      setEx(response);
      setLoading(false);
    } catch (error) {
      console.error(
        "Looks like there is an error in the form data submission, BRO",
        error.message
      );
    }
  };

  return (
    <form className="fields" onSubmit={handleSubmit}>
      <br />
      <label>
        Exercise:
        <input type="text" name="Ex" value={muscle} onChange={handleChange} />
        <button type="submit">Submit</button>
      </label>
      <br />
    </form>
  );
};

export default ExerciseForm;
