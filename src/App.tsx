import "./App.css";
import Loader from "./components/Loader";
import WeatherForm from "./components/WeaherForm";
import WeatherInfo from "./components/WeatherInfo";
import { useAppSelector } from "./store";

function App() {
  const { isLoading } = useAppSelector((store) => store.weather);

  return (
    <>
      {isLoading ? <Loader /> : <WeatherInfo />}
      <WeatherForm />
    </>
  );
}

export default App;
