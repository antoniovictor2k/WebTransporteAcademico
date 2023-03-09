let map, infoWindow;



// -9.577058, -35.761117


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -9.577058, lng: -35.761117 },
        zoom: 15,
        
    });
    //   const markerView = new google.maps.marker.AdvancedMarkerView({
        //     map,
        //     position: { lat: -9.570922, lng:-35.772275 },
        //   });
       
    //    codigo para cria uma localização com imagem
       
    //     const beachFlagImg = document.createElement("img");
        
        
        
        // beachFlagImg.src  = "img/icononibus.jpg" ;
        
        
    //     const beachFlagMarkerView = new google.maps.marker.AdvancedMarkerView({
    //         map,
    //         position: { lat: -9.570922, lng: -35.772275 },
    //         content: beachFlagImg ,
    //         title: "A marker using a custom PNG Image",
    //     });
    //     beachFlagImg.style.width = '80px';

    
// infoWindow = new google.maps.infoWindow();
infoWindow = new google.maps.InfoWindow();

const locationButton = document.createElement("button");

locationButton.textContent = "Ativador";
locationButton.classList.add("custom-map-control-button");
map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
locationButton.addEventListener("click", ()=>{

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent("<img src=../img/iconBusTeto.png alt=Icon_Onibus>");
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


});

// teste de button



}

// function chamafuncao() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -9.577058, lng: -35.761117 },
//         zoom: 14
        
//     });

//     infoWindow = new google.maps.InfoWindow();

// const locationButton = document.createElement("button");

// locationButton.textContent = "Pan to Current Location";
// locationButton.classList.add("custom-map-control-button");
// map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
// locationButton.addEventListener("click", ()=>{

//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(
//             (position) =>{
//                 const pos = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude,
//                 };

//                 infoWindow.setPosition(pos);
//                 infoWindow.setContent("Location found.");
//                 infoWindow.open(map);
//                 map.setCenter(pos);
//             },
//             () => {
//                 handleLocationError(true, infoWindow, map.getCenter());
//             }
//         );   
//     }
//     else {
//         handleLocationError(false, infoWindow, map.getCenter());
//     }


// });
// }
// -9.570922, -35.772275


window.initMap = initMap;

