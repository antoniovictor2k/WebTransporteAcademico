let map, infoWindow;
// let divAtivarLocalizacao = document.querySelector(".divAtivarLocalizacao");


//  -35.803929
// -9.511309, -35.803929


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -9.511309, lng: -35.803929 },
        zoom: 18,
        
    });
    
infoWindow = new google.maps.InfoWindow();

// divAtivarLocalizacao.addEventListener("click", chamateste)

const chamateste = () => {

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent("<img src=../img/iconBusTeto.png alt=Icon_Onibus class=imgbus >");
                infoWindow.open(map);
                map.setCenter(pos);
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            }
        );   
    }
    else {
        handleLocationError(false, infoWindow, map.getCenter());
    }

};


chamateste();

}




window.initMap = initMap;

