import { View, StyleSheet } from 'react-native';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { signOut } from '@/firebase/authHelpers';
import { router } from 'expo-router';

export default function HomeScreen() {
  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace('/auth/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text variant="h1" style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>You're successfully logged in</Text>
        
        <Button
          title="Sign Out"
          onPress={handleSignOut}
          variant="secondary"
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 32,
  },
  button: {
    marginTop: 16,
  },
}); 