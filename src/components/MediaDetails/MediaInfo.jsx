import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function MediaInfo({
  title,
  releaseYear,
  ageRestriction,
  duration,
  description,
  type,
  seasons,
  onPlayMediaPressed,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.headerContainer}>
        <Text style={styles.metaInfoText}>{releaseYear}</Text>
        <Text style={styles.age}>{ageRestriction}</Text>
        <Text style={styles.metaInfoText}>
          {type === 'MOVIE' ? `${duration} min` : `${seasons} season${seasons > 1 ? 's' : ''}`}
        </Text>
      </View>

      <Pressable style={styles.playButton} onPress={onPlayMediaPressed}>
        <FontAwesome name="play" size={20} color="black" />
        <Text style={styles.playText}>Play</Text>
      </Pressable>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  metaInfoText: {
    color: 'white',
    fontSize: 12,
  },
  age: {
    color: 'white',
    fontSize: 10,
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: '#636363',
    borderRadius: 2,
  },
  playButton: {
    backgroundColor: 'lightgrey',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  playText: {
    fontWeight: '600',
    fontSize: 15,
  },
  description: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
});
