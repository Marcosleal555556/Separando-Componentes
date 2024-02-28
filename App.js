import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabeçalho from './src/components/Cabecalho';
import Corpo from './src/components/Corpo';
import Rodape from './src/components/Rodape';
import { conteinerPerson, textPerson } from "./src/styles/StylesSheet";

export default function App() {
  return (
    <View style={styles.container}>

      <Cabeçalho/>

      <Corpo/>

      <Rodape/>

      

      <Text>Atividade Separando Componentes</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
