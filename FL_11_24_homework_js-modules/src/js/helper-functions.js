export function compareShapes(randomShape, chosenShape) {
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
}
  
export function showRandomShape() {
    const shapes = ['rock', 'paper', 'scissors'];
    return shapes[Math.floor(Math.random() * shapes.length)];
}