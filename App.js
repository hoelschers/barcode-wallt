import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';

function BarCodeListScreen() {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });
  return (
    <View style={styles.container} onLayout={(event) => setLayout(event.nativeEvent.layout)}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Stephan'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Devin1'},
          {key: 'Dan2'},
          {key: 'Dominic2'},
          {key: 'Jackson2'},
          {key: 'James2'},
          {key: 'Joe2'},
          {key: 'John2'},
          {key: 'Jillian2'},
          {key: 'Jimmy2'},
          {key: 'Julie2'},
        ]}
        renderItem={({item}) => <Text style={{
          width: layout.width,
          padding: 20,
          fontSize: 18,
          height: 44,
          backgroundColor: '#f9c2ff',
          marginTop: 5,
        }}>{item.key}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Barcode Wallet" component={BarCodeListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 44,
    width: 100,
    backgroundColor: '#f9c2ff',
  },
});
