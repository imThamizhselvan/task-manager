import React, { Component } from 'react';
import { db } from '../firebase';
import { Wrapper, SingleLineInput, MultiLineInput, AddComment, CloseIcon } from './styles';

export default class Card extends Component {
  constructor() {
    super();
    this.setState({
      taskTitle: '',
      taskDesc: ''
    })
  }

  onSubmit = () => {
    db.collection('tasks').add({
      creator: "thamizh",
      currentOwner: "thamizh",
      desc: this.state.taskDesc,
      title: this.state.taskTitle,
      status: this.props.status
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    this.props.closeModal();
  }

  render() {
    return (
      <Wrapper>
        <CloseIcon onClick={this.props.closeModal}><i class="fa fa-close"></i></CloseIcon>
        <CloseIcon><i class="fa fa-trash"></i></CloseIcon>
        <p> Task Title </p>
        <SingleLineInput onChange={(evt) => this.setState({ taskTitle: evt.target.value })} />
        <p> Task Description </p>
        <MultiLineInput onChange={(evt) => this.setState({ taskDesc: evt.target.value })} />
        <AddComment onClick={this.onSubmit}> Add Task </AddComment>
      </Wrapper>
    );
  }
}