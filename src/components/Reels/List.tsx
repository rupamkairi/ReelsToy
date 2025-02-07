import {FlashList} from '@shopify/flash-list';
import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import VideoPlayer from './Video';

const DATA = [
  {
    id: '3',
    title: 'Third Item',
    url: 'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/samplePortrait.mp4',
  },
  {
    id: '1',
    title: 'First Item',
    url: 'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sample.mp4',
  },
  {
    id: '2',
    title: 'Second Item',
    url: 'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sampleLandscape.mp4',
  },
];

const {width: w, height: h} = Dimensions.get('window');

const List = () => {
  const flashListRef = useRef<FlashList<any>>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
    waitForInteraction: false,
    minimumViewTime: 0,
  }).current;

  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }, []);

  const handleNextVideo = useCallback(() => {
    if (activeIndex < DATA.length - 1) {
      flashListRef.current?.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    }
  }, [activeIndex]);

  const fling = Gesture.Fling().direction(Directions.UP).onEnd(handleNextVideo);

  const renderItem = useCallback(
    ({item, index}) => (
      <ListItem item={item} isActive={index === activeIndex} />
    ),
    [activeIndex],
  );

  return (
    <GestureDetector gesture={fling}>
      <View style={ListStyles.container}>
        <FlashList
          ref={flashListRef}
          data={DATA}
          renderItem={renderItem}
          estimatedItemSize={h}
          pagingEnabled
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={onViewableItemsChanged}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          initialScrollIndex={0}
        />
      </View>
    </GestureDetector>
  );
};

const ListItem = React.memo(({item, isActive}) => {
  return (
    <View style={ListItemStyles.container}>
      <VideoPlayer url={item.url} isActive={isActive} />
    </View>
  );
});

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
