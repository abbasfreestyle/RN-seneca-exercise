import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';

class CheckButton extends Component {

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={[s.buttonContainer,this.props.style]}>
          <Text style={s.text}>{this.props.title}</Text>
          <Image style={s.icon} source={require('../images/icons/checkicon.png')}/>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const s = StyleSheet.create({
  buttonContainer: {
    //set default backgroundColor
    backgroundColor: 'turquoise',
    flexDirection: 'row',
    borderRadius: 5,
    margin: 10,
    alignSelf: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    margin: 10,
    tintColor: 'white',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf:'center',
    marginLeft:5,
    padding: 10,
  }
});

export {CheckButton};
