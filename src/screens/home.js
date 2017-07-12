import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {ImageRatio, Bubble, Card, Button} from '../components';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Seneca',
    tabBarLabel: 'Cause & Effect',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../images/icons/seneca.png')} style={s.icon} />
    ),
  };

  render(){
      return (
      <ScrollView>
        <Text style={s.title}>What are Cause and Effect?</Text>

        <Card title="CAUSE">
          <Text style={s.subtitle}>
            <Text>The cause is </Text>
            <Text style={s.highlight}>WHY </Text>
            <Text>something happened</Text>
          </Text>
          <ImageRatio whRatio={480/316} source={require('../images/why.png')} />
        </Card>

        <Card title="EFFECT">
          <Text style={s.subtitle}>
            <Text>The effect is </Text>
            <Text style={s.highlight}>WHAT </Text>
            <Text>happened</Text>
          </Text>
          <ImageRatio whRatio={1606/1001} source={require('../images/what.png')} />
        </Card>

        <Card>
          <Text style={s.paragraph}>The cause happens first but does not always come first in sentences.</Text>

          <Text style={s.paragraph}>Look for these keywords to help you find cause and effect in text.</Text>

          <View style={s.bubbleContainer}>
            <Bubble text="Because" />
            <Bubble text="Since" />
            <Bubble text="So" />
            <Bubble text="If" />
            <Bubble text="Then" />
            <Bubble text="Before" />
            <Bubble text="After" />
          </View>
        </Card>

        <Card title="EXAMPLE">
          <Text style={s.paragraph}>
            <Text>Angela was happy </Text>
            <Text style={s.highlight}>because </Text>
            <Text>she got to eat cake for dessert.</Text>
          </Text>
          <Text style={s.title}>CAUSE</Text>
          <Text style={s.paragraph}>Angela got to eat cake for dessert.</Text>
          <ImageRatio whRatio={700/525} source={require('../images/cateatcake.jpg')} />
          <Text style={s.title}>EFFECT</Text>
          <Text style={s.paragraph}>Angela was happy</Text>
          <ImageRatio whRatio={700/900} source={require('../images/cathappy.jpg')} />

          <Text style={s.paragraph}>
            <Text>You could also write it as “Angela got to eat cake for dessert </Text>
            <Text style={s.highlight}>SO </Text>
            <Text>She was happy.“</Text>
          </Text>

          <Text style={s.paragraph}>Now the cause (Angela got to eat cake for dessert) is before the effect (and was happy) in the sentence but both are still the same.</Text>
        </Card>

        <Button title="Let's look at some more examples" onPress={this.props.gotoList} />

      </ScrollView>
    )
  }

}

const s = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 20,
  },
  icon: {
    width: 26,
    height: 26,
    tintColor: 'black',
  },
  subtitle: {
    alignSelf: 'center',
    padding: 10,
  },
  paragraph: {
    justifyContent: 'center',
    alignSelf:'center',
    paddingVertical: 5,
  },
  highlight: {
    color: 'green',
    fontWeight: 'bold',
  },
  bubbleContainer: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

const mapDispatchToProps = (dispatch) => ({
  gotoList: () => dispatch(NavigationActions.navigate({routeName: 'List'})),
})

export default connect(null, mapDispatchToProps)(HomeScreen);
