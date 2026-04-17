const claveApi = '9dad84950e1349bca6e21831260804'
const idioma ='es' ;
const inputCiudad= document.getElementById('input-ciudad')

async function obtenerClima() {

    const ciudad =inputCiudad.value;

    if (!ciudad) {
       alert('por favor, ingrese una ciudad');
       return;
    }

    const apliClimaActual =  `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`

    const response = await fetch(apliClimaActual);
    const data = await response.json();

    mostrarClima(data);
}

function mostrarClima(data) {
    document.querySelector('.clima_icono').src =data.current.condition.icon;
    document.querySelector('.climaTexto').innerHTML =data.current.condition.text;
    document.querySelector('.temp').innerHTML = data.current.temp_c +'°c';
    document.querySelector('.ciudad').innerHTML = data.location.name;
    document.querySelector('.humedad').innerHTML = data.current.humidity + "%";
    document.querySelector('.viento').innerHTML = data.current.wind_kph + ' km/h';
}