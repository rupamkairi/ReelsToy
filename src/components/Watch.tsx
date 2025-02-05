import React from 'react';
import {Pressable, View, Text} from 'react-native';

export default function Watch() {
  return (
    <View>
      <Pressable
        onPress={() => {
          console.log('Pressed');
        }}>
        <Text>Watch</Text>
      </Pressable>
    </View>
  );
}
