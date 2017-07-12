import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';
import {addNavigationHelpers, StackNavigator, TabNavigator} from 'react-navigation';
import {NavigationActions} from 'react-navigation';

import ListScreen from '../screens/list';
import ViewScreen from '../screens/view';
import HomeScreen from '../screens/home';
import ProgressScreen from '../screens/progress';

const theme =   {
  navigationOptions: {
      headerStyle: {
        backgroundColor: 'whitesmoke',
        elevation: 0
      },
      headerTitleStyle:{ color: '#4470C3' },
  }
};

const TabsNavigator = TabNavigator({
  Home: {screen: HomeScreen},
  Progress: {screen: ProgressScreen}
},{
  tabBarOptions: {
    activeTintColor: '#4470C3' ,
    inactiveTintColor: 'grey' ,
    pressColor: '#4470C3' ,
    pressOpacity: '#4470C3' ,
    indicatorStyle: { backgroundColor: '#4470C3'} ,
    style: {backgroundColor: 'whitesmoke'},
    upperCaseLabel: true,
  }
});

export const AppNavigator = StackNavigator({
  Main: {screen: TabsNavigator},
  List: {screen: ListScreen},
  View: {screen: ViewScreen},
},theme);

class AppWithNavState extends Component {
  //We need to setup a Back button listener for Android, React Navigation doesn't support this out of the box while using Redux.
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) { return false }
    dispatch(NavigationActions.back());
    return true;
  };
  render(){
    const {dispatch, nav} = this.props;
    return <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})} />
  }
}

const mapStateToProps = state => ({nav: state.nav });

export default connect(mapStateToProps)(AppWithNavState);
