import React, { Component } from 'react';
import '../styles/Board.css';
import Card from './Card';

export class Board extends React.Component {
  renderCard(i) {
    const card = this.props.cards[i];
    return (
      <Card
        value={i}
        icon={card.icon}
        selected={card.selected}
        matched={card.matched}
        selectCard={this.props.selectCard}
        addGuess={this.props.addGuess}
      />
    );
  }

  render() {
    return (
      <div>
        <div>
          <div>
            {this.renderCard(0)}
            {this.renderCard(1)}
            {this.renderCard(2)}
            {this.renderCard(3)}
          </div>
          <div>
            {this.renderCard(4)}
            {this.renderCard(5)}
            {this.renderCard(6)}
            {this.renderCard(7)}
          </div>
          <div>
            {this.renderCard(8)}
            {this.renderCard(9)}
            {this.renderCard(10)}
            {this.renderCard(11)}
          </div>
          <div>
            {this.renderCard(12)}
            {this.renderCard(13)}
            {this.renderCard(14)}
            {this.renderCard(15)}
          </div>
        </div>
        <h2>Guesses: {Math.floor(this.props.game.guesses/2)}</h2>
        <h2>Matches: {this.props.game.matches}</h2>
        <button className={'Board-btn '} onClick={(e) => {this.props.restartGame()}}>Play Again</button>
      </div>
    );
  }
}

export default Board;
