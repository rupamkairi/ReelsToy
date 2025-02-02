import React from 'react';
import List from './List';

const videos = [
  {
    _id: '1',
    uri: {
      uri: 'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sample.mp4',
    },
  },
  {
    _id: '2',
    uri: {
      uri: 'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sampleLandscape.mp4',
    },
  },
  {
    _id: '3',
    uri: {
      uri: 'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/samplePortrait.mp4',
    },
  },
];

const Reels = () => {
  return (
    <>
      <List />
    </>
  );
};

export default Reels;
