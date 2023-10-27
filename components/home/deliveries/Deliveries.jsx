import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter} from 'expo-router'

import styles from './deliveries.style'
import { COLORS } from '../../../constants'

import useFetch from '../../../hook/useFetch';
import DeliveryCard from '../../common/cards/delivery/DeliveryCard';

const Deliveries = () => {
  const router= useRouter();

  const {data, isLoading, error} = useFetch('deliveries');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Livraisons planifiées</Text>
      </View>

      <View style={styles.cardsContainer}>
        { isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data.map((delivery) => (
            <DeliveryCard
              delivery={delivery}
              key={`delivery-id-${delivery.delivery_id}`}
              handleNavigate={() => router.push(`/delivery-details/${delivery.delivery_uid}`)}
              />
          ))
        )}
      </View>
    </View>
  )
}

export default Deliveries