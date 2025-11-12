import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet } from 'react-native';

type AvatarBubbleProps = {
  mood?: 'neutral' | 'listening' | 'happy';
};

const AvatarBubble: React.FC<AvatarBubbleProps> = ({ mood = 'neutral' }) => {
  const bounce = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(bounce, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }, [mood]);

  const avatarSource = {
    neutral: require('../assets/images/freddyneutral.jpg'),
    listening: require('../assets/images/freddylistening.jpg'),
    happy: require('../assets/images/freddyneutral.jpg'),
  }[mood];

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: bounce }] }]}>
      <Image source={avatarSource} style={styles.avatar} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: { alignSelf: 'center', marginVertical: 10 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
});

export default AvatarBubble;
