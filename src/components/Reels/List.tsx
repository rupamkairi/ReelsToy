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
    id: '0',
    title: 'Mux Demo',
    url: 'https://stream.mux.com/JYgw3UJVJ6g008AGEqPCZBQOg01YXcGw9hd9jTwsemsjc/720p.mp4',
  },
  {
    id: '1',
    title: 'Mux Video',
    url: 'https://stream.mux.com/LBct00Mb011XT5UM7BAvSQU01YlEtACffbc212eWxcT1Zg/1080p.mp4',
  },
  {
    id: '2',
    title: 'Mux Player',
    url: 'https://stream.mux.com/PnAJ9Nq56EyReQvPQsIA018b1gy6SwFRLQMFv2Tvqk6s/720p.mp4',
  },
  {
    id: '3',
    title: 'Mux Data',
    url: 'https://stream.mux.com/Eld4CwamMzVGN1OBRXJOOy9tGZSTCAbNdWarsRvDUEk/1080p.mp4',
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

const ListItem = React.memo(
  ({
    item,
    isActive,
  }: {
    item: {id: string; title: string; url: string};
    isActive: boolean;
  }) => {
    return (
      <View style={ListItemStyles.container}>
        <VideoPlayer url={item.url} isActive={isActive} />
      </View>
    );
  },
);

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
