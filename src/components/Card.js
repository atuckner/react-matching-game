import React, {Component} from 'react';
import './Card.css'
import logo from '../logo.svg';
import FontAwesome from 'react-fontawesome';

class Card extends React.Component {
  render() {
    const props = this.props;
    const cardStatus = props.selected ? 'Card-selected' : 'Card-unselected';
    const icon = props.selected ?
      <FontAwesome className={'Card-icon'} name={props.icon} size={'3x'} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> :
      <FontAwesome className={'Card-icon'} name={'question'} size={'3x'} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>;
    return (
      <div className={`Card ${cardStatus}`} onClick={(e) => this.props.selectCard(props.value)}>
        {icon}
      </div>
    )
  }
}

export default Card
