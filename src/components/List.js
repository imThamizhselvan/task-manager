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
      modalIsOpen: false,
      tasks: [
        {
          name:"Bug Fix",
          category:"wip", 
          desc: "Deployment bug in webpack",
        },  
        {
          name:"Create Layout",
          category:"todo", 
          desc: "Login page design mockup",
        },
        {
          name:"Project setup",
          category:"todo", 
          desc: "New project setup for client",
        },  
        {
          name:"Server hosting",
          category:"completed", 
          desc: "hosting the dev server",
        },
        {
          name:"Migration", 
          category:"wip", 
          desc: "Angular to react migration",
        },  
        {
          name:"Software Tracker design", 
          category:"completed", 
          desc: "end to end delivery",
        }          
      ],
      todo: [], 
      wip: [],
      completed: []
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidUpdate() {
    console.log('var');
  }
  
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter((task) => {
        if (task.name == id) {
            task.category = cat;
        }
        return task;
    });

    this.setState({
        ...this.state,
        tasks
    });
 }


  render() {
    var tasks = { 
      todo: [], 
      wip: [],
      completed: []    
    }   
    var catValue = this.props.cat;
    this.state.tasks.forEach((task) => {
      tasks[task.category].push(
        <CardDescWrapper 
          key={task.name}
          onDragStart = {(e) => this.onDragStart(e, task.name)}
          draggable
        > 
          <p> {task.name} </p>
          <p> {task.desc} </p>
        </CardDescWrapper>
      );
    })
    return (
      <ListWrapper 
        onDragOver={(e)=>this.onDragOver(e)}
        onDrop={(e)=>{this.onDrop(e, catValue)}}>
        <CloseIcon><i class="fa fa-trash"></i></CloseIcon>
        <CloseIcon><i class="fa fa-plus" onClick={this.openModal}></i></CloseIcon>
        <p> {this.props.title} </p>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <Card closeModal={this.closeModal} />
        </Modal>
        {this.props.cat == 'todo' && <div>{tasks.todo}</div>}
        {this.props.cat == 'wip' && <div>{tasks.wip}</div>}
        {this.props.cat == 'completed' && <div>{tasks.completed}</div>}
      </ListWrapper>
    );
  }
}