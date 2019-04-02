import React, { Component } from 'react';
import List from './List';
import { db } from '../firebase';
import { Wrapper, BoardWrapper, SingleLineInput, MultiLineInput, AddComment, CloseIcon } from './styles';

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      todo: [], 
      wip: [],
      comp: []
    };
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

  render() {
    console.log('this.state board', this.state);
    return (
        <BoardWrapper>
            <p> Task board </p>
            <List title="To do" tasks={this.state.todo} cat="todo" />
            <List title="Work in Progress" tasks={this.state.wip} cat="wip" />
            <List title="Completed" tasks={this.state.comp} cat="comp"/>
        </BoardWrapper>
    );
  }
}