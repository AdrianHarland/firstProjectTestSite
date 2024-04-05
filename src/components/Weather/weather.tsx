import React from "react";
import AppLayout from "../AppLayout";
import "./weather.scss";
import { getWeather } from "../../api/PostApi/WeatherApi";
import WeatherForm from "../Form/WeatherForm";

export type ForcastTypes = {
  current: { temp_c: number; is_day: boolean } | undefined;
};

const Weather = () => {
  const [forecast, setForecast] = React.useState<ForcastTypes>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const fetchData = async () => {
    try {
      const fetchWeather = await getWeather("EH234FT");
      setForecast(fetchWeather);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppLayout>
      <div className="content">
        <div className="content-weather">
          <WeatherForm setForecast={setForecast} setLoading={setLoading} />
          {forecast?.current && !loading ? (
            <div>
              {forecast?.current.temp_c < 5
                ? "It's below 5 degrees out there get that t-shirt on"
                : "it is above 5 degrees t-shirt and shorts time"}
              <br />
              <br />
              {forecast?.current.is_day == true
                ? "Get that vitamin D"
                : "It's moon time "}
            </div>
          ) : (
            "Loading"
          )}
        </div>
      </div>
    </AppLayout>
  );
};
export default Weather;
