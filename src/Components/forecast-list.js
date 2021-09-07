/* eslint-disable no-underscore-dangle */
import './forecast-item';
import Clear from '../assets/images/Clear.png';
import HeavyCloud from '../assets/images/HeavyCloud.png';
import LightCloud from '../assets/images/LightCloud.png';
import HeavyRain from '../assets/images/HeavyRain.png';
import LightRain from '../assets/images/LightRain.png';
import Loading from './loading';

class ForecastList extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="transition-all duration-500 dark:text-white bg-blue-300 dark:bg-[#1E213A] p-4 flex justify-center items-center flex-col rounded-md">
          <h3 class="text-2xl xl:text-lg 2xl:text-xl 3xl:text-2xl">Tomorrow</h3>
          <img src="${Clear}" class="xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-36 3xl:h-36 mt-2 3xl:mt-4 object-contain z-10">
          <div class="flex justify-between w-full mt-2 px-3 3xl:mt-4 3xl:px-6 3xl:text-xl">
              <p class="font-semibold">15°C</p>
              <p class="text-gray-700 dark:text-[#A09FB1]">10°C</p>
          </div>
      </div>
      <div class="transition-all duration-500 dark:text-white bg-blue-300 dark:bg-[#1E213A] p-4 flex justify-center items-center flex-col rounded-md">
          <h3 class="text-2xl xl:text-lg 2xl:text-xl 3xl:text-2xl">11 Sept</h3>
          <img src="${HeavyRain}" class="xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-36 3xl:h-36 mt-2 3xl:mt-4 object-contain z-10">
          <div class="flex justify-between w-full xl:mt-2 xl:px-3 3xl:mt-4 3xl:px-6 3xl:text-xl">
              <p class="font-semibold">20°C</p>
              <p class="text-gray-700 dark:text-[#A09FB1]">16°C</p>
          </div>
      </div>
      <div class="transition-all duration-500 dark:text-white bg-blue-300 dark:bg-[#1E213A] p-4 flex justify-center items-center flex-col rounded-md">
          <h3 class="text-2xl xl:text-lg 2xl:text-xl 3xl:text-2xl">12 Sept</h3>
          <img src="${HeavyCloud}" class="xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-36 3xl:h-36 mt-2 3xl:mt-4 object-contain z-10">
          <div class="flex justify-between w-full xl:mt-2 xl:px-3 3xl:mt-4 3xl:px-6 3xl:text-xl">
              <p class="font-semibold">15°C</p>
              <p class="text-gray-700 dark:text-[#A09FB1]">10°C</p>
          </div>
      </div>
      <div class="transition-all duration-500 dark:text-white bg-blue-300 dark:bg-[#1E213A] p-4 flex justify-center items-center flex-col rounded-md">
          <h3 class="text-2xl xl:text-lg 2xl:text-xl 3xl:text-2xl">13 Sept</h3>
          <img src="${LightRain}" class="xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-36 3xl:h-36 mt-2 3xl:mt-4 object-contain z-10">
          <div class="flex justify-between w-full xl:mt-2 xl:px-3 3xl:mt-4 3xl:px-6 3xl:text-xl">
              <p class="font-semibold">15°C</p>
              <p class="text-gray-700 dark:text-[#A09FB1]">10°C</p>
          </div>
      </div>
      <div class="transition-all duration-500 dark:text-white bg-blue-300 dark:bg-[#1E213A] p-4 flex justify-center items-center flex-col">
          <h3 class="text-2xl xl:text-lg 2xl:text-xl 3xl:text-2xl">14 Sept</h3>
          <img src="${LightCloud}" class="xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-36 3xl:h-36 mt-2 3xl:mt-4 object-contain z-10">
          <div class="flex justify-between w-full xl:mt-2 xl:px-3 3xl:mt-4 3xl:px-6 3xl:text-xl">
              <p class="font-semibold">15°C</p>
              <p class="text-gray-700 dark:text-[#A09FB1]">10°C</p>
          </div>
      </div>
      `; // Render Dummy data
  }

  set forecasts(forecasts) {
    this._forecasts = forecasts;
    this.render();
  }

  set units(units) {
    this._units = units;
  }

  get units() {
    return this._units;
  }

  static renderError() {
    // console.log(message);
  }

  render() {
    Loading.loadingFinished();
    this.innerHTML = '';
    for (let i = 2; i < 7; i += 1) {
      const forecastItem = document.createElement('forecast-item');
      forecastItem.forecast = this._forecasts[i];
      forecastItem.units = this.units;
      this.appendChild(forecastItem);
    }
  }
}

customElements.define('forecast-list', ForecastList);
