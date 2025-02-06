import {FlashList} from '@shopify/flash-list';
import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import VideoPlayer from './Video';

const DATA = [
  {
    title: 'First Item',
    url: 'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sample.mp4',
  },
  {
    title: 'Second Item',
    url: 'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sampleLandscape.mp4',
  },
  {
    title: 'Third Item',
    url: 'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/samplePortrait.mp4',
  },
];

const {width: w, height: h} = Dimensions.get('window');

const List = () => {
  const flashListRef = useRef<FlashList<any> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

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
          renderItem={({item, index}) => (
            <ListItem item={item} isActive={index === activeIndex} />
          )}
          estimatedItemSize={h}
          pagingEnabled
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={onViewableItemsChanged}
        />
      </View>
    </GestureDetector>
  );
};

const ListItem = ({item, isActive}) => {
  return (
    <View style={ListItemStyles.container}>
      {/* <Text>{item.title}</Text> */}
      <VideoPlayer url={item.url as string} isActive={isActive} />
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
    backgroundColor: 'black',
  },
});
