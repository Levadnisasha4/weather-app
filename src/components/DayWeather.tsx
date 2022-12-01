import React from "react";
import { Weather } from "../store/types/types";
import moment from "moment";

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
              background:
                "url(https://yastatic.net/weather/i/icons/funky/dark/ovc.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="text-2xl">
          <div>
            Местное время: <span>{moment(weather.now_dt).format("LT")}</span>
          </div>
          <div>
            Местность: <span>{weather?.geo_object?.locality?.name}</span>
          </div>
        </div>
      </div>
    </>
  );
};
