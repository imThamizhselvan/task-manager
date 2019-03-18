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
          name:"Learn Angular",
          category:"wip", 
          desc: "asdasf",
          bgcolor: "yellow"
        },  
        {
          name:"React", 
          category:"wip", 
          desc: "asdasf",
          bgcolor:"pink"
        },  
        {
          name:"Vue", 
          category:"complete", 
          desc: "asdasf",
          bgcolor:"skyblue"
        }          
      ]
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

  onDragOver = (ev) => {
    ev.preventDefault();
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
    console.log('this', this.state);
    var tasks = { 
      todo: [], 
      wip: [],
      completed: []        
    }       
    this.state.tasks.forEach((task) => {
      console.log('task', task);
      tasks[task.category].push(
        <CardDescWrapper 
          key={task.name}
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
        onDrop={(e)=>{this.onDrop(e, "wip")}}>
      >
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
        <AddComment onClick={this.openModal}> Add New Card </AddComment>
      </ListWrapper>
    );
  }
}