import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <SafeAreaView>
      <Tabs screenOptions={{
        tabBarActiveTintColor: '#1BC464',
        tabBarInactiveTintColor: 'gray'
      }}>
        <Tabs.Screen name='index' options={{
          headerShown: false
        }} /> 
        <Tabs.Screen name='orders' options={{}} /> 
      </Tabs>
    </SafeAreaView>
  )
}

export default TabsLayout