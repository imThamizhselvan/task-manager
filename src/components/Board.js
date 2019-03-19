import React, { Component } from 'react';
import List from './List';
import { Wrapper, BoardWrapper, SingleLineInput, MultiLineInput, AddComment, CloseIcon } from './styles';

export default class Board extends Component {
  render() {
    return (
        <BoardWrapper>
            <p> Sample board </p>
            <List title="To do" cat="todo" />
            <List title="Work in Progress" cat="wip" />
            <List title="Completed" cat="completed"/>
        </BoardWrapper>
    );
  }
}