import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import { Header } from "./components/Header";
import { DayWeather } from "./components/DayWeather";
import { AddGeolocation } from "./components/AddGeolocation";
import { SaveGeolocation } from "./components/SaveGeolocation";
import { DayWeatherInfo } from "./components/DayWeatherInfo";
import { DetailWeatherDays } from "./components/DetailWeatherDays";
import { useCustomDispatch, useCustomSelector } from "./hooks/store";
import { fetchCurrentWeather } from "./store/thunks/fetchCurrentWeather";
import { MyGeolocations } from "./components/MyGeolocations";
import { geolocationSlice } from "./store/slices/geolocationSlice";

function App() {
  const dispatch = useCustomDispatch();

  const { weather, isLoading } = useCustomSelector(
    (state) => state.currentWeatherSliceReducer
  );

  const { myGeolocation, currentGeolocation } = useCustomSelector(
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
  }, [
    dispatch,
    navigator.geolocation.getCurrentPosition,
    geolocationSlice.actions.saveMyGeolocation,
  ]);

  useEffect(() => {
    if (currentGeolocation.lat && currentGeolocation.lon) {
      dispatch(
        fetchCurrentWeather(currentGeolocation.lat, currentGeolocation.lon)
      );
    } else {
      dispatch(fetchCurrentWeather(myGeolocation.lat, myGeolocation.lon));
    }
  }, [
    dispatch,
    navigator.geolocation.getCurrentPosition,
    fetchCurrentWeather,
    currentGeolocation,
    myGeolocation,
  ]);

  return (
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

      <div className="max-w-7xl max-h-72 flex justify-between m-0 m-auto mb-5">
        <AddGeolocation />
        <SaveGeolocation />
        <MyGeolocations />
      </div>
    </>
  );
}

export default App;
//border rounded-md border-black border-solid
