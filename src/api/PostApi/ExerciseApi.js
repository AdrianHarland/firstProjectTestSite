export const fetchExercise = (muscle) => {
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_EXERCISE_API_KEY,
  };

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  return fetch(
    `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};
