export type Weather = {
  fact: {
    temp: number;
    feels_like: number;
    condition: string;
    wind_speed: number;
    pressure_mm: number;
    humidity: number;
    icon: string;
  };
  forecasts: [
    {
      date: string;
      parts: {
        day: {
          temp_min: number;
          temp_max: number;
          temp_avg: number;
          feels_like: number;
          condition: string;
          wind_speed: number;
          pressure_mm: number;
          humidity: number;
        };
      };
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
    tzinfo: {
      abbr: string;
    };
  };
  now_dt: string;
};
