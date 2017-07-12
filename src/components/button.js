import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';

class Button extends Component {

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={s.buttonContainer}>
          <Text style={s.text}>{this.props.title}</Text>
          <Image style={s.icon} source={require('../images/icons/nexticon.png')}/>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const s = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#578f41',
    borderRadius: 5,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    tintColor: 'white',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    alignSelf:'center',
    marginLeft:5,
    padding: 10,
  }
});

export {Button};
