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
            hoverEffect('black');
        }
    }
    grid.style['grid-template-columns'] = `repeat(${size}, 1fr)`;
}

function hoverEffect(color) {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = color;
        });
    });
}

function clearGrid() {
    grid.innerHTML = '';
    let size = parseInt(prompt('Grid size: '));
    if (size <= 0 || !size) size = 16;
    while (size > 64) {
        alert('Grid size must be lower than 64');
        size = parseInt(prompt('Grid size: '));
    }
    createGrid(size);
}

function randomColor() {
    let color = '#';
    let digits = 'ABCDEF0123456789';

    for (let i = 0; i < 6; i++) {
        color += digits[Math.floor(Math.random() * 16)];
    }
    return color;
}

function grayScale(color) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        let opacity = 0.2;
        square.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'black';
            e.target.style.opacity = opacity;
            opacity += 0.1;
        });
    });
}

colorBtn.addEventListener('click', e => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', e => {
            let color = randomColor();
            e.target.style.backgroundColor = color;
            e.target.style.opacity = 1;
        });
    });
});

grayScaleBtn.addEventListener('click', grayScale);

clearBtn.addEventListener('click', clearGrid);

createGrid(16);