import {
  compareShapes,
  showRandomShape
} from './helper-functions.js';

const btnRock = document.getElementById('btn-rock');
const btnPaper = document.getElementById('btn-paper');
const btnScissors = document.getElementById('btn-scissors');
const btnReset = document.getElementById('btn-reset');

const root = document.getElementById('root');
const resultDiv = document.getElementById('result');

const cntWinFinishGame = 3;

let counter = 0;
let winCount = 0;
let looseCount = 0;
let gameResult;
let finalResult;

const btnPlayHandler = (event) => {
  if (gameResult && gameResult.parentNode === root) {
    root.removeChild(gameResult);
  }

  if (counter === cntWinFinishGame) {
    resultDiv.removeChild(finalResult);
    counter = 0;
    winCount = 0;
    looseCount = 0;
  }
  counter++;

  gameResult = document.createElement('div');
  gameResult.setAttribute('id', 'game-result');
  root.appendChild(gameResult);

  const randomShape = showRandomShape();

  const btnChosen = event.target.id.slice(4);
  const result = compareShapes(randomShape, btnChosen);

  if (result === 'You’ve LOST!') {
    looseCount++;
  }

  if (result === 'You’ve WON!') {
    winCount++;
  }

  showShape(btnChosen);

  const gameInfo = document.createElement('p');
  gameResult.appendChild(gameInfo);
  const gameInfoText = document.createTextNode(
    `Round ${counter}, 
      ${btnChosen} vs ${randomShape}, 
      ${result}`
  );

  gameInfo.appendChild(gameInfoText);
  showShape(randomShape);

  if (counter > 2) {
    return showFinalResult(winCount, looseCount);
  }
};

const btnResetHandler = () => {
  counter = 0;
  winCount = 0;
  looseCount = 0;

  if (finalResult && finalResult.parentNode === resultDiv) {
    resultDiv.removeChild(finalResult);
  }

  if (gameResult && gameResult.parentNode === root) {
    root.removeChild(gameResult);
  }
};

function showShape(shape) {
  const imageShape = document.createElement('img');
  gameResult.appendChild(imageShape);
  imageShape.setAttribute('src', `img/${shape}.jpg`);
  imageShape.setAttribute('class', `images`);
}

function showFinalResult(winCount, looseCount) {
  finalResult = document.createElement('h3');
  resultDiv.appendChild(finalResult);
  let finalResultText;

  if (winCount > looseCount) {
    finalResultText = document.createTextNode(
      `Congratulations you've WON! Your score: ${winCount}:${looseCount}`
    );

  } else if (winCount < looseCount) {
    finalResultText = document.createTextNode(
      `Sorry, you've LOST! Your score: ${winCount}:${looseCount}`
    );

  } else {
    finalResultText = document.createTextNode(
      `It is a DRAW! Your score: ${winCount}:${looseCount}`
    );
  }
  finalResult.appendChild(finalResultText);
}

btnRock.addEventListener('click', btnPlayHandler);
btnPaper.addEventListener('click', btnPlayHandler);
btnScissors.addEventListener('click', btnPlayHandler);
btnReset.addEventListener('click', btnResetHandler);