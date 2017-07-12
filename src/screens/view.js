import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, UIManager,
  LayoutAnimation, Platform} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {Card, ImageRatio, CheckButton} from '../components';
import * as Imgs from '../data/localimages';
import * as actions from '../actions';

class ViewScreen extends Component {

  constructor(props){
    super(props);
    //reset the timer
    this.seconds = 0;
    this.state= {
      completed: false,
      timeStart: false,
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.item.topic,
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../images/icons/seneca.png')} style={s.icon} />
    ),
  });

  componentDidMount(){
    if (Platform.OS === 'android'){
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    //check once if this task has already been completed, then set the state to manage interactions
    const {saved, navigation} = this.props;
    var found = false;
    for (var i = 0; i < saved.length; i++) {
      if(saved[i] === navigation.state.params.item.id){
        found = true;
      }
    }
    this.setState({completed: found},()=>{
      //Only start the timer if this task is not complete
      if (!this.state.completed){
        this.timer = setInterval(()=>{this.seconds++},1000);
      }
    });
  }

  componentWillUnmount(){
    //check if this task is completed, if it is then no need to stop and save the timer because it's already stopped
    if (!this.state.completed){
      this.props.timer(this.seconds);
      clearInterval(this.timer);
    }
  }

  markCompleted(id){
    //animate the state change
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    //save the completed task and time log
    this.setState({completed: !this.state.completed},()=>{
      if (this.state.completed){
        //save current task
        this.props.completed(1);
        this.props.save(id);
        //stop the timer
        this.props.timer(this.seconds);
        clearInterval(this.timer);
      } else {
        //remove saved task
        this.props.undo(1);
        this.props.unsave(id);
        //continue the timer
        this.timer = setInterval(()=>{this.seconds++},1000);
      }
    });
  }

  render(){
    //update the status of CheckButton
    const color = this.state.completed ? '#092666' : '#578f41';
    const text = this.state.completed ? "Completed" : "Mark as completed";
    const {item} = this.props.navigation.state.params;

      return (
      <ScrollView>
        <Card title="Cause and Effect">
          <Text style={s.paragraph}>{item.example}</Text>
        </Card>
        <Card title="CAUSE">
          <Text style={s.paragraph}>{item.cause}</Text>
          <ImageRatio whRatio={100/100} source={Imgs.getImage(item.causeImg)} />
        </Card>
        <Card title="EFFECT">
          <Text style={s.paragraph}>{item.effect}</Text>
          <ImageRatio whRatio={100/100} source={Imgs.getImage(item.effectImg)} />
        </Card>
        <CheckButton title={text} style={{backgroundColor: color}}  onPress={() => this.markCompleted(item.id)} />
      </ScrollView>
    )
  }

}

const s = StyleSheet.create({
  paragraph: {
    justifyContent: 'center',
    alignSelf:'center',
    paddingVertical: 5,
  },
  icon: {
    width: 26,
    height: 26,
    tintColor: 'black',
  },
});

const mapStateToProps = state => {
    //retrieve the saved array
    return { saved: state.saved };
}

export default connect(mapStateToProps,actions)(ViewScreen);
