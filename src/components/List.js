import React, { Component } from 'react';
import Modal from 'react-modal';
import Card from './Card';
import { ListWrapper, CloseIcon, CardDescWrapper, AddComment } from './styles';

const customStyles = {
  content : {
    overflow: 'hidden',
    margin: '6%',
    border: 'none',
  }
};

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <ListWrapper>
        <CloseIcon><i class="fa fa-trash"></i></CloseIcon>
        <p> {this.props.title} </p>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <Card closeModal={this.closeModal} />
        </Modal>

        <CardDescWrapper> 
          <p> title </p>
          <p> description</p>
        </CardDescWrapper>
        <CardDescWrapper> 
        <p> title </p>
        <p> description</p>
        </CardDescWrapper>
        <AddComment onClick={this.openModal}> Add New Card </AddComment>
      </ListWrapper>
    );
  }
}