import { ChangeEvent } from "react";
import { useAppDispatch } from "../store";
import { getWeather, updateZipCode } from "../store/weather";
import "../App.css";

const WeatherForm = () => {
  const dispatch = useAppDispatch();

  const onChangeZipCode = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 6) {
      dispatch(updateZipCode(e.target.value));
      dispatch(getWeather());
    }
  };

  return (
    <div className="card">
      <input
        className="zipCode"
        type="text"
        placeholder="Enter ZIP code here"
        onChange={onChangeZipCode}
      />
    </div>
  );
};

export default WeatherForm;
