import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Help() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>Help Screen</Text>
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
