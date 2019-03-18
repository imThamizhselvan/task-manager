import React, { Component } from 'react';
import { Wrapper, SingleLineInput, MultiLineInput, AddComment, CloseIcon } from './styles';

export default class Card extends Component {
  render() {
    return (
      <Wrapper>
        <CloseIcon onClick={this.props.closeModal}><i class="fa fa-close"></i></CloseIcon>
        <CloseIcon><i class="fa fa-trash"></i></CloseIcon>
        <p> Task Title </p>
        <SingleLineInput />
        <p> Task Description </p>
        <MultiLineInput />
        <AddComment> Add Task </AddComment>
      </Wrapper>
    );
  }
}