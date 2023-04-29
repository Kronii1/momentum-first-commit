const homehello = document.querySelector(".main__timeline-timelapse");

function WhatTime() {
    const date = new Date();

    const hours = date.getHours();

    if (hours >= 0 && hours <= 5) {
        homehello.innerHTML = "GOOD DAWN";
    }
    else if (hours > 5 && hours <= 11) {
        homehello.innerHTML = "GOOD MORNING";
    }
    else if (hours > 11 && hours <= 16) {
        homehello.innerHTML = "GOOD AFTERNOON";
    }
    else if (hours > 16 && hours <= 20) {
        homehello.innerHTML = "GOOD EVENING";
    }
    else if (hours > 20 && hours <= 23) {
        homehello.innerHTML = "GOOD MIDNIGHT";
    }
}

WhatTime();