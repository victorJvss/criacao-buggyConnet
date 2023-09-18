
// Funcão usada com a biblioteca LEAFLET para saber sua posição atual e indicar ela no mapa 

function posicaoAtual(pos){
    const latitude = pos.coords.latitude
    const longitude = pos.coords.longitude

    var map = L.map('home__destaque__proximo-a-voce__mapa').setView([latitude,longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Eu estou aqui!.')
        .openPopup();

}

navigator.geolocation.getCurrentPosition(posicaoAtual)
