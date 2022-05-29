// Audio file to be started on timer
const audio = new Audio('audio/music-1.mp3');

// Zen quote API fetch

async function getQuote() {

    let response = await fetch("https://type.fit/api/quotes");
    let data = await response.json();
    let h1 = document.querySelector('#meditation-text');
    let randomNum = Math.random();
    let roundNum = Math.floor(randomNum * data.length);
    h1.innerText = `"${data[roundNum].text}"`;
    return data;
}

getQuote();


const buttons = document.querySelectorAll('.timer-option-button');

buttons.addEventListener('focusin', (e) => {
    e.target.style.backgroundColor = '#F24C4C';
    e.target.style.color = '#ffffff';
});

buttons.addEventListener('focusout', (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#F24C4C';
});


// Button event listeners
const tenMinuteButton = document.getElementById('ten-minute-button');
const twentyMinuteButton = document.getElementById('twenty-minute-button');
const thirtyMinuteButton = document.getElementById('thirty-minute-button');
const timerCountdown = document.getElementById('countdown-numbers').innerText;

tenMinuteButton.addEventListener('click', tenCountFunction = () => {
    if (typeof interval !== 'undefined') {
        stopCounter();
    }
    // tenMinuteButton.style.backgroundColor = '#F24C4C';
    // tenMinuteButton.style.color = '#ffffff';
    const timeInMinutes = 10;
    audio.play();
    const timeInSeconds = timeInMinutes * 60;
    time = timeInSeconds;
    interval = setInterval(timeDecrement, 1000);
})

twentyMinuteButton.addEventListener('click', () => {
    if (typeof interval !== 'undefined') {
        stopCounter();
    }
    // twentyMinuteButton.style.backgroundColor = '#F24C4C';
    // twentyMinuteButton.style.color = '#ffffff';
    const timeInMinutes = 20;
    audio.play();
    const timeInSeconds = timeInMinutes * 60;
    time = timeInSeconds;
    interval = setInterval(timeDecrement, 1000);
})

thirtyMinuteButton.addEventListener('click', () => {
    if (typeof interval !== 'undefined') {
        stopCounter();
    }
    // thirtyMinuteButton.style.backgroundColor = '#F24C4C';
    // thirtyMinuteButton.style.color = '#ffffff';
    const timeInMinutes = 30;
    audio.play();
    const timeInSeconds = timeInMinutes * 60;
    time = timeInSeconds;
    interval = setInterval(timeDecrement, 1000);
})


// Timer countdown
let timeDecrement = () => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds > 9) {
        document.getElementById('countdown-numbers').innerText = `${minutes}:${seconds}`;
    } else {
        document.getElementById('countdown-numbers').innerText = `${minutes}:0${seconds}`;
    }
    time--;
    if (minutes == 0 && seconds == 0) {
        stopCounter();
    }
}

function stopCounter() {
    clearInterval(interval)
}