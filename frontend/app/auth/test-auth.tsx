import { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet, Text } from "react-native";
import { signUp, logIn } from "@/firebase/auth";

export default function TestAuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      Alert.alert("Success", "User registered!");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  const handleLogIn = async () => {
    try {
      await logIn(email, password);
      Alert.alert("Success", "Logged in!");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="email@example.com"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholder="password"
        secureTextEntry
      />

      <View style={styles.buttonGroup}>
        <Button title="Sign Up" onPress={handleSignUp} />
        <Button title="Log In" onPress={handleLogIn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },
  label: {
    fontSize: 16,
    marginTop: 12,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 4,
  },
  buttonGroup: {
    marginTop: 24,
    gap: 12,
  },
});
