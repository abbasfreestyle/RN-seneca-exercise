import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class ProgressBar extends Component {

  render() {
    //get the percentage and divide it by 100 to that it's readable for flex
    const percent = this.props.percent;
    const completed = percent/100;
    const incomplete = 1-completed;
    return (
      <View style={s.outerBar}>
        <View style={[{flex: completed},s.completed]} />
        <View style={{flex:incomplete}} />
      </View>
    );
  }
}

const s = StyleSheet.create({
  outerBar: {
    flexDirection: 'row',
    flex: 1,
    margin: 10,
    height: 10,
  },
  completed: {
    backgroundColor: '#578f41',
    borderRadius: 10,
  }
});
export {ProgressBar};
