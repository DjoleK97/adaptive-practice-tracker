import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  UserCredential,
  User
} from 'firebase/auth';
import { auth } from './firebase';

interface AuthResponse {
  user: User | null;
  error: string | null;
}

interface SignOutResponse {
  success: boolean;
  error: string | null;
}

export const signUp = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    console.error("Error signing up:", error.message);
    return { user: null, error: error.message };
  }
};

export const signIn = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    console.error("Error signing in:", error.message);
    return { user: null, error: error.message };
  }
};

export const signOut = async (): Promise<AuthResponse> => {
  try {
    await firebaseSignOut(auth);
    return { user: null, error: null };
  } catch (error: any) {
    console.error("Error signing out:", error.message);
    return { user: null, error: error.message };
  }
};