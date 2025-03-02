import { useNewExchangeRateViewModel } from '@/src/view-models/new-exchange-rate.view-model'
import { DollarSign, RefreshCcw } from 'lucide-react-native'
import { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { HttpClient } from '../../infra/http-client'
import { ExchangeRateService } from '../../services/exchange-rate.service'
import { customFormatCurrency } from '../../utils'
import { useExchangeRateViewModel } from '../../view-models/exchange-rate.view-model'
import { styles } from './styles'
import { NewExchangeRateModal } from '../new-exchange-rate'

export const ExchangeRate = () => {
  const http = HttpClient.create()
  const { usdBrl, refresh } = useExchangeRateViewModel({
    service: new ExchangeRateService(http),
  })
  const props = useNewExchangeRateViewModel({
    service: new ExchangeRateService(http),
  })

  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>DollarNow</Text>
            <DollarSign size={32} color={'#f2f2fa'} />
          </View>

          <Text style={styles.span}>Cotação em real-time</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.quotationCard}>
            <View style={styles.cardHeader}>
              <TouchableOpacity onPress={refresh}>
                <RefreshCcw size={20} color={'#f2f2fa'} />
              </TouchableOpacity>

              <Text style={styles.text}>Cotação do dia</Text>
            </View>

            <Text style={styles.amount}>
              {customFormatCurrency('BRL', usdBrl)}
            </Text>
          </View>

          <View style={styles.calculateButton}>
            <TouchableOpacity onPress={handleOpenModal}>
              <Text style={styles.buttonLabel}>Faça uma convenção</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={{ color: '#f2f2fa' }}>&copy; SarahCode 2025</Text>
        </View>
      </View>

      <NewExchangeRateModal
        onClose={handleCloseModal}
        visibility={isOpenModal}
        {...props}
      />
    </SafeAreaView>
  )
}
