'use strict'

const btn = document.getElementById('button');
const rand = document.getElementById('rand');

const randomColor = function() {
    return (Math.random()*255).toFixed(0);
}

btn.addEventListener('click', () => {
    rand.textContent = (Math.random()*10).toFixed(0);
    btn.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
})