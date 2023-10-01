

const key = 'ea9e6b85ea5d12f0b7c99ca542d15d71';

function obtenerTemperatura(nombreCiudad) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&appid=${key}`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const elementoCiudad = document.getElementById('nombreCiudad');
      const elementoTemperatura = document.getElementById('temperatura');
      elementoCiudad.textContent = data.name;
      const temperatura = (data.main.temp - 273.15);
      elementoTemperatura.textContent = `${temperatura.toFixed(2)}`;
    })
    .catch((error) => {
      console.error('Error', error);
    });
}

const botonBusqueda = document.getElementById('busqueda');
const ciudad = document.getElementById('ciudad');
botonBusqueda.addEventListener('click', function () {
  const ciudadInput = ciudad.value.trim();
  if (ciudadInput) {
    obtenerTemperatura(ciudadInput);
  } else {
    alert('Por favor, ingresa la ciudad');
  }
});