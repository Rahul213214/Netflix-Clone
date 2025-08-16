import MediaHeader from '@/src/components/MediaDetails/MediaHeader';
import { useLocalSearchParams } from 'expo-router';
import { useVideoPlayer } from 'expo-video';
import React, { useRef } from 'react';
import { SafeAreaView, Text } from 'react-native';
import mediaDetailedList from '../../../assets/data/mediaDetailedList.json';
import MediaInfo from '../../components/MediaDetails/MediaInfo';

export default function MediaDetails() {
  const { id } = useLocalSearchParams();
  const videoViewRef = useRef(null); // ✅ Correct for JSX

  const mediaItem = mediaDetailedList.find((media) => media.id === id);

  if (!mediaItem) {
    return <Text style={{ color: 'white' }}>Media not found!</Text>;
  }

  const {
    title,
    releaseYear,
    ageRestriction,
    duration,
    description,
    type,
    seasons,
    trailer,
    videoUrl,
    thumbnail,
  } = mediaItem;

  const videoSource =
    type === 'MOVIE'
      ? videoUrl
      : seasons?.[0]?.episodes?.[0]?.videoUrl;

  if (!videoSource) {
    return <Text style={{ color: 'white' }}>Video source not found!</Text>;
  }

  const trailerPlayer = useVideoPlayer(trailer, (player) => {
    player.currentTime = 10;
    player.play();
  });

  const mediaPlayer = useVideoPlayer(videoSource, (player) => {
    player.showNowPlayingNotification = true;
  });

  const onPlayMediaPressed = () => {
    trailerPlayer.pause();
    videoViewRef.current?.enterFullscreen();
    mediaPlayer.play();
  };

  return (
    <SafeAreaView>
      <MediaHeader
        thumbnail={thumbnail}
        trailerPlayer={trailerPlayer}
        mediaplayer={mediaPlayer}
        videoViewRef={videoViewRef}
      />
      <MediaInfo
        title={title}
        releaseYear={releaseYear}
        ageRestriction={ageRestriction}
        duration={duration}
        description={description}
        type={type}
        seasons={seasons?.length}
        onPlayMediaPressed={onPlayMediaPressed}
      />
    </SafeAreaView>
  );
}
