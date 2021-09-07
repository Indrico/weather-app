import '../Components/side-bar';
import '../Components/darkmode-toggle';
import '../Components/main-content';
import '../Components/desktop-status';
import '../Components/forecast-list';
import '../Components/units';
import '../Components/loading';
import '../Components/error-toast';
import 'regenerator-runtime';
import getWeatherData from './getInitialWeatherData';
import getWeatherForecast from './getWeatherForecast';
import getWeather from './getWeather';

const main = () => {
  const sideBarElement = document.querySelector('side-bar');
  const darkModeElement = document.querySelector('darkmode-toggle');
  const unitsElement = document.querySelector('units-element');

  const sideBarClose = () => {
    const sidebar = document.querySelector('#sidebar');
    const transparentBackground = document.querySelector('#transparent-bg');

    sidebar.style.transform = 'translateX(-100%)';
    transparentBackground.style.display = 'none';
  };

  const sideBarOpen = () => {
    const sidebar = document.querySelector('#sidebar');
    const transparentBackground = document.querySelector('#transparent-bg');
    document.querySelector('#search-input').focus();

    sidebar.style.transform = 'translateX(0%)';
    transparentBackground.style.display = 'block';
  };

  const searchLocation = () => {
    const city = sideBarElement.value;
    sessionStorage.setItem('city', city);
    getWeather();
    getWeatherForecast();
    sideBarClose();
  };

  const keyInput = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      searchLocation();
    }
  };

  const darkModeToggle = () => {
    const { body } = document;
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
      localStorage.setItem('darkmode', 'enabled');
    } else {
      localStorage.setItem('darkmode', 'disabled');
    }
  };

  const setMetric = () => {
    sessionStorage.setItem('units', 'metric');
    getWeather('metric');
    getWeatherForecast('metric');
    document.querySelector('#metric').classList.add('active');
    document.querySelector('#imperial').classList.remove('active');
  };

  const setImperial = () => {
    sessionStorage.setItem('units', 'imperial');
    getWeather('imperial');
    getWeatherForecast('imperial');
    document.querySelector('#metric').classList.remove('active');
    document.querySelector('#imperial').classList.add('active');
  };

  sideBarElement.closeSideBar = sideBarClose;
  sideBarElement.searchLocation = searchLocation;
  sideBarElement.keyInput = keyInput;

  darkModeElement.toggleDarkMode = darkModeToggle;

  unitsElement.metric = setMetric;
  unitsElement.imperial = setImperial;

  const darkmode = localStorage.getItem('darkmode');
  if (darkmode === 'enabled') {
    const { body } = document;
    body.classList.add('dark');
    document.querySelector('#toggle-dark-mode').checked = true;
  } else {
    const { body } = document;
    body.classList.remove('dark');
    document.querySelector('#toggle-dark-mode').checked = false;
  }

  document.querySelector('#cari-tempat').addEventListener('click', sideBarOpen);
  document.querySelector('#search-input').addEventListener('keyup', keyInput);

  getWeatherData();
};

export default main;
