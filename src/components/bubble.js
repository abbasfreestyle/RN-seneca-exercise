import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Bubble extends Component {

  render(){
      return (
      <View style={s.bubble}>
        <Text style={s.text}>{this.props.text}</Text>
      </View>
    )
  }

}

const s = StyleSheet.create({
  bubble: {
    backgroundColor: 'turquoise',
    borderRadius: 25,
    margin: 5,
    padding: 5,
    paddingHorizontal: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export {Bubble};
