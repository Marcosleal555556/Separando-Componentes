import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import Corpo from './src/components/Corpo';
import Rodape from './src/components/Rodape';
import { style } from './src/styles/estilo';


export default function App() {
  return (
    <View style={style.container}>

{/* /COMPONENTE CABEÇALHO */}
      <Cabecalho/>

{/* /COMPONENTE CORPO */}
      <Corpo/>

{/* /COMPONENTE RODAPÉ */}
      <Rodape/>

      <Text>Atividade Separando Componentes</Text>

      <StatusBar style="auto" />
      
    </View>
  );
}

