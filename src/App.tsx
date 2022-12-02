import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import { Header } from "./components/Header";
import { DayWeather } from "./components/DayWeather";
import { Geolocation } from "./components/Geolocation";
import { DayWeatherInfo } from "./components/DayWeatherInfo";
import { DetailWeatherDays } from "./components/DetailWeatherDays";
import { useCustomDispatch, useCustomSelector } from "./hooks/store";
import { fetchCurrentWeather } from "./store/thunks/fetchCurrentWeather";
import { MyGeolocations } from "./components/MyGeolocations";
import { geolocationSlice } from "./store/slices/geolocationSlice";
import Typography from "antd/es/typography/Typography";

function App() {
  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(
    (state) => state.currentWeatherSliceReducer
  );

  const { myGeolocation, currentGeolocation, error } = useCustomSelector(
    (state) => state.geolocationSliceReducer
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      dispatch(
        geolocationSlice.actions.saveMyGeolocation({
          lat: coords.latitude.toString(),
          lon: coords.longitude.toString(),
        })
      );
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentGeolocation.lat && currentGeolocation.lon) {
      dispatch(
        fetchCurrentWeather(currentGeolocation.lat, currentGeolocation.lon)
      );
    } else {
      dispatch(fetchCurrentWeather(myGeolocation.lat, myGeolocation.lon));
    }
  }, [dispatch, currentGeolocation, myGeolocation]);

  return error === "" ? (
    <>
      <div className="max-w-7xl h-16 flex items-center m-0 m-auto mt-5 mb-10 rounded-md shadow-2xl">
        <Header />
      </div>
      <div className="max-w-7xl flex justify-between m-0 m-auto mb-10">
        <DayWeather weather={weather} />
        <DayWeatherInfo weather={weather} />
      </div>
      <div className="max-w-7xl flex flex-col m-0 m-auto mb-10">
        <DetailWeatherDays />
      </div>

      <div className="max-w-7xl max-h-96 flex justify-between m-0 m-auto mb-5">
        <Geolocation />
        <MyGeolocations />
      </div>
    </>
  ) : (
    <Typography>
      Приложение не может определить геопозицию без этого разрешения
    </Typography>
  );
}

export default App;
