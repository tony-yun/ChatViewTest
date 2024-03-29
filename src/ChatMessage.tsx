import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ChatMessage = () => {
  const scaleFirst = useSharedValue(0);
  const scaleSecond = useSharedValue(0);

  useEffect(() => {
    scaleFirst.value = withTiming(1, {duration: 500}, () => {
      scaleSecond.value = withTiming(1, {duration: 500});
    });
  }, []);

  const animatedStyleFirst = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleFirst.value}],
    };
  });

  const animatedStyleSecond = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleSecond.value}],
    };
  });

  return (
    <View style={styles.mainView}>
      <Animated.View style={[styles.messageContainer, animatedStyleFirst]}>
        <Text style={styles.messageText}>hello</Text>
      </Animated.View>
      <Animated.View style={[styles.messageContainer, animatedStyleSecond]}>
        <Text style={styles.messageText}>nice to meet you</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    transform: [{scale: 0.5}],
    borderWidth: 1,
    borderColor: 'black',
  },
  messageText: {
    fontSize: 16,
    color: 'black',
  },
});

export default ChatMessage;
