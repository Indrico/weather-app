import Clear from '../assets/images/Clear.png';
import HeavyCloud from '../assets/images/HeavyCloud.png';
import LightCloud from '../assets/images/LightCloud.png';
import HeavyRain from '../assets/images/HeavyRain.png';
import LightRain from '../assets/images/LightRain.png';
import Snow from '../assets/images/Snow.png';
import Thunderstorm from '../assets/images/Thunderstorm.png';

class ForecastItem extends HTMLElement {
    constructor() {
        super()
    }

    set forecast(forecast) {
        this._forecast = forecast;
        this.render();
    }

    set units(units) {
        this._units = units;
    }

    setWeatherImage = (description) => {
        let data = "";
        if (description == "clear sky") {
            data = Clear;
        } else if (description == "few clouds") {
            data = LightCloud
        } else if (description == "scattered clouds") {
            data = LightCloud
        } else if (description == "broken clouds") {
            data = LightCloud
        } else if (description == "overcast clouds") {
            data = HeavyCloud
        } else if (description == "light rain") {
            data = LightRain
        } else if (description == "moderate rain") {
            data = HeavyRain
        } else if (description == "heavy intensity rain") {
            data = HeavyRain
        }else if (description == "thunderstorm") {
            data = Thunderstorm
        } else if (description == "snow") {
            data = Snow
        } else if (description == "mist") {
            data = LightCloud
        }
        return data;
    }
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="transition-all duration-500 dark:text-white bg-blue-300 dark:bg-[#1E213A] p-4 flex justify-center items-center flex-col rounded-md">
            <h3 class="text-2xl xl:text-lg 2xl:text-xl 3xl:text-2xl" id="waktu">${this._forecast.dt_txt.substring(5,16)}</h3>
            <img src="${this.setWeatherImage(this._forecast.weather[0].description)}" class="xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-36 3xl:h-36 mt-2 3xl:mt-4 object-contain z-10">
            <div class="flex justify-between w-full mt-2 px-3 3xl:mt-4 3xl:px-6 3xl:text-xl">
                <p class="font-semibold">${Math.round(this._forecast.main.temp_max)}°${this._units == "metric" ? "C" : "F"}</p>
                <p class="text-gray-700 dark:text-[#A09FB1]">${Math.round(this._forecast.main.temp_min)}°${this._units == "metric" ? "C" : "F"}</p>
            </div>
        </div>
        `
    }
}

customElements.define("forecast-item", ForecastItem);