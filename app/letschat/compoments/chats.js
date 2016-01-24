'use strict';
var React = require('react-native');
var Chat = require('./chats.item');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  PixelRatio,
  View,
  ScrollView,
  Text
} = React;

var Chats = React.createClass({
  render: function(){
    return (
      <NavigatorIOS
        style={styles.flex}
        initialRoute={{
          title: 'LetsChat',
          component: List
        }} />
      
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ScrollView
        style={styles.flex}>
        <Text style={styles.list_item} onPress={this.goTo.bind(this, 'ad')}>ad</Text>
        <Text style={styles.list_item} onPress={this.goTo.bind(this, '306')}>306</Text>
        <Text style={styles.list_item} onPress={this.goTo.bind(this, '大数据前沿技术交流群')}>大数据前沿技术交流群</Text>
      </ScrollView>
    );
  },
  goTo: function(name){
    this.props.navigator.push({
      component: Chat,
      title: name,
      rightButtonTitle: '资料',
      onRightButtonPress: function(){
        React.AlertIOS.alert('开发中');
      }
    })
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

module.exports = Chats;