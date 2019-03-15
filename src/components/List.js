import React, { Component } from 'react';
import { ListWrapper, CloseIcon, CardDescWrapper, AddComment } from './styles';

export default class List extends Component {
    render() {
      return (
        <ListWrapper>
          <CloseIcon><i class="fa fa-trash"></i></CloseIcon>
          <p> {this.props.title} </p>
          <CardDescWrapper> 
            <p> title </p>
            <p> description</p>
          </CardDescWrapper>
          <CardDescWrapper> 
          <p> title </p>
          <p> description</p>
          </CardDescWrapper>
          <AddComment> Add New Card </AddComment>
        </ListWrapper>
      );
    }
}