import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Auth from '@/components/screens/Auth/Auth'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Auth' component={Auth} />
  </Stack.Navigator>
)

export default AuthNavigator
