import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

class ImageRatio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
    };
  }

  //If the user rotates the screen the image will remain responsive and preserve the aspect ratio
  onLayoutDidChange = (e) => {
    var ratio = this.props.whRatio;
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.width/ratio } });
  }

  render() {
    return (
      <View style={this.props.radiusStyle} onLayout={this.onLayoutDidChange}>
        <Image blurRadius={this.props.blurRadius} source={this.props.source} style={[this.state.size,this.props.style,this.props.radiusStyle]}>
        {this.props.children}
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
});
export {ImageRatio};
