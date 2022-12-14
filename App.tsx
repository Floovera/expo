import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreen} from "./screens/Homescreen"



function ProvidedApp(){
  return (
      <>
        <StatusBar style="auto" />
        <HomeScreen/>
      </>
  )

}

export default function App() {
  return (
      <SafeAreaProvider>
          <ProvidedApp/>
      </SafeAreaProvider>

  );
}

