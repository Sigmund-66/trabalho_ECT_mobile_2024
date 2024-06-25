import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tela3({ navigation }) {

    function goTela4() {
        navigation.navigate('Tela4')
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>TELA 3</Text>
            <Button
                onPress={goTela4}
                title="Botão"
                color="#841584"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
