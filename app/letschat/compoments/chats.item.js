'use strict';
var React = require('react-native');

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
        <Text style={styles.list_item} onPress={this.goTo.bind(this, 'ad')}>ad</Text>
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

module.exports = ChatsItem;