import React from 'react';
import FireFilled from '@ant-design/icons/FireFilled';
import { Button, Space } from 'antd';

export const Header = () => {
    return (
        <>
            <div className='flex items-center w-full justify-between'>
                <div className='flex items-center'>
                    <div className='mr-5'><FireFilled/></div>
                    <div className='uppercase font-bold text-2xl'>Weather-App</div>
                </div>
                <div className='flex items-center'>
                    <Space wrap>
                        <Button>Установить геолокацию</Button>
                        <Button>Добавить геолокацию</Button>
                        <Button>Сохранить геолокацию</Button>
                    </Space>
                </div>
            </div>
        </>
    )
}