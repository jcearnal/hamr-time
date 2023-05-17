import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AuthScreen from './screens/AuthScreen';
import TestAdmin from './screens/TestAdmin';

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
