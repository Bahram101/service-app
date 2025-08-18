import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'

import { routes } from './routes'

const Stack = createNativeStackNavigator()

const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      // headerBackground: () => (
      //   <View
      //     style={{
      //       flex: 1,
      //       backgroundColor: '#124500',
      //       borderBottomLeftRadius: 20,
      //       borderBottomRightRadius: 20
      //     }}
      //   />
      // )
      headerShown: false,
      headerStyle: {
        backgroundColor: '#fff'
      },
      animation: 'fade',
      animationDuration: 100
    }}
  >
    {routes.map(route => (
      <Stack.Screen
        options={{
          headerBackVisible: false
          // animation: 'fade'
        }}
        key={route.name}
        {...route}
      />
    ))}
  </Stack.Navigator>
)

export default MainNavigator
