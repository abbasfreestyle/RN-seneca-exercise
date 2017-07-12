import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Card extends Component {

  render() {
    return (
      <View style={[styles.container,{width: this.props.width-20, height: this.props.height,},this.props.style]}>
      {this.props.title && <Text style={styles.title}>{this.props.title}</Text>}
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding:10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowRadius: 1,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.25,
    elevation: 1,
  },
  title: {
    fontSize: 16,
    fontWeight:'bold',
    alignSelf:'center',
    padding: 10,
  }
});
export {Card};
