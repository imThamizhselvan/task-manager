import React, { Component } from 'react';
import { db } from '../firebase';
import { Wrapper, SingleLineInput, MultiLineInput, AddComment, CloseIcon } from './styles';

export default class Card extends Component {
  constructor() {
    super();
    this.setState({
      taskTitle: '',
      taskDesc: '',
      deleteTask: '',
      taskCat: ''
    })
  }

  onSubmit = () => {
    console.log('this', this);
    if (this.props.edit) {
      var updateTasks = db.collection("tasks").doc(this.props.task[0].id);
      return updateTasks.update({
        desc: this.state.taskDesc,
        title: this.state.taskTitle,
        cat: this.state.taskCat
      })
      .then(() => {
          console.log("Document successfully updated!");
          this.props.closeModal();
      })
      .catch(function(error) {
          console.error("Error updating document: ", error);
      });
    } else {
      db.collection('tasks').add({
        creator: "thamizh",
        currentOwner: "thamizh",
        desc: this.state.taskDesc,
        title: this.state.taskTitle,
        status: this.props.status,
        cat: this.state.taskCat
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    }
    this.props.closeModal();
  }

  deleteTask = () => {
    if (this.props.edit) {
      db.collection('tasks').where('title', '==', this.props.task[0].title)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          db.collection("tasks").doc(doc.id).delete().then(function() {
              console.log("Document successfully deleted!");
          }).catch(function(error) {
              console.error("Error removing document: ", error);
          });
        });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
    }
    this.props.closeModal();
  }

  componentWillMount() {
    if (this.props.task && this.props.task.length > 0) {
      this.setState({
        taskTitle: this.props.task[0].title,
        taskDesc: this.props.task[0].desc,
        taskCat: this.props.task[0].cat
      })
    } else {
      this.setState({
        taskTitle: '',
        taskDesc: '',
        taskCat: ''
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <CloseIcon onClick={this.props.closeModal}><i className="fa fa-close"></i></CloseIcon>
        <CloseIcon onClick={this.deleteTask}><i className="fa fa-trash"></i></CloseIcon>
        <p> Title </p>
        <SingleLineInput value={this.state.taskTitle} onChange={(evt) => this.setState({ taskTitle: evt.target.value })} />
        <p> Description </p>
        <MultiLineInput value={this.state.taskDesc} onChange={(evt) => this.setState({ taskDesc: evt.target.value })} />
        <p> Category </p>
        <SingleLineInput value={this.state.taskCat} onChange={(evt) => this.setState({ taskCat: evt.target.value })} />
        <AddComment onClick={this.onSubmit}> Add Task </AddComment>
      </Wrapper>
    );
  }
}