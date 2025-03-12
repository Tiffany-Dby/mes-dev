import React from 'react';
import BaseInput from "./baseInput";
import PasswordInput from './passwordInput';
import BaseButton from './baseButton';
import { View, StyleSheet, Text, Button } from 'react-native';


export default function SignUpForm() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Création de compte</Text>
        <BaseInput placeholder="Prénom" />
        <BaseInput placeholder="Nom" />
        <BaseInput placeholder="Email" />
        <PasswordInput placeholder="Mot de passe"/>
        <PasswordInput placeholder="Confirmer mot de passe" />
        <BaseButton title="S'inscrire" onPress={() => {}} />
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