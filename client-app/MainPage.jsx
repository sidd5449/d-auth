import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const MainPage = ({ navigation, route }) => {

  const [userPin, setuserPin] = useState();
  const [status, setstatus] = useState('');
  const [tranId] = useState(route.params.transactionID);
  console.log(tranId);


  console.log(userPin);
  const handleSubmit = () => {
    const data = 
      {
        id: tranId,
        pin: userPin
      }
    axios.patch('https://d-auth.onrender.com/pushPin', data).then(() => {
      setInterval(() => {
        axios.get(`https://d-auth.onrender.com/status/${tranId}`).then((data) => {
          if(status !==[data.data]){
            setstatus([data.data]);
          }
          console.log(status);
        })
      }, 50);
    })
  }
  

  return (
    <LinearGradient colors={['#171717', '#080808']}>
    <View style={styles.app__main}>
        <Text style={styles.text} >D-Auth PIN Authentication</Text>
      <TextInput placeholder='Please Enter PIN' style={styles.textInput} onChangeText={(value) => setuserPin(value)} />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}><Text>Submit PIN</Text></TouchableOpacity>
      <Text>{status}</Text>
    </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    app__main: {
        marginTop: '80%',
        display:'flex', 
        flexDirection: 'column', 
        padding: 25,
        width: '100%',
        height: '100%',
        backgroundColor: "linear-gradient(#fff, #000)",
        alignItems: 'center',
    },
    textInput:{ 
        backgroundColor: "#9d9d9e",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: '80%',
    },
    text:{
        color: '#fff',
        fontWeight: 800,
        fontSize: 25,
    },
    button:{
        backgroundColor: '#fff',
        padding: 12,
        marginTop: 26,
        borderRadius: 12,
    }
})

export default MainPage