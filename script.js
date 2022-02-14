// console.log('Mic Check 1...2');

const gridContainer = document.querySelector('.container');
// const setCustomGrid = document.querySelector('#customGrid');
const useBlackPen = document.querySelector('#blackPen');
const useRandomPen = document.querySelector('#rainbowPen');
const customColor = document.querySelector('#customColor');
const eraseColor = document.querySelector('#eraseGrid');
const resetGrid = document.querySelector('#resetGrid');
const rangeCheck = document.querySelector('#customGridSize');
const displaySize = document.querySelector('#size');

let gridCol = 16;
let gridRow = 16;
let gridItem;
let gridSquares;
let count;
let userInput;
let penColor;
let rColor;


// creating a 16x16 grid of square divs.
function createGrid()
{
    gridContainer.style.cssText += `grid-template-columns: repeat(${gridCol}, 1fr); grid-template-rows: repeat(${gridRow}, 1fr)`;

    for(count=0; count < gridCol*gridRow; count++)
    {
        gridItem = document.createElement('div');
        gridItem.setAttribute('class', 'item');
        gridContainer.appendChild(gridItem);
    }
}

/* allow user to set the grid size of their choice between 4 & 100. Commented out as I opted to use a range slider
instead of the prompt and alert. */
/* function customGridSize(e)
{
    gridContainer.innerHTML = '';

    userInput = prompt('How many squares would you like? Value should be from 4-100.');

    if(!Number(userInput))
    {
        alert('Wrong Input! Please enter a numeric value.');
        customGridSize();
    }
    else if(Number(userInput) < 4 || Number(userInput) > 100)
    {
        alert('The value input is outside the specified parameters.');
        customGridSize();
    }
    else
    {
        gridCol = gridRow =Number(userInput);
        createGrid();
    }
} */

// call this function when the page loads by default.
createGrid();

// got the range input, assisgned it to a variable then used that as the col & row value for the grid
function getSize(e)
{
    gridContainer.innerHTML = '';

    userInput = Number(e.target.value);

    gridCol = gridRow = userInput ;

    displaySize.innerHTML = `Size: ${e.target.value} x ${e.target.value}`;

    createGrid();

}

// draw on the grid using a default color
function setBlackColor(e)
{
    // select all squares with the className 'item', and loop thru each and color it with a default color
    gridSquares = document.querySelectorAll('.item');
    gridSquares.forEach(square => {
        square.addEventListener('mouseover',(e) => {
            e.target.style.backgroundColor = '#141414';
        })
    })
    
}

function setRandomColor(e)
{
     // select all squares with the className 'item', and loop thru each and color it with a random color
    gridSquares = document.querySelectorAll('.item');
    gridSquares.forEach(square => {
        square.addEventListener('mouseover',(e) => {
            rColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = '#'.concat(rColor);
        })
    })

}

// get the color picked by user, assign it to a variable and use it as the pen color
function setCustomColor(e)
{
    penColor = e.target.value; 
    gridSquares = document.querySelectorAll('.item');
    gridSquares.forEach(square => {
        square.addEventListener('mouseover',(e) => {
            e.target.style.backgroundColor = penColor;
        })
    })
}

function eraseGrid(e)
{
     /* select all squares with the className 'item', and loop thru each and set it to a transparent color.
     ; make it look like an eraser. */
    gridSquares = document.querySelectorAll('.item');
    gridSquares.forEach(square => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'transparent';
        })
    })
}

// reset the grid back to its default look; set it to reload the url
function resetCanvas(e)
{
    window.location.reload();
}

// add listeners to all html elements created
// setCustomGrid.addEventListener('click', customGridSize);
rangeCheck.addEventListener('input', getSize);
useBlackPen.addEventListener('click', setBlackColor);
useRandomPen.addEventListener('click', setRandomColor);
customColor.addEventListener('input', setCustomColor);
eraseColor.addEventListener('click', eraseGrid);
resetGrid.addEventListener('click', resetCanvas);
