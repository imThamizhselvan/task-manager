import React, { Component } from 'react';
import List from './List';
import Modal from 'react-modal';
import Card from './Card';
import { db } from '../firebase';
import { BoardWrapper} from './styles';

const customStyles = {
  content : {
    overflow: 'hidden',
    margin: '6%',
    border: 'none',
  }
};

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      todo: [], 
      wip: [],
      comp: [],
      current: []
    };
    this.editModal = this.editModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  editModal(task) {
    this.setState({
      current: [...this.state.current, task],
      modalIsOpen: true
    });
  }
  
  closeModal() {
    this.setState({
      current: [],
      modalIsOpen: false
    });
  }

  componentDidMount() {
    db.collection('tasks').where('status', '==', 'todo')
    .onSnapshot((querySnapshot) => {    
      this.setState({ todo: []});
      querySnapshot.forEach((doc) => {
        doc = {
          ...doc.data(),
          id: doc.id
        }
        this.setState({
          todo: [...this.state.todo, doc ],
        });
      });
    });
    db.collection('tasks').where('status', '==', 'wip')
    .onSnapshot((querySnapshot) => {    
      this.setState({ wip: []});
      querySnapshot.forEach((doc) => {
        doc = {
          ...doc.data(),
          id: doc.id
        }
        this.setState({
          wip: [...this.state.wip, doc ],
        });
      });
    });
    db.collection('tasks').where('status', '==', 'comp')
    .onSnapshot((querySnapshot) => { 
      this.setState({ comp: []});   
      querySnapshot.forEach((doc) => {
        doc = {
          ...doc.data(),
          id: doc.id
        }
        this.setState({
          comp: [...this.state.comp, doc ],
        });
      });
    });
  }

  render() {
    return (
        <BoardWrapper>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            ariaHideApp={false}
          >
            <Card closeModal={this.closeModal} status={this.props.cat} task={this.state.current} edit={true} />
          </Modal>
          <p> Task board </p>
          <List title="To do" tasks={this.state.todo} cat="todo" openModals={this.editModal} />
          <List title="Work in Progress" tasks={this.state.wip} cat="wip" openModals={this.editModal}/>
          <List title="Completed" tasks={this.state.comp} cat="comp" openModals={this.editModal}/>
        </BoardWrapper>
    );
  }
}