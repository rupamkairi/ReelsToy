import {FlashList} from '@shopify/flash-list';
import React, {useRef} from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import VideoPlayer from './Video';

const DATA = [
  {title: 'First Item'},
  {title: 'Second Item'},
  {title: 'Third Item'},
  {title: 'Fourth Item'},
  {title: 'Five Item'},
];

const {width: w, height: h} = Dimensions.get('window');

const List = () => {
  const flashListRef = useRef<FlashList<any> | null>(null);

  const fling = Gesture.Fling()
    .direction(Directions.UP)
    .onEnd(() => {
      console.log('NEXT');
    });

  return (
    <GestureDetector gesture={fling}>
      <View style={ListStyles.container}>
        <FlashList
          ref={flashListRef}
          data={DATA}
          renderItem={ListItem}
          estimatedItemSize={h}
          pagingEnabled
        />
      </View>
    </GestureDetector>
  );
};

const ListItem = ({item}) => {
  return (
    <View style={ListItemStyles.container}>
      {/* <Text>{item.title}</Text> */}
      <VideoPlayer />
    </View>
  );
};

export default List;

const ListStyles = StyleSheet.create({
  container: {
    width: w,
    height: h,
  },
});
const ListItemStyles = StyleSheet.create({
  container: {
    width: w,
    height: h,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
