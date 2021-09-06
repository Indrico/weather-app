const renderForecastData = (data) => {
    document.querySelector('#nama-tempat').innerHTML = `${data.data.name}`;
    setWeatherImage(data.data.weather[0].description);
    kondisiCuacaIndonesia(data.data.weather[0].description);
    document.querySelector('#suhu-sekarang').innerHTML = `${Math.round(data.data.main.temp)}°C`;
    document.querySelector('#mobile-humidity').innerHTML = `${data.data.main.humidity}%`;
    document.querySelector('#mobile-air-pressure').innerHTML = `${data.data.main.pressure} mb`;
    document.querySelector('#mobile-wind-speed').innerHTML = `${data.data.wind.speed} km/h`;
}