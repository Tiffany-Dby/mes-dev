import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

interface SideMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function SideMenu({ isVisible, onClose }: SideMenuProps) {
  const translateX = useRef(new Animated.Value(width)).current;
  const router = useRouter(); // Hook pour naviguer

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isVisible ? 0 : width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  const navigateTo = (path: '/' | '/profil' | '/mySubsriptions') => {
    router.push(path);
    onClose();
  };

  const handleLogout = () => {
    console.log("Déconnexion...");
    Alert.alert("Déconnexion", "Vous avez été déconnecté !");
    onClose();
    // TODO: Ajouter la logique pour supprimer le token et rediriger
  };

  return (
    <Animated.View style={[styles.menuContainer, { transform: [{ translateX }] }]}>
      <TouchableOpacity style={styles.closeArea} onPress={onClose} />

      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>Menu</Text>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('/')}>
          <Text style={styles.menuText}>🏠 Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('/profil')}>
          <Text style={styles.menuText}>👤 Mon profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('/mySubsriptions')}>
          <Text style={styles.menuText}>📝 Mes abonnements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={onClose}>
          <Text style={[styles.menuText, { color: 'red' }]}>❌ Fermer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>🚪 Se Déconnecter</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 80,
    right: 0,
    width: width * 0.75,
    height: height - 80,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: -2, height: 0 },
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
  },
  closeArea: {
    flex: 1,
  },
  menuContent: {
    width: '100%',
    padding: 20,
    backgroundColor: '#007BFF',
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 18,
    color: 'white',
  },
  logoutButton: {
    marginTop: 30,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'red',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
