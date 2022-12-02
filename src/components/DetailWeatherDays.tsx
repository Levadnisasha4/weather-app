import React from "react";
import { useCustomDispatch } from "../hooks/store";
import { DayWeatherInfoItem } from "./DayWeatherInfoItem";
import { useCustomSelector } from "../hooks/store";
import { Tabs } from "antd";
import moment from "moment";
import { currentWeatherSlice } from "../store/slices/currentWeatherSlice";
import { changeConditionWeather } from "./DayWeatherInfo";

export interface ItemDetailWeatherDays {
  name: string;
  value: string;
}

export const DetailWeatherDays = () => {
  const { weather, selectedDate } = useCustomSelector(
    (state) => state.currentWeatherSliceReducer
  );

  const dispatch = useCustomDispatch();

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        activeKey={selectedDate}
        onChange={(selectedTab) =>
          dispatch(
            currentWeatherSlice.actions.changeSelectedDate({
              date: selectedTab,
            })
          )
        }
      >
        {weather.forecasts.map((tabDay) => {
          return (
            <Tabs.TabPane
              key={tabDay.date}
              tab={moment(tabDay.date).format("DD.MM.YYYY")}
            >
              <div className="flex flex-row justify-between py-2.5 px-10 w-full rounded-md shadow-2xl">
                <div className="w-2/4 border-r flex flex-col">
                  <DayWeatherInfoItem
                    infoItem={{
                      name: "Дата:",
                      value: moment(tabDay.date).format("DD.MM.YYYY"),
                    }}
                  />
                  <DayWeatherInfoItem
                    infoItem={{
                      name: "Минимальная температура:",
                      value: `${tabDay.parts.day.temp_min}°`,
                    }}
                  />
                  <DayWeatherInfoItem
                    infoItem={{
                      name: "Максимальная температура:",
                      value: `${tabDay.parts.day.temp_max}°`,
                    }}
                  />
                  <DayWeatherInfoItem
                    infoItem={{
                      name: "Средняя температура за день:",
                      value: `${tabDay.parts.day.temp_avg}°`,
                    }}
                  />
                  <DayWeatherInfoItem
                    infoItem={{
                      name: "Температура (ощущается):",
                      value: `Ощущается как ${tabDay.parts.day.feels_like}°`,
                    }}
                  />
                </div>
                <div className="w-2/4 flex flex-col pl-10 items-start">
                  <DayWeatherInfoItem
                    infoItem={{
                      name: "Описание:",
                      value: changeConditionWeather(tabDay.parts.day.condition),
                    }}
                  />
                  <DayWeatherInfoItem
                    infoItem={{
                      name: "Скорость ветра:",
                      value: `${tabDay.parts.day.wind_speed} м/с`,
                    }}
                  />
                  <DayWeatherInfoItem
                    infoItem={{
                      name: "Атмосферное давление:",
                      value: `${tabDay.parts.day.pressure_mm} мм ртутного столба`,
                    }}
                  />
                  <DayWeatherInfoItem
                    infoItem={{
                      name: "Влажность:",
                      value: `${tabDay.parts.day.humidity} %`,
                    }}
                  />
                </div>
              </div>
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </>
  );
};
