import { View, StyleSheet, Text } from 'react-native';
import BaseInput from '../components/baseInput';
import PasswordInput from '../components/passwordInput';
import BaseButton from '../components/baseButton';

export default function Profil() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Profil</Text>
            <View style={styles.container}>
                <Text style={styles.subtitle}>Informations personnelles</Text>
                <BaseInput placeholder="Nom" />
                <BaseInput placeholder="Prénom" />
                <BaseInput placeholder="Email" />
                <BaseButton title="Modifier" onPress={() => {}} />
            </View>
            <View style={styles.container}>
                <Text style={styles.subtitle}>Mot de passe</Text>
                <PasswordInput placeholder="Mot de passe actuel" />
                <PasswordInput placeholder="Nouveau mot de passe" />
                <PasswordInput placeholder="Confirmer mot de passe" />
                <BaseButton title="Modifier" onPress={() => {}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '90%',
        gap: 10,
        padding: 20,
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#555',
    }
  })