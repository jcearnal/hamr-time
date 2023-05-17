import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AuthScreen from './screens/AuthScreen';
import TestAdmin from './screens/TestAdmin';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABXZHOSt215ogD8zmrQlK4QAsgL1XJjcI",
  authDomain: "shuttle-run-app.firebaseapp.com",
  projectId: "shuttle-run-app",
  storageBucket: "shuttle-run-app.appspot.com",
  messagingSenderId: "764962895038",
  appId: "1:764962895038:web:30e532b9e7d068c74c9aef",
  measurementId: "G-0BCG1DGXBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <View style={styles.container}>
      {/* Your existing code */}
      <TestAdmin />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
