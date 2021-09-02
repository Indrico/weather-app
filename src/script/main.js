import axios from "axios";

function main() {
    const APP_KEY = "271b2d7bd990a7cc3c89e86b8260caf5";
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

    let latitude = "";
    let longitude = "";

    const getWeather = async () => {
        console.log(latitude, longitude);
        if (latitude != "" && longitude != "") {
            let data = await axios.get(`${BASE_URL}?appid=${APP_KEY}&lat=${latitude}&lon=${longitude}`);
            console.log("Menggunakan lokasi saat ini");
            console.log(data);
        } else {
            let data = await axios.get(`${BASE_URL}?appid=${APP_KEY}&q=Tangerang`);
            console.log("Menggunakan lokasi Tangerang");
            console.log(data);
        }
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                getWeather();
            }, (error) => {
                if (error.code == error.PERMISSION_DENIED) {
                    console.log("Akses lokasi tidak diizinkan oleh user")
                    getWeather();
                }
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
        
    }

    getLocation();
}

export default main;