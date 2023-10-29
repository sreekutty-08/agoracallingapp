import React from 'react';
import { View, StyleSheet } from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';

interface RTCProps {
  appId: string;
  channelProfile: number;
  videoEncoderConfig: {
    width: number;
    height: number;
    bitrate: number;
    frameRate: number;
    orientationMode: number;
  };
  audioProfile: number;
}

const App = () => {
  const rtcProps: RTCProps = {
    appId: '393ca1daaca346e0959db2ef13cc81f1',
    channelProfile: 1, 
    videoEncoderConfig: {
      width: 720,
      height: 1080,
      bitrate: 1,
      frameRate: 15, 
      orientationMode: 1, 
    },
    audioProfile: 0, 
  };

  return (
    <View style={styles.container}>
      <AgoraUIKit {...({ rtcProps } as any)} callbacks={{}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
