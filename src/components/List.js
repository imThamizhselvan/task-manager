import React, { Component } from 'react';
import Modal from 'react-modal';
import Card from './Card';
import { db } from '../firebase';
import { ListWrapper, CloseIcon, CardLayer, CardDescWrapper, Chip, CardDesc, CardTitle, ListTitle } from './styles';

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
    dragTaskKey = task.id;
  }

  onDragOver = (ev, cat) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    var updateData = db.collection("tasks").doc(dragTaskKey);
    return updateData.update({
      status: cat,
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
    });
  }

  render() {
    return (
      <ListWrapper onDragOver={(ev) => this.onDragOver(ev, this.props.cat)} onDrop={(ev) => this.onDrop(ev, this.props.cat)}>
        <CloseIcon><i className="fa fa-plus" onClick={this.openModal}></i></CloseIcon>
        <ListTitle> {this.props.title} </ListTitle>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
        >
          <Card closeModal={this.closeModal} status={this.props.cat} edit={false} />
        </Modal>
        <CardLayer>

        { this.props.tasks.map((task, i) =>
          <CardDescWrapper cat={task.cat} key={i} onClick={() => this.handleEditModal(task)} draggable={true} onDragStart={()=> this.onDragStart(task)}> 
            <Chip cat={task.cat}> {task.cat || 'Development'} </Chip>
            <CardTitle> {task.title} </CardTitle>
            <CardDesc> -> {task.desc} </CardDesc>
          </CardDescWrapper>    
        )}
        </CardLayer>
      </ListWrapper>
    );
  }
}