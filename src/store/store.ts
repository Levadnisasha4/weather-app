import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "./slices/currentWeatherSlice";
import geolocationSliceReducer from "./slices/geolocationSlice";

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  geolocationSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
