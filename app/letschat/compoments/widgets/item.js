'use strict';
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
} = React;

var styles = StyleSheet.create({
  row: {
    paddingTop: 5,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  image:{
    width: 30
  },
  text:{
    flex: 1,
    marginTop: 7,
    marginLeft: 10
  }
});

module.exports = React.createClass({
  render: function(){
    return (
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={this.props.image} />
        <Text
          style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
});