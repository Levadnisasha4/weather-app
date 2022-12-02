import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather } from "../types/types";
import { AxiosResponse } from "axios";

type InitialStateType = {
  weather: Weather;
  isLoading: boolean;
  response: Response;
  selectedDate: string;
};

type Response = {
  status: number;
  message: string;
};

const initialState: InitialStateType = {
  weather: {
    fact: {
      temp: 0,
      feels_like: 0,
      condition: "",
      wind_speed: 0,
      pressure_mm: 0,
      humidity: 0,
      icon: "",
    },
    forecasts: [
      {
        date: "",
        parts: {
          day: {
            temp_min: 0,
            temp_max: 0,
            temp_avg: 0,
            feels_like: 0,
            condition: "",
            wind_speed: 0,
            pressure_mm: 0,
            humidity: 0,
          },
        },
      },
    ],
    geo_object: {
      locality: {
        name: "",
      },
    },
    info: {
      lat: 0,
      lon: 0,
      tzinfo: {
        abbr: "",
      },
    },
    now_dt: "",
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
  selectedDate: "",
};

export const currentWeatherSlice = createSlice({
  name: "current_weather",
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
      state.selectedDate = action.payload.data.forecasts[0].date;
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    changeSelectedDate(state, action: PayloadAction<{ date: string }>) {
      state.selectedDate = action.payload.date;
    },
  },
});

export default currentWeatherSlice.reducer;
