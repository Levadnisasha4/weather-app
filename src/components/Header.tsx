import React from "react";
import { Typography } from "antd";

export const Header = () => {
  return (
    <>
      <div className="flex items-center w-full justify-between px-5">
        <div className="flex items-center">
          <Typography className="uppercase font-bold text-2xl">
            Weather-App
          </Typography>
        </div>
        <div className="flex items-center">
          <Typography className="font-bold text-2xl">
            Приложение для просмотра погоды
          </Typography>
        </div>
      </div>
    </>
  );
};
