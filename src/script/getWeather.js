import axios from "axios";
import {renderWeatherData, renderWeatherError} from "./renderWeatherData";

const getWeatherData = () => {
    const APP_KEY = "271b2d7bd990a7cc3c89e86b8260caf5";
    const BASE_URL = "https://api.openweathermap.org/data/2.5/";
    const forecastListElement = document.querySelector("forecast-list");

    let latitude = "";
    let longitude = "";

    const getWeather = async () => {
        if (latitude != "" && longitude != "") {
            console.log("Menggunakan lokasi saat ini");
            try {
                let currentWeather = await axios.get(`${BASE_URL}/weather?appid=${APP_KEY}&lat=${latitude}&lon=${longitude}&units=metric`)
                renderWeatherData(currentWeather);
            } catch (error) {
                // Error Message.
                renderWeatherError(error);
            }
        } else {
            console.log("Menggunakan lokasi Tangerang");
            try {
                let currentWeather = await axios.get(`${BASE_URL}/weather?appid=${APP_KEY}&q=Tangerang&units=metric`)
                renderWeatherData(currentWeather);
            } catch (error) {
                renderWeatherError(error);
            }
        }
    }

    const getWeatherForecast = async () => {
        if (latitude != "" && longitude != "") {
            try {
                let currentForecast = await axios.get(`${BASE_URL}/forecast?appid=${APP_KEY}&lat=${latitude}&lon=${longitude}&units=metric`)
                forecastListElement.forecasts = currentForecast.data.list;
                console.log(currentForecast);
            } catch (error) {
                console.log(error)   
            }
        } else {
            try {
                let currentForecast = await axios.get(`${BASE_URL}/forecast?appid=${APP_KEY}&q=Tangerang&units=metric`)
                forecastListElement.forecasts = currentForecast.data.list;
                console.log(currentForecast);
            } catch (error) {
                console.log(error)
            }
        }
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                // getWeather();
                getWeatherForecast();
            }, (error) => {
                if (error.code == error.PERMISSION_DENIED) {
                    console.log("Akses lokasi tidak diizinkan oleh user")
                    getWeather();
                    getWeatherForecast();
                }
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    getLocation();
}

export default getWeatherData;