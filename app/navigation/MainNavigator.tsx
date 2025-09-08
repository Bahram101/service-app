import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'

import { routes } from './routes'

const Stack = createNativeStackNavigator()

const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: '#fff'
      },
      animationDuration: 100
    }}
  >
    {routes.map(route => (
      <Stack.Screen
        options={{
          headerBackVisible: false
        }}
        key={route.name}
        {...route}
      />
    ))}
  </Stack.Navigator>
)

export default MainNavigator
