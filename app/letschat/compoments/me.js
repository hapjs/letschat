'use strict';
var React = require('react-native');
var ListItem = require('./widgets/item');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  PixelRatio,
  View,
  ScrollView,
  Text
} = React;

var Me = React.createClass({
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
        <ListItem style={styles.list_item} 
          image={require('image!album')} text='相册'></ListItem>
        <ListItem style={styles.list_item} 
          image={require('image!favorite')} text='收藏'></ListItem>
        <ListItem style={styles.list_item} 
          image={require('image!wallet')} text='钱包'></ListItem>
        <ListItem style={styles.list_item} 
          image={require('image!face')} text='表情'></ListItem>
        <ListItem style={styles.list_item} 
          image={require('image!settings')} text='设置'></ListItem>
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

module.exports = Me;