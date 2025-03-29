import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TestAuth() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Auth Test Screen</Text>
      <Text style={styles.text}>If you can see this, the screen is loading correctly</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#000',
    marginBottom: 20,
  },
});