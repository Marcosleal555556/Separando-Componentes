import { Text, View, StyleSheet } from 'react-native';

export default function SecondComponent() {

return (
<View style={styles.container}>
<Text>Rodapé</Text>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
justifyContent: 'center',
alignItems: 'center',
}
});