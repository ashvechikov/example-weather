import { useAppSelector } from "../store";
import "../App.css";

const WeatherInfo = () => {
  const { weatherData, error } = useAppSelector((state) => state.weather);

  return (
    <>
      <div>
        {weatherData && (
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            className="logo"
            alt="Vite logo"
          />
        )}
      </div>
      <h1>{weatherData ? weatherData?.main : "No data"}</h1>
      <span>{error || weatherData?.description}</span>
    </>
  );
};

export default WeatherInfo;
