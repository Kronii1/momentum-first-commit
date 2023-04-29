const audioElement = document.getElementById('audio');

const timesize = document.querySelector('.playlist__timesize');

const listbar = document.querySelector('.playlist__bar__info');

function playbtnClick() {
    audioElement.play();
    audioElement.volume = 0.05;
}

function pausebtnClick() {
    audioElement.pause();
}

function currentTime() {
    const musictime = Math.floor(audioElement.currentTime);
    timesize.innerHTML = setTimeFormat(musictime);
}

function setTimeFormat(time) {
    const number = parseInt(time);
    const minutes = String(Math.floor(number / 60)).padStart(2, "0");
    const seconds = String(Math.floor(number - minutes * 60)).padStart(2, "0");
    return `${minutes}:${seconds}`;
}

function playlistBar(e) {
    const timeduration = audioElement.duration;
    const timecurrenttime = audioElement.currentTime;
    const timeset = (timecurrenttime / timeduration) * 100;
    listbar.style.width = `${timeset}%`;
}

audioElement.addEventListener("timeupdate", playlistBar);
setInterval(playlistBar, 1000);

currentTime();
setInterval(currentTime, 1000);