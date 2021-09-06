import getWeather from "./getWeather";
import getWeatherForecast from "./getWeatherForecast";

const getWeatherData = () => {
    if (sessionStorage.getItem("units")){
        if (sessionStorage.getItem("units") == "metric") {
            document.querySelector('#metric').classList.add('active');
            document.querySelector('#imperial').classList.remove('active');
        }else {
            document.querySelector('#metric').classList.remove('active');
            document.querySelector('#imperial').classList.add('active');
        }
    }else {
        sessionStorage.setItem("units", "metric");
    }
    const getLocation = () => {
        if (sessionStorage.getItem("latitude") == null) {
            // Cek kalau data latitude sudah tersimpan
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    let latitude = position.coords.latitude;
                    let longitude = position.coords.longitude;
                    sessionStorage.setItem("latitude", latitude);
                    sessionStorage.setItem("longitude", longitude);
                    getWeather();
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
        } else {
            getWeather();
            getWeatherForecast();
        }
    }

    getLocation();
}

export default getWeatherData;