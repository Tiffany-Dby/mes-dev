import React, { useState } from "react";
import BaseInput from "@/components/BaseInput";
import BaseButton from "@/components/BaseButton";
import PasswordInput from "@/components/PasswordInput";
import { View, StyleSheet, Text, ActivityIndicator, Alert, Platform, TouchableOpacity } from "react-native";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { postRequest } from "@/tools/api";
import { ApiRoutes } from "@/types/Routes";

export default function SignInForm() {
  const router = useRouter();
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
      return;
    }
    await login(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      
      <BaseInput placeholder="Email" onChangeText={setEmail} value={email} />
      <PasswordInput placeholder="Mot de passe" onChangeText={setPassword} value={password} />
      {error && <Text style={styles.error}>{error}</Text>}
      <Text>Pas encore de compte ? <Text onPress={() => router.push("/sign-up")}>Créer un compte</Text></Text>
      <BaseButton title="Connexion" onPress={handleLogin} disabled={loading} />
      {loading && <ActivityIndicator size="small" color="#007BFF" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "90%",
    gap: 10,
    padding: 20,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
});
