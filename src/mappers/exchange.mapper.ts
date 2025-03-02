import { ExchangeRate } from '../models/exchange-rate'

type Props = {
  data: ExchangeRate
}

export class ExchangeRateMapper {
  static toModel({ data }: Props) {
    const currency = `USDBRL` as keyof ExchangeRate

    return {
      currency: data[currency].ask,
    }
  }
}
