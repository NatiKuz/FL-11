function showShape(shape) {
    const imageShape = document.createElement('img');
    gameResult.appendChild(imageShape);
    imageShape.setAttribute('src', `img/${shape}.jpg`);
    imageShape.setAttribute('class', `images`);
};
  
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
};
  
function compareShapes(randomShape, chosenShape) {
    if (randomShape === chosenShape) {
      return 'It is a DRAW!';
    }
  
    if (chosenShape === 'rock') {
      if (randomShape === 'paper') {
        return 'You’ve LOST!';
  
      }
  
      if (randomShape === 'scissors') {
        return 'You’ve WON!';
      }
    }
  
    if (chosenShape === 'paper') {
      if (randomShape === 'rock') {
        return 'You’ve WON!';
      }
  
      if (randomShape === 'scissors') {
        return 'You’ve LOST!';
      }
    }
  
    if (chosenShape === 'scissors') {
      if (randomShape === 'rock') {
        return 'You’ve LOST!';
      }
  
      if (randomShape === 'paper') {
        return 'You’ve WON!';
      }
    }
};
  
function showRandomShape() {
    const shapes = ['rock', 'paper', 'scissors'];
    return shapes[Math.floor(Math.random() * shapes.length)];
};