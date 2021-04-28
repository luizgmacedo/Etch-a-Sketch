const container = document.querySelector('.container');
const grid = document.querySelector('.grid');

const clearBtn = document.querySelector('.clear');
const colorBtn = document.querySelector('.color');
const grayScaleBtn = document.querySelector('.gray-scale');

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            grid.appendChild(square);
            hoverEffect();
        }
    }
    grid.style['grid-template-columns'] = `repeat(${size}, 1fr)`;
}

function hoverEffect() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'black';
        });
    });
}

function clearGrid() {
    grid.innerHTML = '';
    let size = parseInt(prompt('Grid size: '));
    createGrid(size);
}

clearBtn.addEventListener('click', clearGrid);

createGrid(16);