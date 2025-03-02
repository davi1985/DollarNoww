import { HttpClientProtocol, HttpMethod } from '../infra/protocols'
import { ExchangeRate } from '../models/exchange-rate'
import { ExchangeRateServiceProtocol } from './protocols'

export class ExchangeRateService implements ExchangeRateServiceProtocol {
  constructor(private readonly httpClient: HttpClientProtocol) {}

  async getExchangeRate() {
    console.log('call here')
    return await this.httpClient.sendRequest<ExchangeRate>({
      endpoint: 'USD-BRL,EUR-BRL',
      method: HttpMethod.GET,
    })
  }

  async getCurrentExchangeRate() {
    return await this.httpClient.sendRequest<ExchangeRate>({
      endpoint: 'USD-BRL',
      method: HttpMethod.GET,
    })
  }
}
