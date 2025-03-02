import { currentBRL } from "@/src/utils";
import { useNewExchangeRateViewModel } from "@/src/view-models/new-exchange-rate.view-model";
import { XCircle } from "lucide-react-native";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = { visibility: boolean; onClose: () => void } & ReturnType<
  typeof useNewExchangeRateViewModel
>;

export const NewExchangeRateModal = ({
  visibility,
  onClose,
  amount,
  handleAmount,
  handleCalculate,
  handleClean,
  result,
}: Props) => (
  <Modal
    visible={visibility}
    transparent
    onRequestClose={onClose}
    animationType="fade"
  >
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Dólar para Real</Text>

          <TouchableOpacity
            onPress={() => {
              onClose();
              handleClean();
            }}
          >
            <XCircle color={"#304D6D"} />
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Valor em Dólares</Text>

          <TextInput
            placeholder="200"
            style={styles.input}
            value={amount}
            onChangeText={handleAmount}
          />

          <TouchableOpacity
            onPress={handleCalculate}
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonLabel}>Calcular</Text>
          </TouchableOpacity>
        </View>

        {Boolean(result) && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Resultado:</Text>
            <Text style={styles.amount}>{currentBRL(result)}</Text>
          </View>
        )}
      </View>
    </View>
  </Modal>
);
