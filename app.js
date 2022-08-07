

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
