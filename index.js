const audio = new Audio('audio/music-1.mp3');

// Button event listeners
const tenMinuteButton = document.getElementById('ten-minute-button');
const twentyMinuteButton = document.getElementById('twenty-minute-button');
const thirtyMinuteButton = document.getElementById('thirty-minute-button');
const timerCountdown = document.getElementById('countdown-numbers').innerText;

tenMinuteButton.addEventListener('click', tenCountFunction = () => {
    time = 0;
    const timeInMinutes = 10;
    audio.play();
    const timeInSeconds = timeInMinutes * 60;
    time = timeInSeconds;
    interval = setInterval(timeDecrement, 1000);
})

twentyMinuteButton.addEventListener('click', () => {
    time = 0;
    const timeInMinutes = 20;
    audio.play();
    const timeInSeconds = timeInMinutes * 60;
    time = timeInSeconds;
    interval = setInterval(timeDecrement, 1000);
})

thirtyMinuteButton.addEventListener('click', () => {
    time = 0;
    const timeInMinutes = 30;
    audio.play();
    const timeInSeconds = timeInMinutes * 60;
    time = timeInSeconds;
    interval = setInterval(timeDecrement, 1000);
})



let timeDecrement = () => {
    time--;
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds > 9) {
        document.getElementById('countdown-numbers').innerText = `${minutes}:${seconds}`;
    } else {
        document.getElementById('countdown-numbers').innerText = `${minutes}:0${seconds}`;
    }
    if (minutes == 0 && seconds == 0) {
        stopCounter();
    }
}

function stopCounter() {
    clearInterval(interval)
}