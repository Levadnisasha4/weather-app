import React from "react";
import { Typography, Input, Space, Button } from "antd";
import { useCustomSelector, useCustomDispatch } from "../hooks/store";
import { geolocationSlice } from "../store/slices/geolocationSlice";

export const Geolocation = () => {
  const dispatch = useCustomDispatch();

  const { currentGeolocation } = useCustomSelector(
    (state) => state.geolocationSliceReducer
  );

  return (
    <>
      <div className="px-5 py-5 w-1/2 w-full rounded-md shadow-2xl mr-2.5">
        <Typography className="font-semibold text-base leading-normal mb-2.5">
          Действия с геопозицией
        </Typography>
        <p className="mb-2.5">Введите наименование</p>
        <Input
          className="mb-2.5"
          placeholder="Наименование..."
          onChange={(event) => {
            dispatch(
              geolocationSlice.actions.editGeolocation({
                field: "name",
                value: event.target.value,
              })
            );
          }}
          value={currentGeolocation.name}
        ></Input>
        <p className="mb-2.5">Введите широту</p>
        <Input
          className="mb-2.5"
          placeholder="Широта..."
          onChange={(event) => {
            dispatch(
              geolocationSlice.actions.editGeolocation({
                field: "lat",
                value: event.target.value,
              })
            );
          }}
          value={currentGeolocation.lat}
        ></Input>
        <p className="mb-2.5">Введите долготу</p>
        <Input
          className="mb-5"
          placeholder="Долгота..."
          onChange={(event) => {
            dispatch(
              geolocationSlice.actions.editGeolocation({
                field: "lon",
                value: event.target.value,
              })
            );
          }}
          value={currentGeolocation.lon}
        ></Input>
        <div className="flex justify-center">
          <Space wrap>
            <Button
              disabled={
                currentGeolocation.name === "" ||
                currentGeolocation.lat === "" ||
                currentGeolocation.lon === ""
              }
              onClick={() => {
                dispatch(geolocationSlice.actions.saveGeolocation({}));
              }}
            >
              Редактировать геопозицию
            </Button>
            <Button
              disabled={
                currentGeolocation.name === "" ||
                currentGeolocation.lat === "" ||
                currentGeolocation.lon === ""
              }
              onClick={() => {
                dispatch(
                  geolocationSlice.actions.saveGeolocation({ new: true })
                );
              }}
            >
              Сохранить геопозицию
            </Button>
          </Space>
        </div>
      </div>
    </>
  );
};
