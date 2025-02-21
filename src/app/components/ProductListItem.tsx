import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Product } from '../../../assets/types/product'

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemImageContainer}>
        <Image source={product.heroImage} style={styles.itemImage} />
      </View>
      <View style={styles.itemTextContainer} >
        <Text style={styles.itemTitle}>{product.title}</Text>
        <Text style={styles.itemPrice}>${product.price.toFixed(2)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    width: '48%',
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden'
  },
  itemImageContainer: {
    borderRadius: 10,
    width: '100%',
    height: 150
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  itemTextContainer: {
    padding: 8,
    alignItems: 'flex-start',
    gap: 4
  },
  itemTitle: {
    fontSize: 16,
    color: '#888'
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold'
  }
})