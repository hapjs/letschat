'use strict';
var React = require('react-native');
//var DiscoverItem = require('./chats.item');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  PixelRatio,
  View,
  ScrollView,
  Text
} = React;

var Discover = React.createClass({
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
          onPress={this.goTo.bind(this, '朋友圈')}>朋友圈</Text>
        <Text style={styles.list_item} 
          onPress={this.goTo.bind(this, '扫一扫')}>扫一扫</Text>
        <Text style={styles.list_item} 
          onPress={this.goTo.bind(this, '摇一摇')}>摇一摇</Text>
        <Text style={styles.list_item} 
          onPress={this.goTo.bind(this, '购物')}>购物</Text>
        <Text style={styles.list_item} 
          onPress={this.goTo.bind(this, '游戏')}>游戏</Text>
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

module.exports = Discover;