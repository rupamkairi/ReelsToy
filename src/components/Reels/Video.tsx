import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import RNVideoPlayer, {VideoPlayerRef} from 'react-native-video-player';

const {width: w, height: h} = Dimensions.get('window');

const VideoPlayer = ({url, isActive}: {url: string; isActive: boolean}) => {
  const videoPlayerRef = useRef<VideoPlayerRef>(null);
  const [key, setKey] = useState(0); // Add key to force remount

  useEffect(() => {
    if (videoPlayerRef.current) {
      if (isActive) {
        // Force remount the video player when becoming active
        setKey(prev => prev + 1);
        setTimeout(() => {
          videoPlayerRef.current?.resume();
        }, 50);
      } else {
        videoPlayerRef.current.pause();
      }
    }
  }, [isActive]);

  const handleLoad = () => {
    if (videoPlayerRef.current && isActive) {
      // Small timeout to ensure video is ready
      setTimeout(() => {
        videoPlayerRef.current?.resume();
      }, 50);
    }
  };

  return (
    <View style={styles.playerWrapperView}>
      <RNVideoPlayer
        key={key} // Add key to force remount
        ref={videoPlayerRef}
        source={{uri: url}}
        volume={1}
        autoplay={true}
        pauseOnPress={true}
        playInBackground={false}
        playWhenInactive={false}
        videoWidth={w}
        videoHeight={h - 48}
        disableControlsAutoHide={true}
        disableFullscreen={true}
        resizeMode="cover"
        customStyles={{
          wrapper: styles.wrapper,
          videoWrapper: styles.videoWrapper,
          video: styles.video,
          controls: styles.controls,
        }}
        onLoad={handleLoad}
        onEnd={() => {
          if (videoPlayerRef.current) {
            videoPlayerRef.current.resume();
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  playerWrapperView: {
    width: w,
    height: h - 48,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  videoWrapper: {
    flex: 1,
  },
  video: {
    backgroundColor: 'black',
  },
  controls: {
    backgroundColor: 'transparent',
  },
});

export default VideoPlayer;
