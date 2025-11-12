import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ChatScreen from './Freddy-Bot/app/chatScreen';

export default function App(){
    return (
        <View>
            <ChatScreen/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });