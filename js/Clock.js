const clock = document.querySelector(".background-clock__main");
const calendar = document.querySelector(".background-clock__day");

const allmonth = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

function StartTime() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    clock.innerHTML = `${hours} : ${minutes}`;
}

function StartCalendar() {
    const date = new Date();

    const months = date.getMonth();
    const days = date.getDate();

    calendar.innerHTML = `${allmonth[months]} ${days}`;
}

StartTime();
StartCalendar();
setInterval(StartTime, 10000);
