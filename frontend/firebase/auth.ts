import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config"; // ✅ Use the initialized auth instance
import { getAuth } from "firebase/auth";

export const signUp = async (email: string, password: string) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("🔥 signUp failed:", error); // 🔍 Debug log
    throw error;
  }
};

export const logIn = async (email: string, password: string) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("🔥 logIn failed:", error); // 🔍 Debug log
    throw error;
  }
};
