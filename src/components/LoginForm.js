import React, {Component} from 'react';
import {Text} from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

  state = {email: '', password: '', error: ''}

  onButtonPress() {
    this.setState({error: ''});
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch((error) => {
            this.setState({error: `authentication failed ${error}`});
            console.log('error', error);
          })
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry="false"
            placeholder="user@gmail.com"
            label={'email'}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            style={{height: 20, width: 100}}/>
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry="true"
            placeholder="password"
            label='password'
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;