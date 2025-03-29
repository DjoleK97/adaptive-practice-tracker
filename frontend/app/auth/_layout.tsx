import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Text } from '@/components/ui/text';

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 