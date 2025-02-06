import React, {useEffect, useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import RNVideo, {
  OnBufferData,
  OnLoadData,
  OnVideoErrorData,
  VideoRef,
} from 'react-native-video';
import RNVideoPlayer, {VideoPlayerRef} from 'react-native-video-player';
import VideoOverlay from './VideoOverlay';
import Header from '../Header';
import Content from '../Content';

const {width: w, height: h} = Dimensions.get('window');

const v = [
  'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sample.mp4',
  'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sampleLandscape.mp4',
  'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/samplePortrait.mp4',
];

const VideoPlayer = ({url, isActive}: {url: string; isActive: boolean}) => {
  // const videoRef = useRef<VideoRef>(null);
  const videoPlayerRef = useRef<VideoPlayerRef>(null);

  function handleLoad(e: OnLoadData) {
    console.log('Loaded', url);
    // if (videoPlayerRef.current) {
    //   videoPlayerRef.current.pause();
    //   videoPlayerRef.current.resume();
    // }
  }
  // function handleBuffer(e: OnBufferData) {
  //   console.log('Buffering...', e.isBuffering);
  // }
  // function handleError(e: OnVideoErrorData) {
  //   console.log('Error', e.error);
  // }

  // useEffect(() => {
  //   console.log('VideoPlayerRef', videoPlayerRef.current);
  //   if (videoPlayerRef.current) {
  //     videoPlayerRef.current.resume();
  //   }
  // }, [videoPlayerRef]);

  return (
    <View style={VideoStyles.playerWrapperView}>
      <RNVideoPlayer
        // ref={videoRef}
        ref={videoPlayerRef}
        source={{uri: url}}
        // resizeMode="contain"
        volume={1}
        autoplay={true}
        pauseOnPress={true}
        paused={!isActive}
        // defaultMuted={true}
        // muted={true}
        // repeat={true}
        playInBackground={false}
        playWhenInactive={false}
        // style={VideoStyles.video}
        videoWidth={w}
        videoHeight={h - 48}
        disableControlsAutoHide={true}
        disableFullscreen={true}
        customStyles={{
          wrapper: VideoStyles.wrapper,
          videoWrapper: VideoStyles.videoWrapper,
          video: VideoStyles.video,
          controls: VideoStyles.controls,
          playControl: VideoStyles.playControl,
          seekBar: VideoStyles.seekBar,
          seekBarBackground: VideoStyles.seekBarBackground,
          seekBarKnob: VideoStyles.seekBarKnob,
        }}
        // controls={true}
        // controlsStyles={{
        //   hidePrevious: true,
        //   hideNext: true,
        //   hideForward: true,
        //   hideRewind: true,
        //   hideDuration: true,
        //   hideFullscreen: true,
        //   hidePosition: true,
        // }}
        onLoad={handleLoad}
        // onError={handleError}
        // onBuffer={handleBuffer}
      />
      {/* <VideoOverlay
        HeaderComponent={<Header />}
        ContentComponent={<Content />}
      /> */}
    </View>
  );
};

export default VideoPlayer;

const VideoStyles = StyleSheet.create({
  playerWrapperView: {
    width: w,
    height: h - 48,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    position: 'relative',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },
  videoWrapper: {
    borderWidth: 1,
    borderColor: 'yellow',
  },
  video: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'black',
  },
  controls: {
    borderWidth: 1,
    borderColor: 'pink',
    backgroundColor: 'black',
  },
  playControl: {
    borderWidth: 1,
    borderColor: 'red',
  },
  seekBar: {
    borderWidth: 1,
    borderColor: 'blue',
  },
  seekBarBackground: {
    borderWidth: 1,
    borderColor: 'yellow',
  },
  seekBarKnob: {
    borderWidth: 1,
    borderColor: 'green',
  },
});
