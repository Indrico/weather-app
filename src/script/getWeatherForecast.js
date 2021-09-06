import axios from "axios";
import { BASE_URL, APP_KEY } from "./config";

const getWeatherForecast = async () => {
    const forecastListElement = document.querySelector("forecast-list");
    let latitude = sessionStorage.getItem("latitude");
    let longitude = sessionStorage.getItem("longitude");
    let city = sessionStorage.getItem("city");
    let units = sessionStorage.getItem("units");

    if (city != null) {
        try {
            forecastListElement.units = units;
            let currentForecast = await axios.get(`${BASE_URL}/forecast?appid=${APP_KEY}&q=${city}&units=${units}&cnt=7`)
            forecastListElement.forecasts = currentForecast.data.list;
        } catch {
            console.log(error)
        }
    } else if (latitude != "" && longitude != "") {
        try {
            forecastListElement.units = units;
            let currentForecast = await axios.get(`${BASE_URL}/forecast?appid=${APP_KEY}&lat=${latitude}&lon=${longitude}&units=${units}&cnt=7`)
            forecastListElement.forecasts = currentForecast.data.list;
        } catch (error) {
            console.log(error)   
        }
    } else {
        try {
            forecastListElement.units = units;
            let currentForecast = await axios.get(`${BASE_URL}/forecast?appid=${APP_KEY}&q=Tangerang&units=${units}&cnt=7`)
            forecastListElement.forecasts = currentForecast.data.list;
        } catch (error) {
            console.log(error)
        }
    }
}

export default getWeatherForecast;