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
  logo: {
    height: 40,
    width: 40,
  },
  textLogo:{
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
  },
  textNote:{
    fontSize: 16,
    color: 'white',
    fontStyle: 'italic',
    width: '80%',
    textAlign: 'center'
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
    fontSize: 35,
    color: '#FF6666',
    fontWeight: 'bold'
  },
  textnote: {
    fontSize: 18,
    color: '#FF6666',
    marginTop: 20,
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
  note: {
    alignItems: 'center',
  },
});
export default styles;
