
var React = require('react-native');
var Util = require('./util');
var AddUser = require('./manager/addUser');
var ModifyPassword = require('./manager/modifyPassword');
var DeleteUser = require('./manager/deleteUser');
var PostMessage = require('./manager/postMessage');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} = React;


var Manager = React.createClass({

  render: function(){
    var colors = ['#F4000B', '#17B4FF', '#FFD900', '#F00000'];
    var tags = [];
    var items = [];
    var components = [ModifyPassword, AddUser, DeleteUser, PostMessage];
    var JSXDOM = [];
    for(var i in items){
      JSXDOM.push(
        <TouchableOpacity key={items[i]} onPress={this._loadPage.bind(this, components[i], items[i])}>
          <View style={[styles.item, {flexDirection:'row'}]}>
            <Text style={[styles.tag, {color: colors[i]}]}>{tags[i]}</Text>
            <Text style={[styles.font,{flex:1}]}>{items[i]}</Text>
          </View>
        </TouchableOpacity>
      );
    }


    return (
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          {JSXDOM}
        </View>
      </ScrollView>
    );
  },

  _loadPage: function(component, title){
    this.props.navigator.push({
      title: title,
      component: component
    });
  },

  _clear: function(){
    this.props.navigator.pop();
    AsyncStorage.clear();
  }

});

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5F5F5',
  },
  item:{
    height:40,
    justifyContent: 'center',
    borderTopWidth: Util.pixel,
    borderTopColor: '#ddd',
    backgroundColor:'#fff',
    alignItems:'center',
  },
  font:{
    fontSize:15,
    marginLeft:5,
    marginRight:10,
  },
  wrapper:{
    marginTop:30,
  },
  tag:{
    marginLeft:10,
    fontSize:16,
    fontWeight:'bold'
  }
});

module.exports = Manager;