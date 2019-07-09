const numberRangeBigger = 4;
const twoTimesLess = 2;
let minRange = 0;
let maxRange = 8;
let maxPrize = 100;
let increasePrize = 2;
let isGameOver = false;

while (!isGameOver) {
    if (!confirm('Do you want to play a game?')) {
        isGameOver = true;
        alert('You did not become a billionaire, but can.');
    } else {
        let gameAttempts = 3;
        let userAttempts = 0;
        let userPrize = 0;
        let currentPrize = maxPrize;
        let currentMaxRange = maxRange;

        let randomNumber = Math.trunc(Math.random() * currentMaxRange);

        while (userAttempts <= gameAttempts) {    
            let messagePrompt = `
Coose a roulette poket number from ${minRange} to ${currentMaxRange} 
Attempts left: ${gameAttempts - userAttempts} 
Total prize: ${userPrize}$
Possible prize on current attempt: ${currentPrize}$`;

            let strUserName = prompt(messagePrompt, '0');

            let enterUserNumber;

            // if User press cancel or Esc
            if (strUserName === null) {
                enterUserNumber = -1;
            } else {
                enterUserNumber = parseInt(strUserName);
            } 

            userAttempts++;
            
            let continueGame = true;

            if (enterUserNumber === randomNumber) {
                userPrize = userPrize + currentPrize;

                if (confirm(`Congratulation, you won!\nYour prize is: ${userPrize}$.\nDo you want to continue?`)) {
                    userAttempts = 0; 
                    currentMaxRange = currentMaxRange + numberRangeBigger;
                    randomNumber = Math.trunc(Math.random() * currentMaxRange);
                    maxPrize = maxPrize * increasePrize;
                    currentPrize = maxPrize;
                } else {
                    continueGame = false;
                }
            } else {
                currentPrize = Math.trunc(currentPrize / twoTimesLess);
            }

            if (!continueGame || userAttempts >= gameAttempts) {
                alert(`Thank you for your participation. Your prize is: ${userPrize}$`)
                userAttempts = gameAttempts + 1;
            }        
        }
    }
}