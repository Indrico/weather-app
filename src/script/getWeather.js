import axios from 'axios';
import { renderWeatherData, renderWeatherError } from './renderWeatherData';
import { BASE_URL, APP_KEY } from './config';

const getWeather = async () => {
  const latitude = sessionStorage.getItem('latitude');
  const longitude = sessionStorage.getItem('longitude');
  const city = sessionStorage.getItem('city');
  const units = sessionStorage.getItem('units');

  if (city != null) {
    try {
      const currentWeather = await axios.get(`${BASE_URL}/weather?appid=${APP_KEY}&q=${city}&units=${units}`);
      renderWeatherData(currentWeather, units);
    } catch (error) {
      renderWeatherError(error);
    }
  } else if (latitude != null && longitude != null) {
    console.log('Menggunakan lokasi saat ini');
    try {
      const currentWeather = await axios.get(`${BASE_URL}/weather?appid=${APP_KEY}&lat=${latitude}&lon=${longitude}&units=${units}`);
      renderWeatherData(currentWeather, units);
    } catch (error) {
      renderWeatherError(error);
    }
  } else {
    console.log('Menggunakan lokasi Tangerang');
    sessionStorage.setItem('city', 'Tangerang');
    try {
      const currentWeather = await axios.get(`${BASE_URL}/weather?appid=${APP_KEY}&q=Tangerang&units=${units}`);
      renderWeatherData(currentWeather, units);
    } catch (error) {
      renderWeatherError(error);
    }
  }
};

export default getWeather;
