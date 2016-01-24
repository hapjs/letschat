'use strict';
var React = require('react-native');
// var ChatSection = require('./chat.section');
// var ChatMessage = require('./chat.message');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  PixelRatio,
  View,
  Text
} = React;

var ChatsItem = React.createClass({
  render: function(){
    return (
      <View>
        <Text>this.props.name</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  flex: {
    flex:1
  },
  list_item:{
    padding: 10,
    backgroundColor: '#EEE',
    marginBottom: 1 / PixelRatio.get()
  }
});

module.exports = Chat;