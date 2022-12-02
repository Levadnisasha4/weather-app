import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GeolocationType = {
  id: string;
  name: string;
  lat: string;
  lon: string;
};

type InitialStateType = {
  geolocations: Array<GeolocationType>;
  currentGeolocation: GeolocationType;
  myGeolocation: Omit<GeolocationType, "id" | "name">;
  error: string;
};

const initialState: InitialStateType = {
  geolocations: localStorage.getItem
    ? JSON.parse(localStorage.getItem("geo") || "")
    : [],
  currentGeolocation: { id: "", name: "", lat: "", lon: "" },
  myGeolocation: { lat: "", lon: "" },
  error: "",
};

export const geolocationSlice = createSlice({
  name: "geolocation",
  initialState,
  reducers: {
    saveGeolocation(state, action: PayloadAction<{ new?: boolean }>) {
      if (!action.payload.new) {
        const index = state.geolocations.findIndex(({ id }) => {
          return id === state.currentGeolocation.id;
        });
        state.geolocations[index] = state.currentGeolocation;
        state.currentGeolocation = { id: "", name: "", lat: "", lon: "" };
      } else {
        state.geolocations = [
          ...state.geolocations,
          { ...state.currentGeolocation, id: Date.now().toString(36) },
        ];
        state.currentGeolocation = { id: "", name: "", lat: "", lon: "" };
        localStorage.setItem("geo", JSON.stringify(state.geolocations));
      }
    },
    saveMyGeolocation(
      state,
      action: PayloadAction<Omit<GeolocationType, "id" | "name">>
    ) {
      state.myGeolocation = action.payload;
    },
    deleteGeolocation(
      state,
      action: PayloadAction<{ id: GeolocationType["id"] }>
    ) {
      state.geolocations = state.geolocations.filter(
        ({ id }) => id !== action.payload.id
      );
      localStorage.setItem("geo", JSON.stringify(state.geolocations));
    },
    selectGeolocation(
      state,
      action: PayloadAction<{ id: GeolocationType["id"] }>
    ) {
      state.currentGeolocation = state.geolocations.filter(
        ({ id }) => id === action.payload.id
      )[0];
    },
    editGeolocation(
      state,
      action: PayloadAction<{ field: "name" | "lat" | "lon"; value: string }>
    ) {
      state.currentGeolocation = {
        ...state.currentGeolocation,
        [action.payload.field]: action.payload.value,
      };
    },
    getError(state, action: PayloadAction<{ message: string }>) {
      state.error = action.payload.message;
    },
  },
});

export default geolocationSlice.reducer;
