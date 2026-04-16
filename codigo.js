const claveApi = '9dad84950e1349bca6e21831260804'
const idioma ='es' ;
const inoCity = document.getElementById('input-ciudad')

async function obtenerClima() {

    const city =ipnCity.value;

    if (!city) {
       alert('por favor,ingrese una city');
       return;
    }

    const apliClimaActual =  "httsp://api.weatherapi.com/v1/current.json?q=s{ciudad}&lang=s{idioma}&    key=s {claveApi}"

    const response = await fetch(apliClimaActual);
    const data = await response.json();

    mostraClima(data);
}

function mostrarClima(data) {
    document.querySelector('.clima-icono').src =data.current.condition.icon;
    document.querySelector('.clima-texto').innerHTML =data.current.condition.text;
    document.querySelector('.temp').innerHTML = data.current.temp_c +'°c';
    document.querySelector('.ciudad').innerHTML = data.location.name;
    document.querySelector('.humedad').innerHTML = data.current.humidity + "%";
    document.querySelector('.viento').innerHTML = data.current.wind_kph + ' km/h';
}