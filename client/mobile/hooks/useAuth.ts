    import { useState, useEffect } from "react";
    import { Platform } from "react-native";
    import * as SecureStore from "expo-secure-store";
    import AsyncStorage from "@react-native-async-storage/async-storage";
    import { postRequest } from "@/tools/api";
    import { ApiRoutes } from "@/types/Routes";
    import { useRouter } from "expo-router";

    const storage = Platform.OS === "web" ? AsyncStorage : SecureStore;

    export default function useAuth() {
    const [access, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const checkToken = async () => {
        try {
            const storedToken = await storage.getItem("userToken");
            if (storedToken) {
            setToken(JSON.parse(storedToken)); 
            
            }
        } catch (error) {
            console.error("Erreur lors de la récupération du token :", error);
        }
        };
        checkToken();
    }, []);

    const login = async (email: string, password: string) => {
        setLoading(true);
        setError(null);

        const { result, error, status } = await postRequest<{ access: string }, { email: string; password: string }>(
        ApiRoutes.signIn,
        { email, password }
        );

        setLoading(false);

        if (error || status >= 400) {
        setError(error || "Identifiants incorrects");
        return;
        }

        await storage.setItem("userToken", JSON.stringify(result.access));
        setToken(result.access);

        router.push("/profil");
    };

    const logout = async () => {
        try {
        if (Platform.OS === "web") {
            await AsyncStorage.removeItem("userToken");
        } else {
            await SecureStore.deleteItemAsync("userToken");
        }
        setToken(null);
        router.push("/"); 
        } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
        }
    };

    return { access, login, logout, loading, error };
    }
