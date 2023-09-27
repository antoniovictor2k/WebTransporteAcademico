const api_url = "https://back-end-transporte-academico.vercel.app/listaTodos";

var marker = null; // Inicialmente, não há marcador

// local inicial do mapa;
var latitude = "-9.570223";
var longitude = "-35.771348";

const customIcon = L.icon({
  iconUrl: "./src/assets/bus_des.png", // Substitua pelo caminho do seu ícone personalizado
  iconSize: [32, 32], // Tamanho do ícone em pixels
  iconAnchor: [16, 32], // Ponto de ancoragem do ícone (geralmente na metade inferior)
});

var mymap = L.map("map").setView([latitude, longitude], 12.7); // Coordenadas e nível de zoom


async function getAPI_backEnd(url) {
  
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
 
  const latitude = data[0].localizacao_atual_bus.latitude;
  const longitude = data[0].localizacao_atual_bus.longitude;
  const compartilhando_api = data[0].compartilhando;
  const destino_api = data[0].destino_do_bus;
  const usuario_api = data[0].usuario_id;

  const ultimoHorario_api = data[0].ultima_att_onibus;
  const partes = ultimoHorario_api.split(':');
  const horas = partes[0];
  const minutos = partes[1];
  const novoHorario = horas + 'h:' + minutos + 'm';



  // Só mostrar marcação ou até mesmo informações se o compartilhamento estiver ativo;
  if(compartilhando_api){
  
  // Mostrar no html
  document.getElementById('compartilhando').innerHTML= 'Sim';
  document.getElementById('usuario').innerHTML=usuario_api;
  document.getElementById('hora').innerHTML=novoHorario;
  document.getElementById('destino').innerHTML=destino_api;
  
  console.log('Destino-api: ', destino_api, usuario_api, ultimoHorario_api, compartilhando_api );
  
  if (marker) {
      mymap.removeLayer(marker); // Remova o marcador anterior, se existir
    }
    marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(mymap); // Adicione o novo marcador
    mymap.panTo(marker.getLatLng());
  }else{
    document.getElementById('compartilhando').innerHTML= 'Não';
    document.getElementById('usuario').innerHTML='';
    document.getElementById('hora').innerHTML='';
    document.getElementById('destino').innerHTML='';
  } 
  
}

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '<a href="https://www.instagram.com/antoniovictor2k/">Antonio Victor</a>',
}).addTo(mymap);

const active_API_backEnd = () =>{

  getAPI_backEnd(api_url);
}

setInterval(active_API_backEnd , 2000);
