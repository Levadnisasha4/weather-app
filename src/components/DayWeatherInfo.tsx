import React from 'react';
import FireFilled from '@ant-design/icons/FireFilled';
import { DayWeatherInfoItem } from './DayWeatherInfoItem';

export interface Item {
    name: string,
    value: string
}

export const DayWeatherInfo = () => {
    const infoWeatherItems: Item[] = [
        {
            name: 'Широта и долгота',
            value: '123'
        },
        {
            name: 'Температура (ощущается)',
            value: 'Ощущается как 17°'
        },
        {
            name: 'Описание',
            value: 'Солнечно и ветрено'
        },
        {
            name: 'Скорость ветра',
            value: '3 м/с'
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
            <div className='relative pt-2.5 px-10 max-w-3xl w-full rounded-md shadow-2xl'>
                <div>
                    {
                        infoWeatherItems.map((infoItem: Item) => {
                            return <DayWeatherInfoItem infoItem={infoItem}/>
                        })
                    }
                </div>
                <FireFilled className='absolute top-0 right-0'/>
            </div>
        </>
    )
}