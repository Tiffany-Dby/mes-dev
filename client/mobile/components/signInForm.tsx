import React from 'react';
import BaseInput from "@/components/BaseInput";
import BaseButton from './BaseButton';
import PasswordInput from './PasswordInput';
import { View, StyleSheet, Text } from 'react-native';


export default function SignInForm() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>
        <BaseInput placeholder="Email" />
        <PasswordInput placeholder="Mot de passe"/>
        <BaseButton title="Connexion" onPress={() => {}} />
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