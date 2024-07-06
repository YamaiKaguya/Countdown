
const play = document.querySelector('.playpause');
const reset = document.querySelector('.reset');
const display = document.querySelector('.countdown');

let sec = min = hour = 0;

let currentStatus = false;

function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

function countdown() {
    sec++;

    if (sec === 60) {
        sec = 0;
        min++;
        if (min === 60) {
            min = 0;
            hour++;
        }
    }

    const formattedSec = formatTime(sec);
    const formattedMin = formatTime(min);
    const formattedHour = formatTime(hour);

    display.innerHTML = `${formattedHour}:${formattedMin}:${formattedSec}`;
}


play.addEventListener('click', function(event){
    if (!currentStatus) {
        interval = window.setInterval(countdown, 1000);
        play.style.backgroundColor = '#FF6969';
        play.innerHTML = '<i class="fa-solid fa-stop"></i>';
    } else {
        clearInterval(interval);
        play.style.backgroundColor = '#A1DD70';
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
    currentStatus = !currentStatus;
});


reset.addEventListener('click', function(event){
    sec = min = hour = 0;

    clearInterval(interval);
    play.style.backgroundColor = '#8bdaff';
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
    currentStatus = false;

    display.innerHTML = `${formatTime(hour)}:${formatTime(min)}:${formatTime(sec)}`;
});



