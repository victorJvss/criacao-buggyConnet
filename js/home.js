const paginaUsuario = document.querySelector(".home__destaque__imagem");
const inputLocal = document.querySelector(".home__opcoes__local__input")

paginaUsuario.addEventListener('click', () => {
    window.location.href = "./profile.html"
})
          
let map;


async function initMap(pos) {
    
    const latitude = pos.coords.latitude
    const longitude = pos.coords.longitude
    
    map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.marker([latitude,longitude]).addTo(map)
        .bindPopup('Estou aqui!')
        .openPopup();
};

inputLocal.addEventListener("focusout", () => {
  navigator.geolocation.getCurrentPosition(idPlaces)
})

let rota;

async function idPlaces(pos) {
  
  const latitude = pos.coords.latitude
  const longitude = pos.coords.longitude
  
    const apiLugar = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': 'AIzaSyCVL6OdjgC8T8JYkQv2tB0YIhNAQWkY3XI',
      'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.priceLevel,places.id,places.location',
    },
    body: JSON.stringify({
      textQuery: `${inputLocal.value}`,
    }),
  });

  const apiLugarConvertido = await apiLugar.json();
 
  if(rota != undefined){
    rota.remove()

    rota = L.Routing.control({
      waypoints: [
          L.latLng(apiLugarConvertido.places[0].location.latitude, apiLugarConvertido.places[0].location.longitude),
          L.latLng(latitude, longitude)
          ]
        }).addTo(map);  
  }else{
    rota = L.Routing.control({
      waypoints: [
          L.latLng(apiLugarConvertido.places[0].location.latitude, apiLugarConvertido.places[0].location.longitude),
          L.latLng(latitude, longitude)
          ]
        }).addTo(map);
  }


  const opcoesInput = document.querySelector(".leaflet-container .leaflet-control-container")
  opcoesInput.childNodes[1].remove()
  

}


navigator.geolocation.getCurrentPosition(initMap)

