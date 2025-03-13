import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MySubscriptionCard from '@/components/SubscriptionCard';

export default function MySubscriptionsScreen() {
  const handleManage = (plan: string) => {
    Alert.alert("Gestion de l'abonnement", `Gérer l'abonnement ${plan}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.container}>
        <MySubscriptionCard
            title="Premium"
            expiryDate="10 Juillet 2025"
            isActive={true}
            onManage={() => handleManage("Premium")}
        />

        <MySubscriptionCard
            title="VIP"
            expiryDate="5 Juin 2024"
            isActive={false}
            onManage={() => handleManage("VIP")}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});
