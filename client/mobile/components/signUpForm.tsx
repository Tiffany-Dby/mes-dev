import React from 'react';
import BaseInput from "@/components/baseInput";
import BaseButton from './baseButton';
import { View, StyleSheet, Text, Button } from 'react-native';


export default function SignUpForm() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <BaseInput placeholder="First name" />
        <BaseInput placeholder="Last name" />
        <BaseInput placeholder="Email" />
        <BaseInput placeholder="Password"/>
        <BaseInput placeholder="Confirm password" />
        <BaseButton title="Sign Up" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '90%',
        gap: 10,
        padding: 20,
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
        title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    }
  });