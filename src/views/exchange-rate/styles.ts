import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#304D6D',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#304D6D',
    gap: 16,
  },
  titleContainer: {
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#f2f2fa',
    fontWeight: '900',
  },
  span: {
    color: '#f2f2fa',
    fontSize: 18,
  },
  card: {
    backgroundColor: '#f2f2fa',
    padding: 32,
    gap: 32,
    borderRadius: 16,
    elevation: 10,
    shadowColor: 'rgba(255, 255, 255, 0.3)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  quotationCard: {
    backgroundColor: '#304D6D',
    padding: 32,
    borderRadius: 16,
    shadowColor: '#121214',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reloadIcon: {
    width: 24,
    color: '#f2f2fa',
  },
  text: {
    fontSize: 16,
    color: '#f2f2fa',
    alignSelf: 'flex-end',
  },
  amount: {
    fontSize: 68,
    color: '#f2f2fa',
    marginTop: 32,
    alignSelf: 'center',
  },
  calculateButton: {
    backgroundColor: '#304D6D',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: 18,
    color: '#f2f2fa',
    fontWeight: '600',
  },
  footer: {
    paddingBottom: 16,
  },
})
