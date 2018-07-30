/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Line from './app/Line';

type Props = {};
export default class App extends Component<Props> {
  state = {
    visible: false,
  }
  constructor(props) {
    super();
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    return (
      <View style={styles.container}>
      <Line />
      <TouchableOpacity onPress={this.onPress}>
      <Text style={{
        fontSize: 14,
        padding: 10,
      }}>
      Toggle
      </Text>
      </TouchableOpacity>
      <Modal
        visible={this.state.visible}
        onRequestClose={() => {}}>
        <Line />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={{
            fontSize: 14,
            padding: 10,
          }}>
          Toggle
          </Text>
        </TouchableOpacity>
      </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
