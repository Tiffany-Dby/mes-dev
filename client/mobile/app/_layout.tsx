import React from 'react';
import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/header'; // Assure-toi que le chemin est correct

export default function Layout() {
  return (
    <View style={styles.container}>
      <Header />
      <Stack screenOptions={{ headerShown: false }} /> {/* Gère la navigation */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
