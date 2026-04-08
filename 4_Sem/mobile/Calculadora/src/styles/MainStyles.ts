import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 40,
  },

  calculadoraArea: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  displayContainer: {
    marginBottom: 16,
    padding: 20,
    minHeight: 100,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  display: {
    color: '#fff',
    fontSize: 48,
    textAlign: 'right',
  },

  linha: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  botao: {
    flex: 1,
    backgroundColor: '#333',
    paddingVertical: 20,
    marginHorizontal: 4,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoGrande: {
    flex: 2,
  },

  botaoOperacao: {
    backgroundColor: '#ff9500',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  footer: {
    paddingTop: 12,
    paddingBottom: 8,
    alignItems: 'center',
  },

  footerText: {
    color: '#aaa',
    fontSize: 14,
  },

  footerLink: {
    color: '#f8b944',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});