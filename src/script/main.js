import "../Components/side-bar.js"
import "../Components/darkmode-toggle"
import "../Components/main-content"
import "../Components/desktop-status"
import "../Components/forecast-list"
import "regenerator-runtime";
import getWeatherData from "./getWeather.js"

const main = () => {
    const sideBarElement = document.querySelector('side-bar');
    const darkModeElement = document.querySelector('darkmode-toggle')

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

    const darkModeToggle = () => {
        const body = document.body;
        body.classList.toggle('dark');
    }

    sideBarElement.closeSideBar = sideBarClose;
    sideBarElement.searchLocation = searchLocation;
    
    darkModeElement.toggleDarkMode = darkModeToggle;

    document.querySelector('#cari-tempat').addEventListener('click', sideBarOpen);

    getWeatherData();
}

export default main;