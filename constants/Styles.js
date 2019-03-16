import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderStyle: 'solid',
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
  },
  buttonText: {
    fontSize: 20
  }
})

export default styles