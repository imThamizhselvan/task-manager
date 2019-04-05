import React, { Component } from 'react';
import task from '../../images/undraw_task.svg';
import history from '../../history';
import { Wrapper, Img, Button } from './styles';

export default class TaskBox extends Component {

  handleWork = () => {
    history.push('/task');
  }

  render () {
    return(
      <Wrapper>
        <Img src={task} />
        <Button onClick={this.handleWork}> <span> Lets work</span> </Button>
      </Wrapper>
    );
  }
}