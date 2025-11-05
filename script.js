var audioClicking = new Audio('audios/bubble-pop.mp3');

function connect() {
    var username = document.getElementById("log-user").value;
    var password = document.getElementById("log-password").value;
    if ((username.localeCompare("admin") == 0) && (password.localeCompare("AlphonseLePlusBeauDeTous"))) {
        console.log("caca");
        audioClicking.play();
    } else {
        console.log("pipi");
        document.getElementById("log-logs").style.visibility = "visible";
    }
}

