import React from 'react';
import { DayWeatherInfoItem } from '../DayWeatherInfoItem';
import { TabsDays } from './TabsDays';

export interface ItemDetailWeatherDays {
    name: string,
    value: string
}

export const DetailWeatherDays = () => {
    const daysMainData: ItemDetailWeatherDays[]  = [
        {
            name: 'Дата',
            value: '27.11.2022'
        },
        {
            name: 'Минимальная температура',
            value: '17°'
        },
        {
            name: 'Максимальная температура',
            value: '18°'
        },
        {
            name: 'Средняя температура',
            value: '17°'
        },
        {
            name: 'Температура (ощущается)',
            value: '17°'
        }
    ];

    const daysOthersData = [
        {
            name: 'Описание',
            value: 'Солнечно'
        },
        {
            name: 'Скорость ветра',
            value: '17 м/с'
        },
        {
            name: 'Атмосферное давление',
            value: '765 мм ртутного столба'
        },
        {
            name: 'Влажность',
            value: 'Влажно'
        }
    ];

    return (
        <>
            <TabsDays/>
            <div className='flex flex-row justify-between py-2.5 px-10 w-full rounded-md shadow-2xl'>
                <div className='w-2/4 border-r flex flex-col'>
                    {
                        daysMainData.map((itemDays: ItemDetailWeatherDays) => {
                            return <DayWeatherInfoItem infoItem={itemDays}/>
                        })
                    }
                </div>
                <div className='w-2/4 flex flex-col pl-10 items-start'>
                    {
                        daysOthersData.map((itemDays: ItemDetailWeatherDays) => {
                            return <DayWeatherInfoItem infoItem={itemDays}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}