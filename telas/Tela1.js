import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Constants from 'expo-constants';



export default function Tela1({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function goDrawer() {       
        if (email === '' && password === '') {
            alert('Por favor digite o seu email e senha');
          } else {
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    { name: 'Drawer' }
                  ]
                })
              );
          }        
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.titulo}>Sistema de Empréstimos</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
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
        width: '100%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
      },

      titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      },
});
