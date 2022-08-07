
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + " HS"
var timeeeuu = (today.getHours() - 1) + ":" + today.getMinutes() + " HS"



addEventListener("load",function liveHour(){
    document.getElementById("hourbsas").innerHTML = time;
    document.getElementById("hour").innerHTML = timeeeuu;
})




