import React from 'react';
import FireFilled from '@ant-design/icons/FireFilled';

export const DayWeather = () => {
    return (
        <>
            <div className='p-5 max-w-sm w-full rounded-md shadow-2xl'>
                <div className='flex justify-between items-center w-full mb-7'>
                    <div>
                        <div className='text-8xl font-medium text-[#4793ff]'>20°</div>
                        <div className='text-4xl'>Сегодня</div>
                    </div>
                    <FireFilled/>
                </div>
                <div className='text-2xl'>
                    <div>Местное время: <span>21:54</span></div>
                    <div>Местность: <span>Стерлитамак</span></div>
                </div>
            </div>
        </>
    )
}