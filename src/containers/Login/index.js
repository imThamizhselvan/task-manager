import React, { Component } from 'react';
import firebase from 'firebase';
import GithubLoginButton from "react-social-login-buttons/lib/buttons/GithubLoginButton";
import history from '../../history';
import { InfoArea, LoginArea, LoginWrapper, Img } from './styles';
import dev from '../../images/undraw_dev.svg';

export default class Login extends Component {

  login = () => {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('hit', result);
      console.log('hit2', user);
      localStorage.setItem("access_token", token);
      history.push('/home');
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render () {
    return(
      <LoginWrapper>
        <InfoArea>
          <p> Coderz Mafia </p>
        </InfoArea>
        <LoginArea>
          <Img src={dev} />
          <GithubLoginButton onClick={this.login} />
        </LoginArea>
      </LoginWrapper>
    );
  }
}