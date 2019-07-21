import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    //JSX syntax
    //Basic UI
    <View style={styles.container}>
      <Text>Test React</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
