import { ChangeEvent, useState } from 'react'
import { Alert } from 'react-native'
import { ExchangeRateMapper } from '../mappers/exchange.mapper'
import { ExchangeRateServiceProtocol } from '../services/protocols'

type Props = { service: ExchangeRateServiceProtocol }

export const useNewExchangeRateViewModel = ({ service }: Props) => {
  const [amount, setAmount] = useState('')
  const [result, setResult] = useState<number>(0)
  console.log({ amount })
  const handleAmount = (value: string) => {
    console.log({ value })
    setAmount(value)
  }

  const handleCalculate = async () => {
    if (!amount) {
      Alert.alert('Error', 'Digite algum valor')
    }

    const response = await service.getCurrentExchangeRate()

    const { currency } = ExchangeRateMapper.toModel({
      data: response,
    })

    setResult(Number(amount.replace(',', '.')) * currency)
    setAmount('')
  }

  const handleClean = () => {
    setAmount('')

    setResult(0)
  }

  return {
    amount,
    result,
    handleClean,
    handleAmount,
    handleCalculate,
  }
}
