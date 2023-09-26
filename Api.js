const api_url = "https://back-end-transporte-academico.vercel.app/listaTodos";
const compartilhando = false;
var latitude = "-9.570223";
var longitude = "-35.771348";

const customIcon = L.icon({
  iconUrl: "./bus_des.png", // Substitua pelo caminho do seu ícone personalizado
  iconSize: [32, 32], // Tamanho do ícone em pixels
  iconAnchor: [16, 32], // Ponto de ancoragem do ícone (geralmente na metade inferior)
});

var mymap = L.map("map").setView([latitude, longitude], 12.7); // Coordenadas e nível de zoom


const localizarTransporte = () => {
  // api url
  const usuario = '';
  const destino = '';
  const horaGet = '';
  
  
  // Defining async function
    
};


async function getapi(url) {
  // Storing response
  const response = await fetch(url);
  
  // Storing data in form of JSON
  var data = await response.json();
  
  console.log (data[0].localizacao_atual_bus.latitude);
  console.log (data[0].localizacao_atual_bus.longitude);
  
    var tes1 = (data[0].localizacao_atual_bus.latitude);
    var teste2 = (data[0].localizacao_atual_bus.longitude);
    
    console.log(data[0].compartilhando);
    // latitude = data.localizacao_atual_bus.latitude
    console.log("teste:", data);
    console.log('Compartilhando... ', compartilhando)
    console.log(latitude, ' e ' , longitude)
    
    var marker = L.marker().remove(mymap); // Coordenadas do marcador
    var marker = L.marker([tes1, teste2], { icon: customIcon }).addTo(mymap); // Coordenadas do marcador
    getLatLng()
  }
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
    '<a href="https://www.instagram.com/antoniovictor2k/">Antonio Victor</a>',
  }).addTo(mymap);
  
  console.log(latitude, ' e ' , longitude)

  
  const teste = () => {
    
    getapi(api_url);
    
  }

