import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Tela2() {

        return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* Título centralizado */}
            <Text style={styles.title}>Menu Principal</Text>

            {/* Três botões centralizados */}
            <View style={styles.buttonContainer}>
            <Button mode="contained" style={styles.button}>
                Recursos disponíveis
            </Button>
            <Button mode="contained" style={styles.button}>
                Meu dados
            </Button>
            <Button mode="contained" style={styles.button}>
               Sair
            </Button>
            </View>

            {/* Texto da versão do app */}
            <Text style={styles.versionText}>Versão 1.0.0</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        width: '100%',
      },
      button: {
        width: '30%',
      },
      versionText: {
        fontSize: 12,
        color: 'gray',
      },
});
