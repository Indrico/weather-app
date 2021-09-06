import axios from "axios";
import "../Components/side-bar.js"

const getWeatherData = () => {
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

const main = () => {
    const sideBarElement = document.querySelector('side-bar');

    const sideBarClose = () => {
        const sidebar = document.querySelector('#sidebar');
        const transparentBackground = document.querySelector('#transparent-bg');

        sidebar.style.transform = "translateX(-100%)";
        transparentBackground.style.display = "none";
    }

    const sideBarOpen = () => {
        const sidebar = document.querySelector('#sidebar');
        const transparentBackground = document.querySelector('#transparent-bg');

        sidebar.style.transform = "translateX(0%)";
        transparentBackground.style.display = "block";
    }

    const searchLocation = () => {
        console.log('Mencari Lokasi');
    }

    sideBarElement.closeSideBar = sideBarClose;
    sideBarElement.searchLocation = searchLocation;

    document.querySelector('#cari-tempat').addEventListener('click', sideBarOpen);
}

export default main;