const clock = document.getElementById('clock');
clock.textContent = new Date().toLocaleTimeString();
setInterval(() => clock.textContent = new Date().toLocaleTimeString(), 1000);