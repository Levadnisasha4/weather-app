import React from 'react';
import FireFilled from '@ant-design/icons/FireFilled';
import { Item } from './DayWeatherInfo';

interface Props {
    infoItem: Item
}

export const DayWeatherInfoItem = ({ infoItem }:  Props) => {
    const {name, value} = infoItem;


    return (
        <>
            <div className='relative flex items-center mb-1.5 last:mb-0'>
                <div className='w-9 h-9 flex items-center justify-center mr-5 shadow-2xl rounded-full'>
                    <FireFilled/>
                </div>
                <div className='text-sm mr-5 text-slate-500'>{name}</div>
                <div className='text-sm'>{value}</div>
            </div>
        </>
    )
}