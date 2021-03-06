const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const testData = data.prototypeData;

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game;
    expect(Game).to.be.a('function');
  });

  it('should be an instance of a Game', function() {
    const game = new Game;
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should be able to start game', function() {
    const game = new Game();

    game.start();

    expect(game.cards[0]).to.be.an.instanceOf(Card);
    expect(game.deck).to.be.an.instanceOf(Deck);
    expect(game.deck.currentCards.length).to.equal(30);
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

  it('should keep track of current round', function() {
    const game = new Game();

    game.start();
    game.currentRound.takeTurn('object')

    expect(game.currentRound).to.be.an.instanceOf(Round);
  });
});
