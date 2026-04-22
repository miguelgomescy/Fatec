import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111',
  },

  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },

  pickerContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    elevation: 2,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#222',
  },

  picker: {
    width: '100%',
  },

  coinContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 220,
    marginBottom: 20,
  },

  coinImage: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
  },

  placeholderText: {
    fontSize: 16,
    color: '#777',
    fontStyle: 'italic',
  },

  buttonContainer: {
    width: '50%',
    marginBottom: 25,
    borderRadius: 100,
  },

  statsContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },

  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#111',
  },

  statsText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
});

export default styles;