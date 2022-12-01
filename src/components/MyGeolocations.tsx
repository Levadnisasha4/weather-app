import React from "react";
import { Typography, List } from "antd";
import { useCustomSelector, useCustomDispatch } from "../hooks/store";
import { geolocationSlice } from "../store/slices/geolocationSlice";

export const MyGeolocations = () => {
  const dispatch = useCustomDispatch();
  const { geolocations, currentGeolocation } = useCustomSelector(
    (state) => state.geolocationSliceReducer
  );

  return (
    <>
      <div className="p-5 max-w-sm w-full rounded-md shadow-2xl">
        <Typography className="font-semibold text-base leading-normal mb-2.5">
          Мои геопозиции
        </Typography>
        <List
          itemLayout="horizontal"
          dataSource={geolocations}
          renderItem={(item) => (
            <List.Item
              className={
                currentGeolocation.id === item.id ? "bg-sky-500" : undefined
              }
              actions={[
                <span
                  key="select"
                  onClick={() => {
                    dispatch(
                      geolocationSlice.actions.selectGeolocation({
                        id: item.id,
                      })
                    );
                  }}
                >
                  выбрать
                </span>,
                <span
                  key="delete"
                  onClick={() => {
                    dispatch(
                      geolocationSlice.actions.deleteGeolocation({
                        id: item.id,
                      })
                    );
                  }}
                >
                  удалить
                </span>,
              ]}
            >
              <List.Item.Meta description={item.name} />
            </List.Item>
          )}
        />
      </div>
    </>
  );
};
