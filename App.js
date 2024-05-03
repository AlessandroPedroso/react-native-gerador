import {View,Text,StyleSheet} from 'react-native'

//()
export default function App(){
  return (
    <View style={styles.container}>
        <Text>Sujeito Programador</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#F3F3FF",
    justifyContent:"center",
    alignItems:"center",
  }
})