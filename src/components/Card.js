import React, {Component} from 'react';
import './Card.css'
import logo from '../logo.svg';
import FontAwesome from 'react-fontawesome';

class Card extends React.Component {
  render() {
    return (
      <div className='Card' onClick={() => this.props.selectCard('foo')}>
        <FontAwesome className={'Card-icon'} name={this.props.icon} size={'3x'} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
      </div>
    )
  }
}

export default Card
