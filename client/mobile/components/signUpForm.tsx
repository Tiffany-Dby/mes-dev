import React, { useState } from "react";
import BaseInput from "./BaseInput";
import PasswordInput from "./PasswordInput";
import BaseButton from "./BaseButton";
import { View, StyleSheet, Text, Platform, Alert, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { postRequest } from "@/tools/api";
import { ApiRoutes } from "@/types/Routes";

export default function SignUpForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert("Erreur", "Tous les champs sont obligatoires.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erreur", "Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);
    setError(null);

    const { result, error, status } = await postRequest<{ message: string }, {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      confirmPassword: string;
    }>(
      ApiRoutes.signUp,
      { firstName, lastName, email, password, confirmPassword }
    );

    setLoading(false);

    if (error || status >= 400) {
      setError(error || "Une erreur est survenue.");
      Alert.alert("Erreur", error || "Impossible de créer le compte.");
      return;
    }

    Alert.alert("Succès", "Compte créé avec succès. Vous pouvez maintenant vous connecter !");
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Création de compte</Text>

      <BaseInput placeholder="Prénom" onChangeText={setFirstName} value={firstName} />
      <BaseInput placeholder="Nom" onChangeText={setLastName} value={lastName} />
      <BaseInput placeholder="Email" onChangeText={setEmail} value={email} />
      <PasswordInput placeholder="Mot de passe" onChangeText={setPassword} value={password} />
      <PasswordInput placeholder="Confirmer mot de passe" onChangeText={setConfirmPassword} value={confirmPassword} />

      {error && <Text style={styles.error}>{error}</Text>}
      <Text>Déjà un compte ? <Text onPress={() => router.push("/")}>Connexion</Text></Text>
      <BaseButton title="S'inscrire" onPress={handleSignUp} disabled={loading} />

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
