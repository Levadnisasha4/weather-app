import axios, { AxiosResponse } from 'axios';
import { Weather } from '../store/types/types';

export class WeatherService {
    static getCurrentWeather(lat: string, lon: string): Promise<AxiosResponse<Weather>> {
        return axios.get<Weather>(`https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}&extra=true`, {
            headers: {
                'X-Yandex-API-Key': '7f823399-571e-478a-98b8-268b51534517'
            }
        });
    }

}