import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CommonActions } from '@react-navigation/native';

export default function Tela1({ navigation }) {

    function goDrawer() {
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Drawer' }
              ]
            })
          );
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>TELA 1</Text>
            <Button
                onPress={goDrawer}
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
