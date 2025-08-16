import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable } from 'react-native';

export default function MediaListItem({mediaItem}) {
  return (
    <Link href={`mediadetails/${mediaItem.id}`} asChild>
      <Pressable>
        <Image source={{uri: mediaItem.image}} style={{width:110, aspectRatio:3/4, marginHorizontal:5, borderRadius:5}}></Image>
      </Pressable>

    </Link>
  )
}