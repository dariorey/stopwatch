import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StopwatchContainer from './src/Components/Container';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my StopWatch</Text>
      <StopwatchContainer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    backgroundColor: '#DBD053',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:'15%',
  },

  title: {
    fontSize: 30,
    color: '#74526C',
    marginBottom:'8%'
  }
});
