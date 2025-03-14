import React, { useState } from 'react';
import { Stack, usePathname } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';


export default function Layout() {
  const [menuVisible, setMenuVisible] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {pathname === "/" || pathname === "/sign-up" ? null : <Header onMenuPress={toggleMenu} />}
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
