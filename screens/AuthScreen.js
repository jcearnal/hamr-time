import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Google } from 'expo';
import firebase from 'firebase/app';
import 'firebase/auth';

const AuthScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    // Implement sign-in logic here using Firebase or other authentication services
  };

  const handleGoogleSignIn = async () => {
    try {
      const { type, idToken, accessToken } = await Google.logInAsync({
        
        androidClientId: '764962895038-06f7f2jgsh9if0uuermcctcu83duetpb.apps.googleusercontent.com',
        iosClientId: '764962895038-06f7f2jgsh9if0uuermcctcu83duetpb.apps.googleusercontent.com',
        webClientId: '764962895038-06f7f2jgsh9if0uuermcctcu83duetpb.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (type === 'success') {
        // Authenticate with Firebase using the Google credential
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((userCredential) => {
            const user = userCredential.user;
            // Handle successful sign-in
            // console log type, idToken, accessToken, userCredential, user
            console.log(type, idToken, accessToken, userCredential, user);
          })
          .catch((error) => {
            // Handle sign-in error
            // log error
            
            console.log(error);
          });
      }
    } catch (error) {
      // Handle error
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authentication</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Sign In with Google" onPress={handleGoogleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AuthScreen;
