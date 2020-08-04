const container = document.querySelector('.container');

const colorBtn = document.querySelector('.color-full');
colorBtn.addEventListener('click', () => {
    container.addEventListener('mouseover', colorFull);
    colorBtn.style.background = `linear-gradient(red, orange)`;
});

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => reset());

let gridSize = 16;


function drawGrid(gridSize) {
    container.style['grid-template'] = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
    
    for (let col = 0; col < gridSize; col++) {
        for (let row = 0; row < gridSize; row++) {
        div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
        }
    }
    container.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black';
        e.target.style.transition = 'background 0.5s';
    });
}

drawGrid(gridSize);

const reset = function () {
    container.innerHTML = '';
    container.removeEventListener('mouseover', colorFull);

    colorBtn.style.background = 'lightslategray';

    gridSize = parseInt(prompt('Width of grid: '));

    drawGrid(gridSize);
}

function colorFull() {
    container.addEventListener('mouseover', (e) => {
        e.target.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
    });
    
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
}