import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

function TabBarIcon(
  props: {
    name: React.ComponentProps<typeof FontAwesome>['name'],
    color: string
  }
) {
  return <FontAwesome size={24} {...props} style={{ color: '#1BC464' }} />
}

const TabsLayout = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tabs screenOptions={{
        tabBarActiveTintColor: '#1BC464',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 16 },
        tabBarStyle: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: 70,
          padding: 4
        },
        headerShown: false
      }}>
        <Tabs.Screen name='index' options={{
          title: 'shop',
          tabBarIcon(props) {
              return <TabBarIcon {...props} name='shopping-cart' />
          }
        }} /> 
        <Tabs.Screen name='orders' options={{
          title: 'orders',
          tabBarIcon(props) {
            return <TabBarIcon {...props} name='book' />
          }
        }} /> 
      </Tabs>
    </SafeAreaView>
  )
}

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  }
});