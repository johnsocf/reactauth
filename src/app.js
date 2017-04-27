import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyDz-cdRH7OYqsewOlNn7tBB45lO44QxGpI',
        authDomain: 'authentication-2cf82.firebaseapp.com',
        databaseURL: 'https://authentication-2cf82.firebaseio.com',
        projectId: 'authentication-2cf82',
        storageBucket: 'authentication-2cf82.appspot.com',
        messagingSenderId: '532071058232'
      }
    );
  }
  render() {
    return (
      <View>
        <Header headerText="authentication" />
        <LoginForm/>
      </View>
    );
  }
}

export default App;