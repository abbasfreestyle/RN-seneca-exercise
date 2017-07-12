import React, {Component} from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ListItem from '../components/item';

class ListScreen extends Component {
  static navigationOptions = {
    title: 'More Examples',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../images/icons/seneca.png')} style={s.icon} />
    ),
  }

  keyExtractor = (item,index) => item.id;

  renderItem = ({item}) => {
    return (<ListItem item={item} />)
  }

  render(){
    return (
      <FlatList data={this.props.causeAndEffect}
      renderItem={this.renderItem}
      keyExtractor={this.keyExtractor}
      />
    )
  }
}

const mapStateToProps = state => {
    return state;
}

const s = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
    tintColor: 'black',
  },
});

export default connect(mapStateToProps)(ListScreen);
