import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './deliverycard.style'

const DeliveryCard = ({delivery, handleNavigate}) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => handleNavigate()}>
      <TouchableOpacity 
        style={styles.magasinShortNameContainer}>
            <Text style={styles.magasinShortName}>{delivery.magasin_short_name}</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.clientName} numberOfLines={1}>{delivery.person_gender} {delivery.person_prenom} {delivery.person_nom}</Text>
        <Text style={styles.deliveryReference}>Référence : {delivery.delivery_reference}</Text>
        <Text style={styles.deliveryReference}>Telephone : {delivery.person_mobile}</Text>
      </View>
    
    </TouchableOpacity>
  )
}

export default DeliveryCard