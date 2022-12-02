import React from "react";
import { Item } from "./DayWeatherInfo";

interface Props {
  infoItem: Item;
}

export const DayWeatherInfoItem = ({ infoItem }: Props) => {
  const { name, value } = infoItem;

  return (
    <>
      <div className="relative flex items-center mb-2.5 last:mb-0">
        <div className="h-9 text-sm mr-5 text-slate-500">{name}</div>
        <div className="h-9 text-sm">{value}</div>
      </div>
    </>
  );
};
