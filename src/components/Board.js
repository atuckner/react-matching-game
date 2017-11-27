import React, { Component } from 'react';
import Card from './Card';

class Board extends React.Component {
  renderCard(i) {
    const card = this.props.cards[i]
    console.log('card number: ', i)
    return (
      <Card
        icon={card.icon}
        selected={card.selected}
        matched={card.matched}
        selectCard={this.props.selectCard}
      />
    );
  }

  render() {
    return (
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
    )
  }
}

export default Board
