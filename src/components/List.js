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

let dragTaskKey = '';

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
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

  handleEditModal = (data) => {
    this.props.openModals(data);
  }

  onDragStart = (task) => {
    dragTaskKey = task.title;
  }

  onDragOver = (ev, cat) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    db.collection('tasks').where('title', '==', dragTaskKey)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          var updateData = db.collection("tasks").doc(doc.id);
          return updateData.update({
            status: cat,
          })
          .then(function() {
              console.log("Document successfully updated!");
          })
          .catch(function(error) {
              console.error("Error updating document: ", error);
          });
      });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });


    ev.preventDefault();
  }

  render() {
    return (
      <ListWrapper onDragOver={(ev) => this.onDragOver(ev, this.props.cat)} onDrop={(ev) => this.onDrop(ev, this.props.cat)}>
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
          <Card closeModal={this.closeModal} status={this.props.cat} edit={false} />
        </Modal>
        { this.props.tasks.map((task) =>
          <CardDescWrapper onClick={() => this.handleEditModal(task)} draggable={true} onDragStart={()=> this.onDragStart(task)}> 
            <p> {task.title} </p>
            <p> {task.desc} </p>
          </CardDescWrapper>    
        )}
      </ListWrapper>
    );
  }
}