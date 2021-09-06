import './forecast-item.js'

class ForecastList extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="transition-all duration-500 dark:text-white bg-blue-300 dark:bg-[#1E213A] p-4 flex justify-center items-center flex-col rounded-md">
            <h3 class="text-2xl xl:text-lg 2xl:text-xl 3xl:text-2xl">Tomorrow</h3>
            <img src="" class="xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-36 3xl:h-36 mt-2 3xl:mt-4 object-contain z-10">
            <div class="flex justify-between w-full mt-2 px-3 3xl:mt-4 3xl:px-6 3xl:text-xl">
                <p class="font-semibold">15°C</p>
                <p class="text-gray-700 dark:text-[#A09FB1]">10°C</p>
            </div>
        </div>
        <div class="transition-all duration-500 dark:text-white bg-blue-300 dark:bg-[#1E213A] p-4 flex justify-center items-center flex-col rounded-md">
            <h3 class="text-2xl xl:text-lg 2xl:text-xl 3xl:text-2xl">11 Sept</h3>
            <img src="" class="xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-36 3xl:h-36 mt-2 3xl:mt-4 object-contain z-10">
            <div class="flex justify-between w-full xl:mt-2 xl:px-3 3xl:mt-4 3xl:px-6 3xl:text-xl">
                <p class="font-semibold">20°C</p>
                <p class="text-gray-700 dark:text-[#A09FB1]">16°C</p>
            </div>
        </div>
        <div class="transition-all duration-500 dark:text-white bg-blue-300 dark:bg-[#1E213A] p-4 flex justify-center items-center flex-col rounded-md">
            <h3 class="text-2xl xl:text-lg 2xl:text-xl 3xl:text-2xl">12 Sept</h3>
            <img src="" class="xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-36 3xl:h-36 mt-2 3xl:mt-4 object-contain z-10">
            <div class="flex justify-between w-full xl:mt-2 xl:px-3 3xl:mt-4 3xl:px-6 3xl:text-xl">
                <p class="font-semibold">15°C</p>
                <p class="text-gray-700 dark:text-[#A09FB1]">10°C</p>
            </div>
        </div>
        <div class="transition-all duration-500 dark:text-white bg-blue-300 dark:bg-[#1E213A] p-4 flex justify-center items-center flex-col rounded-md">
            <h3 class="text-2xl xl:text-lg 2xl:text-xl 3xl:text-2xl">13 Sept</h3>
            <img src="" class="xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-36 3xl:h-36 mt-2 3xl:mt-4 object-contain z-10">
            <div class="flex justify-between w-full xl:mt-2 xl:px-3 3xl:mt-4 3xl:px-6 3xl:text-xl">
                <p class="font-semibold">15°C</p>
                <p class="text-gray-700 dark:text-[#A09FB1]">10°C</p>
            </div>
        </div>
        <div class="transition-all duration-500 dark:text-white bg-blue-300 dark:bg-[#1E213A] p-4 flex justify-center items-center flex-col">
            <h3 class="text-2xl xl:text-lg 2xl:text-xl 3xl:text-2xl">14 Sept</h3>
            <img src="" class="xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 3xl:w-36 3xl:h-36 mt-2 3xl:mt-4 object-contain z-10">
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

    renderError(message) {
        console.log(message);
    }

    render() {
        this.innerHTML = "";
        console.log(this._forecasts);
        for (let i = 0; i < 5; i++) {
            const forecastItem = document.createElement('forecast-item')
            forecastItem.forecast = this._forecasts[i];
            this.appendChild(forecastItem)
        }
    }
}

customElements.define("forecast-list", ForecastList);