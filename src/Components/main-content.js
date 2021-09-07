import Clear from '../assets/images/Clear.png';
import Pressure from '../assets/images/steam-air.svg';
import Humidity from '../assets/images/water-drop.svg';
import WindSpeed from '../assets/images/wind.svg';

class MainContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  currentDate = () => {
    const today = new Date();
    const hari = today.getDay();

    const hariIndonesia = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const bulanIndonesia = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const date = `${hariIndonesia[hari]}, ${today.getDate()} ${bulanIndonesia[today.getMonth()]} ${today.getYear() + 1900}`;
    return date;
  }

  render() {
    this.innerHTML = `
        <main class="transition-all duration-500 p-8 bg-gradient-to-b from-[#3092d3] to-[#d4d8dd] dark:from-[#000046] dark:to-[#6ac7e0] h-screen flex flex-col justify-between xl:block xl:h-screen">
            <div class="flex justify-between">
                <div class="px-4 py-2 3xl:text-xl outline-none dark:text-white dark:bg-gray-600 border-2 border-gray-800 rounded-md w-48 xl:w-64 cursor-pointer" id="cari-tempat">
                    Cari Tempat
                </div>
                <div class="flex items-center">
                    <darkmode-toggle></darkmode-toggle>
                </div>
            </div>
            <div class="flex justify-center items-center mt-6 xl:mt-0 xl:h-[35vh] 3xl:h-[40vh] relative">
                <img loading="lazy" src="${Clear}" class="w-[8rem] xl:w-[8rem] 2xl:w-[10rem] 3xl:w-[12rem] z-10" id="gambar-cuaca">
            </div>
            <div class="flex justify-between items-center xl:h-[30vh] flex-col dark:text-white">
                <p class="mt-8 text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold" id="suhu-sekarang">25°C</p>
                <p class="mt-8 text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold" id="kondisi-sekarang">Cerah</p>
            </div>
            <div class="xl:hidden flex justify-between items-center my-5 dark:text-white">
                <div class="flex font-semibold">
                    <img loading="lazy" src="${Humidity}" class="dark:filter-white w-8 h-6 mr-2"> <span id="mobile-humidity">13%</span>
                </div>
                <div class="flex font-semibold">
                    <img loading="lazy" src="${Pressure}" class="dark:filter-white w-8 h-6 mr-2"> <span id="mobile-air-pressure">998 mb</span>
                </div>
                <div class="flex font-semibold">
                    <img loading="lazy" src="${WindSpeed}" class="dark:filter-white w-8 h-6 mr-2"> <span id="mobile-wind-speed">9 km/h </span>
                </div>
            </div>
            <div class="h-[20vh] flex flex-col justify-around items-center">
                <div class="flex justify-between text-lg 2xl:text-xl 3xl:text-2xl dark:text-white" id="tanggal-sekarang">
                    <p>${this.currentDate()}</p>
                </div>
                <p class="text-lg 2xl:text-xl 3xl:text-2xl dark:text-white medium flex justify-between items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 3xl:h-8 3xl:w-8 mr-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    <span id="nama-tempat">Jakarta</span>
                </p>
            </div>
        </main>
        `;
  }
}

customElements.define('main-content', MainContent);
