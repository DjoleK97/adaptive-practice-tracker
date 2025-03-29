import { initializeApp } from 'firebase/app';
import { initializeAuth, getAuth } from 'firebase/auth';
// For now, let's not use the persistence to get basic auth working
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getReactNativePersistence } from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// First, let's try without persistence to ensure basic auth works
const auth = getAuth(app);

// Later, once basic auth is working, you can try adding persistence:
/*
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
*/

export { app, auth };