
function countdown(time) {
   
    if (isNaN(time) || time > (30*60)) {
        localStorage.time = 30 * 60;
        countdown();
        return null;
    }

    if (time <= 0) {
        alert("You found an easter egg!");
        return null;
    }
  
    document.getElementById('timeleft').innerText = formatTime(time);
    time--;
    localStorage.time = time;
    setTimeout('countdown()', 1000);
}

function formatTime(time) {
    minutes = Math.floor(time / 60);
    seconds = time - minutes * 60;
  
    if (String(seconds).length == 1) {
        return String(minutes) + ":0" + String(seconds);
    }
  
    return String(minutes) + ":" + String(seconds);
}

countdown();