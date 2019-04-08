import React, { Component } from 'react';
import Twitter from '../../components/Twitter';
import TaskBox from  '../../components/TaskBox';
import Activity from '../../components/Activity';
import { Wrapper, HalfLayoutWrapper, BiLayoutWrapper, SingleLayoutWrapper } from './styles';

const activity_API = 'https://api.github.com/users/thamizhselvan93/received_events?access_token='

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      activity: [],
    };
  }
  
  componentDidMount() {
    let key = localStorage.getItem('access_token');
    fetch(activity_API + key)
      .then(response => response.json())
      .then(data => this.setState({ activity: data }));
  }

  render () {
    return(
      <Wrapper>
        <SingleLayoutWrapper>
          <HalfLayoutWrapper>
            Task
          </HalfLayoutWrapper>
          <HalfLayoutWrapper>
            <TaskBox />
          </HalfLayoutWrapper>
        </SingleLayoutWrapper>
        <SingleLayoutWrapper>
          <Activity data={this.state.activity}/>
        </SingleLayoutWrapper>
        <SingleLayoutWrapper>
          <Twitter /> 
        </SingleLayoutWrapper>
      </Wrapper>
    );
  }
}