import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as gameActions from '../actions/game';

import Board from './Board';
import shuffleArray from '../utils/shuffle';

class Game extends React.Component {
  render() {
    return(
      <Board selectCard={this.props.actions.selectCard} addGuess={this.props.actions.addGuess} cards={this.props.cards} game={this.props.game}/>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    cards: state.cards,
    game: state.game
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, gameActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
