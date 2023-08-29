let map, infoWindow;
const apiRest = 'https://back-end-transporte-academico.vercel.app/receberlocalizacao/64d6e99b9685703099a16352';

function fetchBusLocation() {
    fetch(apiRest)
        .then(response => response.json())
        .then(data => {
            const api_latitude = data.localizacao_atual_bus.latitude;
            const api_longitude = data.localizacao_atual_bus.longitude;
            const api_nome_usuario = data.usuario_id;
            const api_destino = data.destino_do_bus;
            const api_ultima_atualizacao = data.ultima_att_onibus

            // Inicializar o mapa e chamar a função chamateste com as coordenadas
            initMap(api_latitude, api_longitude);
            console.log(api_nome_usuario);
            console.log(api_destino);
            console.log(api_ultima_atualizacao);
        })
        .catch(error => {
            console.error('Erro ao obter dados da API:', error);
        });
}

function initMap(api_latitude, api_longitude, api_nome_usuario, api_destino) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: api_latitude, lng: api_longitude, nome:api_nome_usuario, destino:api_destino},
        zoom: 12,
    });

    infoWindow = new google.maps.InfoWindow();

    console.log("tets inforwinow", infoWindow);

    const chamateste = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                   
                    const localizacao_bus = {
                        lat: api_latitude,
                        lng: api_longitude,
                    };

                    console.log(localizacao_bus);

                    infoWindow.setPosition(localizacao_bus);
                    infoWindow.setContent(`<div class='custom-infowindow'> ${api_nome_usuario} - ${api_destino}
                    <img src=../img/bus_des.png alt=Icon_Onibus class=imgbus >
                    
                    </div>`);
                    infoWindow.open(map);
                    map.setCenter(localizacao_bus);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            handleLocationError(false, infoWindow, map.getCenter());
        }
    };

    chamateste();
}

window.initMap = fetchBusLocation;


