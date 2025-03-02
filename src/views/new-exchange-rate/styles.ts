import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  overlay: {
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    borderRadius: 8,
    width: '88%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#304d6d',
  },
  form: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
  },
  label: { fontSize: 16, fontWeight: 'bold', color: '#304d6d' },
  input: {
    marginTop: 8,
    paddingVertical: 4,
    fontSize: 18,
    color: '#121214',
    borderBottomColor: '#ddd',
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  submitButton: {
    marginTop: 32,
    marginLeft: 'auto',
    backgroundColor: '#304D6D',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  submitButtonLabel: {
    color: '#f1f1f2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    padding: 16,
    marginTop: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
  },
})
