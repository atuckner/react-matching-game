import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as cardActions from '../actions/cards';
import * as gameActions from '../actions/game';

import Board from './Board';
import shuffleArray from '../utils/shuffle';

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: this.generateCards()
    }
  }

  generateCards() {
    let cards = ['sun-o', 'tree', 'leaf', 'key', 'globe', 'flash', 'anchor', 'camera-retro'].reduce((result, current) => {
      return result.concat([{icon: current, selected: false, matched: false}, {icon: current, selected: false, matched: false}]);
    }, []);

    return shuffleArray(cards)
  }

  render() {
    return(
      <Board selectCard={this.props.actions.selectCard} cards={this.state.cards}/>
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
