import { StyleSheet } from "react-native";
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#FF6666',
  },
  header:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  input: {
    marginTop: 20,
    marginHorizontal: 30,
    padding: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  btn: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: '#FF6666',
    padding: 10,
    borderRadius: 20,
  },
  primary: {
    color: '#6200ee',
  },
  white: {
    color: '#fff',
  },
  text: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
    fontSize: 30,
    color: '#FF6666',
    fontWeight: 'bold'
  },
  floatRight: {
    alignItems: 'flex-end',
    marginRight: 40,
  },
  forgot: {
    fontSize: 14,
    marginTop: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});
export default styles;
