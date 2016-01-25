'use strict';
var React = require('react-native');
var _ = require('lodash');

var Chats = require('./chats');
var Concats = require('./concats');
var Discover = require('./discover');
var Me = require('./me');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  TabBarIOS,
  PixelRatio,
  View
} = React;

var Letschat = React.createClass({
  //
  getInitialState() {

    return {
      selectedTab: 'chat',
      tabs: {
        chat: {
          title: '聊天', icon: require('image!chat'), getTarget: function(){
            return (<Chats></Chats>); 
          }
        },
        concats: {
          title: '联系人', icon: require('image!concats'), getTarget: function(){
            return (<Concats></Concats>); 
          }
        },
        discover: {
          title: '发现', icon: require('image!discover'), getTarget: function(){
            return (<Discover></Discover>); 
          }
        },
        me: {
          title: '我', icon: require('image!me'), getTarget: function(){
            return (<Me></Me>); 
          }
        }
      }
    };
  },

  //
  select: function(name){
    this.setState({
      selectedTab: name
    });
  },

  //
  getTabBarItems: function(){
    var items = [];
    var self = this;

    _.each(this.state.tabs, function(tab, tabName){
      
      tab = _.assign({
        title: tabName,
        getTarget: function(){ return (<View></View>); }
      }, tab);

      items.push(
        <TabBarIOS.Item
          key={tabName}
          title={tab.title}
          icon={tab.icon}
          onPress={self.select.bind(self, tabName)}
          selected={self.state.selectedTab === tabName}>
          {tab.getTarget()}
        </TabBarIOS.Item>
      );
    });

    return items;
  },

  //
  render: function(){

    return (
      <TabBarIOS style={styles.flex}>
        {this.getTabBarItems()}
      </TabBarIOS>
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

module.exports = Letschat;