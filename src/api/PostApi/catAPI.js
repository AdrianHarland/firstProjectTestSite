export const fetchCat = (breed) => {
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_CAT_API_KEY,
  };

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  return fetch(
    `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=${breed}&order=RANDOM&page=0&limit=6`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};
