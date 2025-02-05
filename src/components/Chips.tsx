import React from 'react';
import {Pressable, Text, View} from 'react-native';

export default function Chips() {
  return (
    <View>
      <Pressable
        onPress={() => {
          console.log('Chip Clicked');
        }}>
        <Text style={{color: 'white'}}>Chip</Text>
      </Pressable>
    </View>
  );
}
