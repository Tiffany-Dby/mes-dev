import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

interface MySubscriptionCardProps {
  title: string;
  expiryDate: string;
  isActive: boolean;
  onManage: () => void;
}

export default function MySubscriptionCard({ title, expiryDate, isActive, onManage }: MySubscriptionCardProps) {
  return (
    <View style={styles.card}>
      {/* Titre et statut */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.statusIndicator, { backgroundColor: isActive ? 'green' : 'red' }]} />
      </View>

      {/* Date d'expiration */}
      <Text style={styles.expiryText}>
        {isActive ? `Expire le : ${expiryDate}` : `Expiré le : ${expiryDate}`}
      </Text>

      {/* Bouton de gestion */}
      <TouchableOpacity style={styles.button} onPress={onManage}>
        <Text style={styles.buttonText}>{isActive ? "Gérer l'abonnement" : "Renouveler"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      },
    }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  expiryText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
