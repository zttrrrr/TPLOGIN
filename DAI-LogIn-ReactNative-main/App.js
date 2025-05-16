import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Text, View, SafeAreaView, Image, Alert } from 'react-native';



  export default function App() {
    const handleVerificarLogIn = () => {
    const nombre = conseguirNombre(mail);
      (nombre == password) ? Alert.alert('Inicio de sesión exitoso') : Alert.alert('Contraseña incorrecta') 
    }
    const conseguirNombre = (mail) => {
      const info = mail.split('@');
      const nombre = info[0];
      return nombre
    }
  
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={{flex: 1, width: 400, flexDirection: 'column', backgroundColor: '#ffffff'}}>
    
      
      <StatusBar style="auto" />
      <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/logo.png')}
      />
      <TextInput
        placeholder="Mail"
        onChangeText={setMail}
        style={styles.input} 
      />
      <TextInput
        placeholder="Contraseña"
        onChangeText={setPassword}
        style={styles.input} 
      />
      <Button 
        style={styles.button} 
        title="Iniciar sesión" 
        onPress={handleVerificarLogIn} />
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1, 
    marginBottom: 10,
    height: 40,
    width:230,
    fontSize: 18,
  }, 
  button: {

  },
  tinyLogo: {
    
      width: 200,
      height: 200,
      resizeMode: 'contain',
    
  }
});

