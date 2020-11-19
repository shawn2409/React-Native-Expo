import React, { Component } from 'react';
import { View, StyleSheet,TextInput,Text,TouchableOpacity } from 'react-native';
class Main extends Component {
  constructor(props){
    super(props)
    this.state = { 
      name: ''
    } // 2. <- Add the component state
    this.onChangeText=this.onChangeText.bind(this)
    this.onPress=this.onPress.bind(this)
  }
  onChangeText(text){
    this.setState({
      name:text
    })
  }
  onPress(){
    this.props.navigation.navigate('Chat', { name: this.state.name });
  }
  render() {
    return (
      <View>
      <Text style={styles.title}>Enter your name:</Text> 
      <TextInput
        style={styles.nameInput}
        placeHolder="John Cena"
        name='name'
        onChangeText={this.onChangeText}
        value={this.state.name}
      />
      <TouchableOpacity onPress={this.onPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
const offset = 24;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: { 
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: { // 3. <- Add a style for the input
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  }
})
export default Main