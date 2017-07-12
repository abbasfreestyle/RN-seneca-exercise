import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {Card, ProgressBar} from '../components';

class ProgressScreen extends Component {
  static navigationOptions = {
    title: 'Progress',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../images/icons/charticon.png')} style={s.icon} />
    ),
  };

 formatTime(s) {
  //format the seconds saved into 00:00:00
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;
  return this.addZeros(hrs) + ':' + this.addZeros(mins) + ':' + this.addZeros(secs);
}

addZeros(time) {
  return (time < 10) ? ("0" + time) : time;
}

  render(){
    const {progress, timeCompleted, listLength} = this.props;
    const percentage = parseInt((100/listLength)*progress);

      return (
      <ScrollView>

        <Card title="Completed">
          <Text style={s.subtitle}>{percentage}%</Text>
          <ProgressBar percent={percentage} />
        </Card>

        <Card title="Total time spent">
          <Text style={s.subtitle}>{this.formatTime(timeCompleted)}</Text>
        </Card>

      </ScrollView>
    )
  }

}

const s = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
    tintColor: 'black',
  },
  subtitle: {
    alignSelf: 'center',
    fontSize: 24,
    padding: 10,
  },
});

const mapStateToProps = state => {
    //retrieve saved progress data
    return { progress: state.progress, timeCompleted: state.timeCompleted, listLength: state.causeAndEffect.length};
}

export default connect(mapStateToProps)(ProgressScreen);
