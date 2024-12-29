const num = Math.floor(Math.random() * 6) + 1;
if(num === 1) document.body.style.backgroundImage = 'url(1.png)'
else document.body.style.backgroundImage = `url(${num}.jpg)`