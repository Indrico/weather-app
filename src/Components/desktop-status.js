import Visibility from '../assets/images/eye.svg';
import Pressure from '../assets/images/steam-air.svg';
import Humidity from '../assets/images/water-drop.svg';
import WindSpeed from '../assets/images/wind.svg';

class DesktopStatus extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="grid grid-cols-2 xl:gap-4 2xl:gap-6 3xl:gap-8 xl:mt-4 2xl:mt-8">
            <div class="transition-all duration-500 bg-blue-400 dark:bg-[rgb(30,33,58)] border-rounded text-white p-4 flex flex-col items-center justify-center rounded-xl">
                <div class="xl:text-xl 2xl:text-2xl 3xl:text-3xl xl:mb-2 2xl:mb-3 3xl:mb-4 flex items-center">
                    <p class="">Angin</p> 
                    <img src="${WindSpeed}" class="filter-white w-12 h-12 ml-5 z-10">
                </div>
                <p class="xl:text-3xl 2xl:text-4xl 3xl:text-6xl font-medium xl:mb-2 2xl:mb-3 3xl:mb-4">
                    <span class="xl:text-4xl 2xl:text-6xl 3xl:text-8xl font-bold" id="wind-speed">8</span>
                    km/h
                </p>
            </div>
            <div class="transition-all duration-500 bg-blue-400 dark:bg-[rgb(30,33,58)] border-rounded text-white p-4 flex flex-col items-center justify-center rounded-xl">
                <div class="xl:text-xl 2xl:text-2xl 3xl:text-3xl xl:mb-2 2xl:mb-3 3xl:mb-4 flex items-center">
                    <p class="">Kelembaban Udara</p> 
                    <img src="${Humidity}" class="filter-white w-12 h-8 ml-5 z-10">
                </div>
                <p class="xl:text-3xl 2xl:text-4xl 3xl:text-6xl font-medium xl:mb-2 2xl:mb-3 3xl:mb-4">
                    <span class="xl:text-4xl 2xl:text-6xl 3xl:text-8xl font-bold" id="humidity">84</span>
                    %
                </p>
            </div>
            <div class="transition-all duration-500 bg-blue-400 dark:bg-[rgb(30,33,58)] border-rounded text-white p-4 flex flex-col items-center justify-center rounded-xl">
                <div class="xl:text-xl 2xl:text-2xl 3xl:text-3xl xl:mb-2 2xl:mb-3 3xl:mb-4 flex items-center">
                    <p class="">Visibilitas</p> 
                    <img src="${Visibility}" class="filter-white w-8 h-8 ml-5 z-10">
                </div>
                <p class="xl:text-3xl 2xl:text-4xl 3xl:text-6xl font-medium xl:mb-2 2xl:mb-3 3xl:mb-4">
                    <span class="xl:text-4xl 2xl:text-6xl 3xl:text-8xl font-bold" id="visibility">10</span>
                    km
                </p>
            </div>
            <div class="transition-all duration-500 bg-blue-400 dark:bg-[rgb(30,33,58)] border-rounded text-white p-4 flex flex-col items-center justify-center rounded-xl">
                <div class="xl:text-xl 2xl:text-2xl 3xl:text-3xl xl:mb-2 2xl:mb-3 3xl:mb-4 flex items-center">
                    <p class="">Tekanan Udara</p> 
                    <img src="${Pressure}" class="filter-white w-12 h-8 ml-5 z-10">
                </div>
                <p class="xl:text-3xl 2xl:text-4xl 3xl:text-6xl font-medium xl:mb-2 2xl:mb-3 3xl:mb-4">
                    <span class="xl:text-4xl 2xl:text-6xl 3xl:text-8xl font-bold" id="air-pressure">823</span>
                    mb
                </p>
            </div>
        </div>
        `
    }
}

customElements.define("desktop-status", DesktopStatus);