import React from "react";
import { DayWeatherInfoItem } from "./DayWeatherInfoItem";
import { Weather } from "../store/types/types";

export interface Item {
  name: string;
  value: string;
}

interface Props {
  weather: Weather;
}

export function changeConditionWeather(condition: string) {
  switch (condition) {
    case "clear":
      return "Ясно";
    case "partly-cloudy":
      return "Малооблачно";
    case "cloudy":
      return "Облачно с прояснениями";
    case "overcast":
      return "Пасмурно";
    case "drizzle":
      return "Морось";
    case "light-rain":
      return "Небольшой дождь";
    case "rain":
      return "Дождь";
    case "moderate-rain":
      return "Умеренно сильный дождь";
    case "heavy-rain":
      return "Сильный дождь";
    case "continuous-heavy-rain":
      return "Длительный сильный дождь";
    case "showers":
      return "Ливень";
    case "wet-snow":
      return "Дождь со снегом";
    case "light-snow":
      return "Небольшой снег";
    case "snow":
      return "Снег";
    case "snow-showers":
      return "Снегопад";
    case "hail":
      return "Град";
    case "thunderstorm":
      return "Гроза";
    case "thunderstorm-with-rain":
      return "Дождь с грозой";
    case "thunderstorm-with-hail":
      return "Гроза с градом";
    default:
      return "";
  }
}

export const DayWeatherInfo = ({ weather }: Props) => {
  const infoWeatherItems: Item[] = [
    {
      name: "Широта и долгота:",
      value: `${weather.info.lat.toFixed(4)}(ш) ${weather.info.lon.toFixed(
        4
      )}(д)`,
    },
    {
      name: "Температура (ощущается):",
      value: `Ощущается как ${weather.fact.feels_like}°`,
    },
    {
      name: "Описание:",
      value: changeConditionWeather(weather.fact.condition),
    },
    {
      name: "Скорость ветра:",
      value: `${weather.fact.wind_speed} м/с`,
    },
    {
      name: "Атмосферное давление:",
      value: `${weather.fact.pressure_mm} мм ртутного столба`,
    },
    {
      name: "Влажность:",
      value: `${weather.fact.humidity} %`,
    },
  ];

  return (
    <>
      <div className="relative pt-6 px-10 max-w-3xl w-full rounded-md shadow-2xl">
        <div>
          {infoWeatherItems.map((infoItem: Item, index) => {
            return <DayWeatherInfoItem key={index} infoItem={infoItem} />;
          })}
        </div>
        <div
          className="absolute top-0 right-0 h-44 w-44 bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://yastatic.net/weather/i/icons/funky/dark/${weather.fact.icon}.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </div>
    </>
  );
};
