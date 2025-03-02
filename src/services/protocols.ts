import { ExchangeRate } from '../models/exchange-rate'

export interface ExchangeRateServiceProtocol {
  getExchangeRate(): Promise<ExchangeRate>
  getCurrentExchangeRate(): Promise<ExchangeRate>
}
