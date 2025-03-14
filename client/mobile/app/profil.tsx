import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Platform, Alert, ActivityIndicator } from "react-native";
import BaseInput from "../components/BaseInput";
import PasswordInput from "../components/PasswordInput";
import BaseButton from "../components/BaseButton";
import { getRequest, putRequest } from "@/tools/api";
import { ApiRoutes } from "@/types/Routes";
import useAuth from "@/hooks/useAuth";

export default function Profil() {
  const { access } = useAuth();
  const [user, setUser] = useState({ id: 0, firstName: "", lastName: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 🔹 Récupérer les infos utilisateur au chargement
  useEffect(() => {
    if (!access) return;

    const fetchUser = async () => {
      try {
        const { result, error } = await getRequest<{ id: number; firstName: string; lastName: string; email: string }>(
          ApiRoutes.me,
          access
        );

        if (error) {
          Alert.alert("Erreur", "Impossible de récupérer les informations.");
          return;
        }

        setUser(result);
      } catch (error) {
        console.error("Erreur lors de la récupération du profil:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [access]);

  // 🔹 Modifier les données utilisateur
  const handleUpdate = async () => {
    if (!user.firstName || !user.lastName || !user.email) {
      Alert.alert("Erreur", "Tous les champs doivent être remplis.");
      return;
    }

    setSaving(true);

    try {
      const { error } = await putRequest(ApiRoutes.updateUser, user, access || undefined);

      if (error) {
        Alert.alert("Erreur", "Impossible de mettre à jour le profil.");
        return;
      }

      Alert.alert("Succès", "Profil mis à jour avec succès !");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.title}>Profil</Text>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Informations personnelles</Text>
        <BaseInput placeholder="Nom" value={user.lastName} onChangeText={(text) => setUser({ ...user, lastName: text })} />
        <BaseInput placeholder="Prénom" value={user.firstName} onChangeText={(text) => setUser({ ...user, firstName: text })} />
        <BaseInput placeholder="Email" value={user.email} onChangeText={(text) => setUser({ ...user, email: text })} />
        <BaseButton title="Modifier" onPress={handleUpdate} disabled={saving} />
        {saving && <ActivityIndicator size="small" color="#007BFF" />}
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Mot de passe</Text>
        <PasswordInput placeholder="Mot de passe actuel" />
        <PasswordInput placeholder="Nouveau mot de passe" />
        <PasswordInput placeholder="Confirmer mot de passe" />
        <BaseButton title="Modifier" onPress={() => Alert.alert("Changement de mot de passe en attente...")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#555",
  },
});
