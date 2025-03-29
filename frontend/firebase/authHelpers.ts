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
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    console.error("Error signing up:", error.message);
    return { user: null, error: error.message };
  }
};

export const logIn = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    console.error("Error logging in:", error.message);
    return { user: null, error: error.message };
  }
};

export const signOut = async (): Promise<SignOutResponse> => {
  try {
    await firebaseSignOut(auth);
    return { success: true, error: null };
  } catch (error: any) {
    console.error("Error signing out:", error.message);
    return { success: false, error: error.message };
  }
};