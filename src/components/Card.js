import React, {Component} from 'react';
import './Card.css'
import logo from '../logo.svg';

class Card extends React.Component {
  render() {
    return (
      <div className='Card' onClick={() => alert('click')}>
        <img src={logo} className='Card-icon' alt="logo" />
      </div>
    )
  }
}

export default Card
