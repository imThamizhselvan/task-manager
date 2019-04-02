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
      todo: [], 
      wip: [],
      comp: [],
      currentDrag: []
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    console.log('this.state', this.state);
    db.collection('tasks').where('status', '==', 'todo')
    .onSnapshot((querySnapshot) => {    
      querySnapshot.forEach((doc) => {
        this.setState({
          todo: [...this.state.todo, doc.data() ],
        });
      });
    });
    db.collection('tasks').where('status', '==', 'wip')
    .onSnapshot((querySnapshot) => {    
      querySnapshot.forEach((doc) => {
        this.setState({
          wip: [...this.state.wip, doc.data() ],
        });
      });
    });
    db.collection('tasks').where('status', '==', 'comp')
    .onSnapshot((querySnapshot) => {    
      querySnapshot.forEach((doc) => {
        this.setState({
          comp: [...this.state.comp, doc.data() ],
        });
      });
    });
  }
  
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    var tasks = { 
      todo: [], 
      wip: [],
      comp: []    
    }   
    console.log('render', this.state);
    this.state.todo.forEach((task) => {
      tasks[task.status].push(
        <CardDescWrapper 
          key={task.title}
        > 
          <p> {task.title} </p>
          <p> {task.desc} </p>
        </CardDescWrapper>
      );
    })
    this.state.wip.forEach((task) => {
      tasks[task.status].push(
        <CardDescWrapper 
          key={task.title}
        > 
          <p> {task.title} </p>
          <p> {task.desc} </p>
        </CardDescWrapper>
      );
    })
    this.state.comp.forEach((task) => {
      tasks[task.status].push(
        <CardDescWrapper 
          key={task.title}
        > 
          <p> {task.title} </p>
          <p> {task.desc} </p>
        </CardDescWrapper>
      );
    })
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
        >
          <Card closeModal={this.closeModal} status={this.props.cat} />
        </Modal>
        {this.props.cat == 'todo' && <div>{tasks.todo}</div>}
        {this.props.cat === 'wip' && <div>{tasks.wip}</div>}
        {this.props.cat === 'comp' && <div>{tasks.comp}</div>}
      </ListWrapper>
    );
  }
}