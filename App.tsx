import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Reels from './src/components/Reels';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <StatusBar />
        <Reels />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
