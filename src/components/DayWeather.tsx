import React from "react";
import { Weather } from "../store/types/types";

interface Props {
  weather: Weather;
}

export const DayWeather = ({ weather }: Props) => {
  return (
    <>
      <div className="p-5 max-w-sm w-full rounded-md shadow-2xl">
        <div className="flex justify-between items-center w-full mb-7">
          <div>
            <div className="text-8xl font-medium text-[#4793ff]">{`${weather.fact.temp}°`}</div>
            <div className="text-4xl">Сегодня</div>
          </div>
          <div
            className="h-44 w-44"
            style={{
              backgroundImage: `url(https://yastatic.net/weather/i/icons/funky/dark/${weather.fact.icon}.svg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="text-2xl">
          <div>
            Местное время:
            <span>{`${new Date(weather.now_dt).getHours()}:${new Date(
              weather.now_dt
            ).getMinutes()}`}</span>
          </div>
          <div>
            Местность: <span>{weather?.geo_object?.locality?.name}</span>
          </div>
        </div>
      </div>
    </>
  );
};
