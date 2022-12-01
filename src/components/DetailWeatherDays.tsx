import React from "react";
import { useCustomDispatch } from "../hooks/store";
import { DayWeatherInfoItem } from "./DayWeatherInfoItem";
import { useCustomSelector } from "../hooks/store";
import { Tabs } from "antd";
import moment from "moment";
import { currentWeatherSlice } from "../store/slices/currentWeatherSlice";

export interface ItemDetailWeatherDays {
  name: string;
  value: string;
}

export const DetailWeatherDays = () => {
  const { weather, selectedDate } = useCustomSelector(
    (state) => state.currentWeatherSliceReducer
  );

  const dispatch = useCustomDispatch();

  const daysOthersData = [
    {
      name: "Описание",
      value: "Солнечно",
    },
    {
      name: "Скорость ветра",
      value: "17 м/с",
    },
    {
      name: "Атмосферное давление",
      value: "765 мм ртутного столба",
    },
    {
      name: "Влажность",
      value: "Влажно",
    },
  ];

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
                      name: "Дата",
                      value: moment(tabDay.date).format("DD.MM.YYYY"),
                    }}
                  />
                  {/* <DayWeatherInfoItem
                    infoItem={{
                      name: "Минимальная температура",
                      value: moment(tabDay.date).format("DD.MM.YYYY"),
                    }}
                  /> */}
                </div>
                <div className="w-2/4 flex flex-col pl-10 items-start">
                  {daysOthersData.map(
                    (itemDays: ItemDetailWeatherDays, index) => {
                      return (
                        <DayWeatherInfoItem key={index} infoItem={itemDays} />
                      );
                    }
                  )}
                </div>
              </div>
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </>
  );
};
