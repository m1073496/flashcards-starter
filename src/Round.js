class Round {
  constructor(deck) {
    this.cards = deck.currentCards;
    this.currentCard = this.cards[0];
    this.turnCount = 0;
    this.incorrectGuesses = 0;
  }

  returnCurrentCard = () => this.currentCard;

  takeTurn = (guess) => {
    let newTurn = new Turn(guess, this.currentCard);
    this.turnCount = this.turnCount + 1;
    this.cards.shift();
    this.currentCard = this.cards[0];
    if(!newTurn.evaluateGuess()) {
      this.incorrectGuesses++;
      return `incorrect.`;
    } else {
      return `correct!`;
    }
  }

  calculatePercentCorrect = () => {
    let guessesCorrect = this.turnCount - this.incorrectGuesses;
    return `${((this.incorrectGuesses / this.turnCount) * 100).toFixed(2)}%`;
  }

  endRound = () => {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`);
  }

}

const Turn = require('../src/Turn');
module.exports = Round;
