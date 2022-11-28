import React from 'react';
import { Tabs } from 'antd';
import { DetailWeatherDays } from './DetailWeatherDays';

export interface TabsDays {
    value: string
}

export const TabsDays = () => {
    const tabsDays: TabsDays[] = [
        {
            value: '28.11.2022'
        },
        {
            value: '29.11.2022'
        },
        {
            value: '30.11.2022'
        },
        {
            value: '01.12.2022'
        },
        {
            value: '02.12.2022'
        },
        {
            value: '03.12.2022'
        },
        {
            value: '04.12.2022'
        }
    ];

    return (
        <>
            <div className='flex justify-between mb-10'>
                <div className='flex'>
                    {
                        tabsDays.map((tabDay) => {
                            return (
                                <div className='flex items-center justify-center active:bg-[#4793ff] active:text-[#fff] rounded-md border shadow-xl py-2.5 px-5 mr-4 text-lg' key={tabDay.value}>{tabDay.value}</div>
                                // <Tabs defaultActiveKey="1">
                                //     <Tabs.TabPane tab={tab.value}>
                                //         <DetailWeatherDays/>
                                //     </Tabs.TabPane>
                                // </Tabs>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}