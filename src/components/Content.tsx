import React from 'react';
import {View} from 'react-native';
import Chips from './Chips';

export default function Content() {
  return (
    <View style={{borderWidth: 1, borderColor: 'red'}} pointerEvents="auto">
      <Chips />
    </View>
  );
}
