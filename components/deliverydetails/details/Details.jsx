import React from 'react'
import { View, Text } from 'react-native'

import styles from '../specifics/specifics.style'

const Details = ({title, deliveryRef, client, storeName, mobile}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails de livraison: {deliveryRef}</Text>
      <View style={styles.pointsContainer}>
        <View style={styles.pointWrapper}>
            <Text style={styles.pointLabel}>Client:</Text>
            <Text style={styles.pointText}>{client}</Text>
        </View>

        <View style={styles.pointWrapper}>
            <Text style={styles.pointLabel}>Magasine:</Text>
            <Text style={styles.pointText}>{storeName}</Text>
        </View>

        <View style={styles.pointWrapper}>
            <Text style={styles.pointLabel}>Téléphone:</Text>
            <Text style={styles.pointText}>{mobile}</Text>
        </View>
      </View>
    </View>
  )
}

export default Details