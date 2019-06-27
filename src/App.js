import React from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js'

function generateDeck() {
  const symbols = ["∆", "@", "$", "%", "8", "&", "ø", "π"];
  let deck =[];
  for (let i=0; i < 16; i++) {
    deck.push({
      symbol: symbols[i%8],
      isFlipped: false
    });
  } ;
  shuffle(deck);
  console.log('this is the deck', deck);
  return deck;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

class App extends React.Component {
  state = {
    deck: generateDeck(),
    pickedCards: []
  }

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped)
    return;

    let cardToFlip = {...this.state.deck[cardIndex]}
    cardToFlip.isFlipped = true;
    let newPickedCards = this.state.pickedCards.concat(cardIndex)
    let newDeck = this.state.deck.map((card, index) => {
      //THIS NEEDS MOVING TO THE TOP
      if (cardIndex === index){
        return cardToFlip;
      }
      return card;
    });
    if (newPickedCards.length === 2){
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      let card1 = newDeck[card1Index];
      let card2 = newDeck[card2Index];
      if (card1.symbol !== card2.symbol){
        setTimeout(()=>{
          this.unflipCards(card1Index, card2Index);

        }, 1000);
      }
      newPickedCards = [];
    }
    this.setState({deck: newDeck, pickedCards: newPickedCards});
  }

  unflipCards(card1Index, card2Index) {
    let newDeck = this.state.deck.map(card => {
      return {...card}
    });

    newDeck[card1Index].isFlipped = false;
    newDeck[card2Index].isFlipped = false;

    this.setState({
      deck:newDeck
    });
  
  }
  //RESUME HERE^^

  render() {

    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard 
      symbol= {card.symbol} 
      isFlipped = {card.isFlipped}
      key = {index}
      pickCard = {this.pickCard.bind(this,index)}
          />
    }) ;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h3>Match cards to win</h3>
      </header>
      <div className="row1">
        {cardsJSX.slice(0,4)}        
      </div>
      <div className="row2">
        {cardsJSX.slice(4,8)}        
      </div>
      <div className="row3">
        {cardsJSX.slice(8,12)}
      </div>
      <div className="row4">
        {cardsJSX.slice(12,16)}
      </div>
    </div>
  );
}
}

export default App;
