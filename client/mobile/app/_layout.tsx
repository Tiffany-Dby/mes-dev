import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/header';
import SideMenu from '@/components/sideMenu';

export default function Layout() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Header onMenuPress={toggleMenu} /> {/* <-- Passe la fonction au Header */}
      <Stack screenOptions={{ headerShown: false }} />
      <SideMenu isVisible={menuVisible} onClose={toggleMenu} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
