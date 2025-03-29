import { TextInput, TextInputProps, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from './text';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  secureTextEntry?: boolean;
}

export function Input({ label, error, secureTextEntry, style, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            error && styles.inputError,
            secureTextEntry && styles.inputWithIcon,
            style,
          ]}
          placeholderTextColor="#666"
          secureTextEntry={secureTextEntry && !showPassword}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    color: '#333',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  inputWithIcon: {
    paddingRight: 48,
  },
  inputError: {
    borderColor: '#ff4444',
  },
  iconContainer: {
    position: 'absolute',
    right: 12,
    top: 12,
    padding: 4,
  },
  error: {
    color: '#ff4444',
    marginTop: 4,
    fontSize: 14,
  },
}); 