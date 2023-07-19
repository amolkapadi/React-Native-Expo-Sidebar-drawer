import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Profit() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>Profit Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
