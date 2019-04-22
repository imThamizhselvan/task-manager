import React, { Component } from 'react';
import { Propic, Name, PersonWrapper, ActivityWrapper } from './styles';

export default class Activity extends Component {
  
  constructor() {
    super();
    this.setState({
      test: ''
    })
  }

  handleActivityType = (type) => {
    console.log('type', type);
    switch(type) {
      case "CreateEvent":
        return "Created the repository"
      case "ForkEvent":
        return "Forked the repository"
      case "WatchEvent":
        return "Starred the repository"
      default: 
        return "test"
    }
  }

  render () {
    console.log('this.props', this.props.data);
    return(
      <ActivityWrapper> 
        { this.props.data.map((item, i) => 
          <PersonWrapper>
            <Propic alt="profile pic" src={item.actor.avatar_url} />
            <Name> {item.actor.display_login} </Name> 
            <p> {this.handleActivityType(item.type)} <i> {item.repo.name} </i></p>
          </PersonWrapper>
        )}
      </ActivityWrapper>
    );
  }
}
