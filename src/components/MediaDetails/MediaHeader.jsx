import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { VideoView } from 'expo-video';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

export default function MediaHeader({ thumbnail, trailerPlayer, mediaplayer, videoViewRef }) {
  const [isTrailerLoading, setTrailerLoading] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <AntDesign
        name="closecircle"
        size={24}
        style={styles.closeIcon}
        onPress={() => {
          router.back();
        }}
      />

      {isTrailerLoading && (
        <ImageBackground
          source={{ uri: thumbnail }}
          style={[StyleSheet.absoluteFill, styles.imageBackground]}
        >
          <ActivityIndicator size="large" color="white" />
        </ImageBackground>
      )}

      {/* Trailer Preview */}
      <VideoView
        style={StyleSheet.absoluteFill}
        player={trailerPlayer}
        onFirstFrameRender={() => setTrailerLoading(false)}
      />

      {/* Main Video Player (hidden until fullscreen) */}
      <VideoView
        ref={videoViewRef}
        player={mediaplayer}
        style={{ height: 0, width: 0 }} // keep hidden
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: '100%',
    paddingTop: 30,
  },
  imageBackground: {
    justifyContent: 'center',
    opacity: 0.6,
  },
  closeIcon: {
    zIndex: 1,
    alignSelf: 'flex-end',
    padding: 10,
  },
});
