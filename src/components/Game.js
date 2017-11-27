import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as cardActions from '../actions/cards';
import * as gameActions from '../actions/game';

import Board from './Board';
import shuffleArray from '../utils/shuffle';

class Game extends React.Component {
  render() {
    return(
      <Board selectCard={this.props.actions.selectCard} cards={this.props.cards}/>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    cards: state.cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, gameActions, cardActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
