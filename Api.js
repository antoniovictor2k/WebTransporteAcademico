const localizarTransporte = () => {

  
  const latitude = "-9.570223";
  const longitude = "-35.771348";


  const customIcon = L.icon({
    iconUrl: './bus_des.png', // Substitua pelo caminho do seu ícone personalizado
    iconSize: [32, 32], // Tamanho do ícone em pixels
    iconAnchor: [16, 32], // Ponto de ancoragem do ícone (geralmente na metade inferior)
  });
  

        var mymap = L.map("map").setView([latitude, longitude], 10); // Coordenadas e nível de zoom
        var marker = L.marker([-9.580223, -35.991348], { icon: customIcon }).addTo(mymap); // Coordenadas do marcador

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mymap);

      
 
};
