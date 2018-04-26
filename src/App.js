import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  AppRegistry,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';
import LinearGradient from './LinearGradient';

class App extends Component {
  state = {
    opacityVal: new Animated.Value(0)
  };

  componentDidMount() {
    setTimeout(() => {
      Animated.timing(this.state.opacityVal, {
        toValue: 1,
        easing: Easing.back(),
        duration: 10000
      }).start();
    }, 1000);
  }
  render() {
    const { opacityVal } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Native Web</h1>
        </header>

        <LinearGradient
          start={[0, 40]}
          end={[20, 100]}
          style={{ flex: 1, height: '100vh', justifyContent: 'space-between' }}>
          <Text>experimenting</Text>
          <Text>with</Text>
          <Text>linear</Text>
          <Text>gradient</Text>
        </LinearGradient>
        <Animated.View
          style={{
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'yellow',
            opacity: opacityVal
          }}>
          <Text>slow fade in</Text>
        </Animated.View>
        <LinearGradient
          colors={['#51C5E9', '#311b92']}
          start={[0, 40]}
          end={[20, 100]}
          style={{ flex: 1, height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <Text style={{ color: 'white', fontSize: 25, marginBottom: 15 }}>Enter your name:</Text>
            <TextInput
              placeholder="test"
              style={{
                color: 'white',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 4,
                padding: 15,
                fontSize: 25
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              marginTop: 15,
              backgroundColor: 'white',
              borderColor: 'blue',
              borderWidth: 2,
              borderRadius: 4,
              padding: 5
            }}
            onPress={() => {}}>
            <Text>And then press me! </Text>
          </TouchableOpacity>
        </LinearGradient>
      </div>
    );
  }
}

export default App;
