import React, { useEffect } from 'react';
import './App.css';
import './index.css';
import { Header } from './components/Header';
import { DayWeather } from './components/DayWeather';
import { DayWeatherInfo } from './components/DayWeatherInfo';
import { DetailWeatherDays } from './components/DetailWeather/DetailWeatherDays';
import { useCustomDispatch } from './hooks/store';
import { fetchCurrentWeather } from './store/thunks/fetchCurrentWeather';

function App() {
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeather('56.7858', '60.5841'));
  });

  return (
    <>
      <div className='max-w-7xl h-16 flex items-center m-0 m-auto mt-5 mb-10 rounded-md shadow-2xl'>
        <Header/>
      </div>
      <div className='max-w-7xl flex justify-between m-0 m-auto mb-10'>
          <DayWeather/>
          <DayWeatherInfo/>
      </div>
      <div className='max-w-7xl flex flex-col m-0 m-auto'>
        <DetailWeatherDays/>
      </div>
    </>
  );
}

export default App;
//border rounded-md border-black border-solid