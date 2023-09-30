const key = 'ea9e6b85ea5d12f0b7c99ca542d15d71';
const ciudad = 'Montevideo';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`;

fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(`Ciudad: ${data.name}`);
    console.log(`Temperatura: ${data.main.temp - 273.15} °C`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
