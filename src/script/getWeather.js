import axios from "axios";
import {renderWeatherData, renderWeatherError} from "./renderWeatherData";
import { BASE_URL, APP_KEY } from "./config";

const getWeather = async () => {
    let latitude = sessionStorage.getItem("latitude");
    let longitude = sessionStorage.getItem("longitude");
    let city = sessionStorage.getItem("city");
    let units = sessionStorage.getItem("units");

    console.log(city);

    if (city != null){
        try {
            let currentWeather = await axios.get(`${BASE_URL}/weather?appid=${APP_KEY}&q=${city}&units=${units}`);
            console.log(currentWeather.data);
            renderWeatherData(currentWeather, units);
        } catch (error) {
            renderWeatherError(error);
        }
    }else if (latitude != null && longitude != null) {
        console.log("Menggunakan lokasi saat ini");
        try {
            let currentWeather = await axios.get(`${BASE_URL}/weather?appid=${APP_KEY}&lat=${latitude}&lon=${longitude}&units=${units}`);
            renderWeatherData(currentWeather, units);
        } catch (error) {
            renderWeatherError(error);
        }
    } else {
        console.log("Menggunakan lokasi Tangerang");
        sessionStorage.setItem('city', "Tangerang");
        try {
            let currentWeather = await axios.get(`${BASE_URL}/weather?appid=${APP_KEY}&q=Tangerang&units=${units}`)
            renderWeatherData(currentWeather, units);
        } catch (error) {
            renderWeatherError(error);
        }
    }
}

export default getWeather;