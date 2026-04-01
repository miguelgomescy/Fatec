import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'flex-end',
    padding: 20,
  },
  displayContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
  },
  display: {
    color: '#fff',
    fontSize: 48,
    textAlign: 'right',
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  botao: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
    marginHorizontal: 4,
    borderRadius: 12,
    alignItems: 'center',
  },
  botaoOperacao: {
    backgroundColor: '#ff9500',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});