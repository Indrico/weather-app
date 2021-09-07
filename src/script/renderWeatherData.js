/* eslint-disable no-console */
import Clear from '../assets/images/Clear.png';
import HeavyCloud from '../assets/images/HeavyCloud.png';
import LightCloud from '../assets/images/LightCloud.png';
import HeavyRain from '../assets/images/HeavyRain.png';
import LightRain from '../assets/images/LightRain.png';
import Snow from '../assets/images/Snow.png';
import Thunderstorm from '../assets/images/Thunderstorm.png';
import { loadingFinished } from './loading-toggle';
import { setErrorMessage, showError } from './error-toggle';

const setWeatherImage = (description) => {
  const gambarCuaca = document.querySelector('#gambar-cuaca');
  if (description === 'clear sky') {
    gambarCuaca.src = Clear;
  } else if (description === 'few clouds') {
    gambarCuaca.src = LightCloud;
  } else if (description === 'scattered clouds') {
    gambarCuaca.src = HeavyCloud;
  } else if (description === 'broken clouds') {
    gambarCuaca.src = LightCloud;
  } else if (description === 'shower rain') {
    gambarCuaca.src = LightRain;
  } else if (description === 'rain') {
    gambarCuaca.src = HeavyRain;
  } else if (description === 'thunderstorm') {
    gambarCuaca.src = Thunderstorm;
  } else if (description === 'snow') {
    gambarCuaca.src = Snow;
  } else if (description === 'mist') {
    gambarCuaca.src = LightCloud;
  }
};

const kondisiCuacaIndonesia = (kondisiCuaca) => {
  const kondisiSekarang = document.querySelector('#kondisi-sekarang');
  if (kondisiCuaca === 'clear sky') {
    kondisiSekarang.innerHTML = 'Cerah';
  } else if (kondisiCuaca === 'few clouds') {
    kondisiSekarang.innerHTML = 'Berawan';
  } else if (kondisiCuaca === 'scattered clouds') {
    kondisiSekarang.innerHTML = 'Berawan';
  } else if (kondisiCuaca === 'broken clouds') {
    kondisiSekarang.innerHTML = 'Berawan';
  } else if (kondisiCuaca === 'shower rain') {
    kondisiSekarang.innerHTML = 'Hujan Ringan';
  } else if (kondisiCuaca === 'rain') {
    kondisiSekarang.innerHTML = 'Hujan';
  } else if (kondisiCuaca === 'thunderstorm') {
    kondisiSekarang.innerHTML = 'Hujan Badai';
  } else if (kondisiCuaca === 'snow') {
    kondisiSekarang.innerHTML = 'Salju';
  } else if (kondisiCuaca === 'mist') {
    kondisiSekarang.innerHTML = 'Berkabut';
  }
};

const renderWeatherData = (data, units = 'metric') => {
  document.querySelector('#nama-tempat').innerHTML = `${data.data.name}`;
  setWeatherImage(data.data.weather[0].description);
  kondisiCuacaIndonesia(data.data.weather[0].description);
  document.querySelector('#suhu-sekarang').innerHTML = `${Math.round(data.data.main.temp)}°${units === 'metric' ? 'C' : 'F'}`;
  document.querySelector('#mobile-humidity').innerHTML = `${data.data.main.humidity}%`;
  document.querySelector('#mobile-air-pressure').innerHTML = `${data.data.main.pressure} mb`;
  document.querySelector('#mobile-wind-speed').innerHTML = `${data.data.wind.speed} ${units === 'metric' ? 'm/s' : 'mph'}`;

  document.querySelector('#wind-speed').innerHTML = `${data.data.wind.speed}`;
  document.querySelector('#units-desktop').innerHTML = `${units === 'metric' ? 'm/s' : 'mph'}`;
  document.querySelector('#humidity').innerHTML = `${data.data.main.humidity}`;
  document.querySelector('#visibility').innerHTML = `${Math.round(data.data.visibility / 1000)}`;
  document.querySelector('#air-pressure').innerHTML = `${data.data.main.pressure}`;
};

const renderWeatherError = (error) => {
  loadingFinished();
  sessionStorage.removeItem('city');

  console.log(error.response);

  if (error.response === undefined) {
    setErrorMessage('Koneksi bermasalah');
  } else if (error.response.status === 404) {
    setErrorMessage('Kota tidak ditemukan');
  }

  showError();
};

export { renderWeatherData, renderWeatherError };
