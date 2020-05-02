import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MenuButton from '../componentes/MenuBotton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <MenuButton navigation={navigation}/>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
