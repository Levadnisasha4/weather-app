import React from 'react';
import { Typography, Input, Space, Button } from 'antd';

export const SaveGeolocation = () => {
    return (
        <>
            <div className='flex p-5 max-w-sm w-full rounded-md shadow-2xl'>
                <Typography className='font-semibold text-base leading-normal mb-2.5'>Сохранить геопозицию</Typography>
                <p className='mb-2.5'>Введите название геопозиции</p>
                <Input className='mb-2.5' placeholder="Название..." />
                <div className='flex items-end justify-center'>
                    <Space wrap>
                        <Button>Сохранить геопозицию</Button>
                    </Space>
                </div>
            </div>
        </>
    )
}