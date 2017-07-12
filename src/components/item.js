import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import * as Imgs from '../data/localimages';
import {ImageRatio} from '../components';

class ListItem extends Component {

  render(){
    const {item, gotoView} = this.props;

    return (
      <TouchableOpacity onPress={gotoView}>
          <ImageRatio blurRadius={5} style={s.image} source={Imgs.getImage(item.causeImg)} >
            <View style={s.textContainer}>
              <Text style={s.text}>{item.topic}</Text>
            </View>
          </ImageRatio>
      </TouchableOpacity>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  gotoView: () => dispatch(NavigationActions.navigate({routeName: 'View', params: {item: props.item}})),
})

const s = StyleSheet.create({
  image: {
    height: 175,
    marginBottom: 2,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.5)',
  },
  text: {
    color:'white',
    fontSize: 24,
  }
});

export default connect(null, mapDispatchToProps)(ListItem);
