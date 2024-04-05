export const getWeather = (postCode: string) => {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?q=${postCode}&key=${process.env.REACT_APP_WEATHER_API_KEY}
    `
  )
    .then((response) => response.json())
    .then((json) => json);
};
