import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import imgBart from './assets/PikPng.com_lil-pump-png_509777.png'
import imgHomer from './assets/homer-simpson-cerveja-homer-person-label-food-fireman-transparent-png-2736863.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source = { imgBart }
      style = {styles.estiloImgBart}
      />
      <Image
      source = { imgHomer }
      style = {styles.estiloImgHomer}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloImgBart: {
    width:200,
    height: 200,
    borderStyle: 'solid',
    borderColor: '#FFF',
    borderWidth: 3,
    borderRadius:100,
    borderTopColor: '#f0f',
    borderRightColor: '#FF0',
    borderLeftWidth: 10,
    borderTopRightRadius: 0,
    marginBottom: 20
  },
  estiloImgHomer: {
    width:200,
    height: 200,
    borderStyle: 'solid',
    borderColor: '#FFF',
    borderWidth: 3,
    borderRadius:100,
    borderTopColor: '#ff0',
    borderRightColor: '#f0f',
    borderLeftWidth: 10,
    borderTopLeftRadius: 0,
    marginBottom: 20
  }
 
});