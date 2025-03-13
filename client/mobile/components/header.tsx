import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface HeaderProps {
  onMenuPress: () => void;
}

export default function Header({ onMenuPress }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/images/logo-cyna-c.png')} style={styles.logo} />
      
      {/* Icône menu cliquable */}
      <TouchableOpacity onPress={() => {
          console.log("Menu button clicked!");
          onMenuPress(); 
        }}>
        <Image 
          source={require('../assets/images/menu.png')} 
          style={styles.menuIcon} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  menuIcon: {
    width: 40,
    height: 40,
    tintColor: '#ffffff',
  },
});
