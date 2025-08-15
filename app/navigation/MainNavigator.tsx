import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { routes } from './routes'

const Stack = createNativeStackNavigator()

const MainNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {routes.map(route => (
      <Stack.Screen key={route.name} {...route} />
    ))}
  </Stack.Navigator>
)

export default MainNavigator
