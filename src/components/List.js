import React, { Component } from 'react';
import Modal from 'react-modal';
import Card from './Card';
import { db } from '../firebase';
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
      modalIsOpen: false,
      currentTask: []
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleEditModal = this.handleEditModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
  
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleEditModal(data) {
    let task = data;
    console.log('tasl', task);
    this.props.openModals(task);
  }

   render() {
    return (
      <ListWrapper>
        <CloseIcon><i class="fa fa-trash"></i></CloseIcon>
        <CloseIcon><i class="fa fa-plus" onClick={this.openModal}></i></CloseIcon>
        <p> {this.props.title} </p>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
          status={this.props.cat}
        >
          <Card closeModal={this.closeModal} status={this.props.cat} />
        </Modal>
        { this.props.tasks.map((task) =>
          <CardDescWrapper onClick={this.handleEditModal}> 
            <p> {task.title} </p>
            <p> {task.desc} </p>
          </CardDescWrapper>    
        )}
      </ListWrapper>
    );
  }
}