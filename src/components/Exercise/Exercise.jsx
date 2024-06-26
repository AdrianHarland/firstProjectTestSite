import React from "react";
import AppLayout from "../AppLayout";
import ExerciseForm from "../Form/ExerciseForm";
import "./Exercise.scss";

const Exercise = () => {
  const [ex, setEx] = React.useState([]);
  const [loading, setLoading] = React.useState({});

  const ExReturn = () => {
    if (!loading) {
      if (ex.length > 0) {
        return (
          <div className="grid-container">
            {ex.map((item) => {
              return (
                <div className="innerGrid">
                  {[
                    <p>{item.name}</p>,
                    <p>{item.equipment}</p>,
                    <p>{item.muscle}</p>,
                  ]}
                </div>
              );
            })}
          </div>
        );
      } else {
        return "No Results";
      }
    }
  };

  return (
    <AppLayout>
      <div className="content">
        <div className="content-exercise">
          Enter a specific muscle group to see a full list of workouts and
          equipment
          <ExerciseForm setLoading={setLoading} setEx={setEx} />
          <ExReturn />
        </div>
      </div>
    </AppLayout>
  );
};

export default Exercise;
