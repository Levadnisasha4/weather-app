import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";
import axios from "axios";
import { Weather } from "../types/types";

export const fetchCurrentWeather =
  (lat: string, lon: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
      const res = await axios.get<Weather>(
        `/api/weather?lat=${lat}&lon=${lon}`
      );
      if (res.status === 200) {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
