import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Constants from 'expo-constants';

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
            <Text>Sistema de empréstimos</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
            />
            <Button
                onPress={goDrawer}
                title="Entrar"
                color="red"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        padding: 20,
      },
      input: {
        width: '25%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
      },
});
