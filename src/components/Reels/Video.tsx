import React, {useRef} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import RNVideo, {VideoRef} from 'react-native-video';

const {width: w, height: h} = Dimensions.get('window');

const v = [
  'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sample.mp4',
  'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sampleLandscape.mp4',
  'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/samplePortrait.mp4',
];

const VideoPlayer = () => {
  const videoRef = useRef<VideoRef>(null);

  return (
    <RNVideo
      ref={videoRef}
      source={{uri: v[0]}}
      resizeMode="contain"
      volume={1}
      controls={true}
      paused={false}
      repeat={true}
      muted={false}
      playInBackground={true}
      playWhenInactive={true}
      style={VideoStyles.video}
    />
  );
};

export default VideoPlayer;

const VideoStyles = StyleSheet.create({
  video: {
    width: w,
    height: h,
    borderWidth: 1,
    borderColor: 'red',
  },
});
