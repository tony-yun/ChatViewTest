import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const onPressButton = () => {
    navigation.navigate('ChatMessage');
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="press me" onPress={onPressButton} />
    </View>
  );
};

export default Home;
