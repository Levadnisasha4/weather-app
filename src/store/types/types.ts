export type Weather = {
  fact: {
    temp: number;
    feels_like: number;
    condition: string;
    wind_speed: number;
    pressure_mm: number;
    humidity: number;
  };
  forecasts: [
    {
      date: string;
    }
  ];
  geo_object: {
    locality: {
      name: string;
    };
  };
  info: {
    lat: number;
    lon: number;
  };
  now_dt: string;
};
