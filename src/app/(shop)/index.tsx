import { StyleSheet, FlatList, View, Text } from 'react-native'
import React from 'react'
import { PRODUCTS } from '../../../assets/products'
import { ProductListItem } from '../components/ProductListItem'
const Home = () => {
  return (
    <View>
      <FlatList 
        data={PRODUCTS} 
        renderItem={({ item }) => (<ProductListItem product={item} />)} 
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<View>Products</View>}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{
          paddingHorizontal: 10,
          padding: 5
        }} 
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20
  },
  flatListColumn: {
    justifyContent: 'space-between'
  }
})