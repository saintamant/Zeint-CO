//live hour
let horaArg = formatAMPMArg(new Date);

let horaEeuu = formatAMPMEeuu(new Date);


function formatAMPMEeuu(date) {
    var hours = date.getHours() - 1;
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime ;
  }

function formatAMPMArg(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime ;
  }


 addEventListener("load",function liveHour(){
    document.getElementById("hourbsas").innerHTML = horaArg;
    document.getElementById("hour").innerHTML = horaEeuu;
    
})
//live hour



//map

var map = L.map('map').setView([6.5813629,-75.9159491], 2); //central


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

var violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  


L.marker([39.455085, -75.725542], {icon: violetIcon}).addTo(map)
    .bindPopup('Middletown, DE 651 N Broad St, Ste 205 #8839')
    
    

L.marker([-34.6193485, -58.3632725], {icon: violetIcon}).addTo(map)
.bindPopup('Buenos Aires, ARG Lola Mora 421 , Puerto Madero')

//map