'use strict';
var React = require('react-native');
//var ConcatsItem = require('./chats.item');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  PixelRatio,
  View,
  ScrollView,
  Text
} = React;

var Concats = React.createClass({
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
        <Text style={styles.list_item} 
          onPress={this.goTo.bind(this, '新的朋友')}>新的朋友</Text>
        <Text style={styles.list_item} 
          onPress={this.goTo.bind(this, '群聊')}>群聊</Text>
        <Text style={styles.list_item} 
          onPress={this.goTo.bind(this, '标签')}>标签</Text>
        <Text style={styles.list_item} 
          onPress={this.goTo.bind(this, '公众号')}>公众号</Text>
      </ScrollView>
    );
  },
  goTo: function(name){
    // this.props.navigator.push({
    //   component: ConcatsItem,
    //   title: name,
    //   rightButtonTitle: '资料',
    //   onRightButtonPress: function(){
    //     React.AlertIOS.alert('开发中');
    //   }
    // })
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

module.exports = Concats;