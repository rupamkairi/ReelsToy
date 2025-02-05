import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  headerComponent?: ReactNode;
  contentComponent?: ReactNode;
  actionsComponent?: ReactNode;
};

export default function VideoOverlay({}: Props) {
  return (
    <View style={OverlayStyles.wrapper} pointerEvents="none">
      <View style={OverlayStyles.container}>
        <View style={OverlayStyles.header}>
          <Text style={OverlayStyles.text}>Header</Text>
        </View>
        <View style={OverlayStyles.body}>
          <View style={OverlayStyles.content}>
            <Text style={OverlayStyles.text}>Content</Text>
          </View>
          <View style={OverlayStyles.actions}>
            <Text style={OverlayStyles.text}>Axns</Text>
          </View>
          {/* <Text style={OverlayStyles.text}>Body</Text> */}
        </View>
        {/* <Text style={OverlayStyles.text}>React Native</Text> */}
      </View>
    </View>
  );
}

const OverlayStyles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    inset: 0,
    padding: 8,
    borderWidth: 1,
    borderColor: 'green',
  },
  container: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

    borderWidth: 1,
    borderColor: 'white',
  },
  header: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'cyan',
  },
  body: {
    flex: 8,
    borderWidth: 1,
    borderColor: 'pink',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: 4,
    borderWidth: 1,
    borderColor: 'yellow',
    width: '100%',
  },
  actions: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    width: '100%',
  },

  text: {
    fontSize: 24,
    fontWeight: 900,
    color: 'white',
  },
});
