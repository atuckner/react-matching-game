import React, { Component } from 'react';
import Card from './Card';

class Board extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    )
  }
}

export default Board
