import { useCallback, useEffect, useState } from 'react'
import { ExchangeRate } from '../models/exchange-rate'
import { ExchangeRateService } from '../services/exchange-rate.service'

type Props = {
  service: ExchangeRateService
}

export const useExchangeRateViewModel = ({ service }: Props) => {
  const [currencies, setCurrencies] = useState<ExchangeRate>({} as ExchangeRate)
  const [loading, setLoading] = useState<boolean>(true)

  const getExchangeRate = useCallback(async () => {
    const data = await service.getExchangeRate()

    setCurrencies(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    getExchangeRate()
  }, [])

  const usdBrl = currencies.USDBRL?.low

  return { usdBrl, loading, refresh: getExchangeRate }
}
