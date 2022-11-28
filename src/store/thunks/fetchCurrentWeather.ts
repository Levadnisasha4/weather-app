import { WeatherService } from '../../services/WeatherService';
import { currentWeatherSlice } from '../slices/currentWeatherSlice';
import { AppDispatch } from '../store';

export const fetchCurrentWeather = (payload: string, payloadd: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
        const res = await WeatherService.getCurrentWeather(payload, payloadd);
        if (res.status === 200) {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
        } else {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
        }
    } catch (error) {
        console.log(error);
    }
}