function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

/**
 * Convert the time in numbers
 * to base 6 numbers
 */
function updateTime() 
{
    let time = new Date();
    let clock = document.getElementsByClassName("clock")[0];
    let hours = pad(time.getHours().toString(6), 2);
    let minutes = pad(time.getMinutes().toString(6), 3);
    let seconds = pad(time.getSeconds().toString(6), 3);
    let timeString = hours + ":" + minutes + ":" + seconds;
    clock.innerHTML = timeString;
}

/**
 * Load the clock on page startup and 
 * update every second.
 */

updateTime();
var t = setInterval(updateTime, 1000);