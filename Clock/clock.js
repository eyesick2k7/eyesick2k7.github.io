function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const timeString = `${time}`;

    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();