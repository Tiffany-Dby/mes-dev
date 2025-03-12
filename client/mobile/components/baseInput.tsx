import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface BaseInput extends TextInputProps {
  placeholder: string;
}

export default function BaseInput({ placeholder, ...rest }: BaseInput) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#888"
      secureTextEntry={placeholder === 'Password' || placeholder === 'Confirm password'}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    maxWidth:'100%',
    minWidth: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
