import React, { Component } from 'react';
import List from './List';
import { Wrapper, BoardWrapper, SingleLineInput, MultiLineInput, AddComment, CloseIcon } from './styles';

export default class Task extends Component {
  render() {
      
    return (
        <BoardWrapper>
            <p> Sample board </p>
            <List title="To do"/>
            <List title="Work in Progress"/>
            <List title="Completed"/>
        </BoardWrapper>
    );
  }
}