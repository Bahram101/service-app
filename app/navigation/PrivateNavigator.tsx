import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Auth from '@/components/screens/Auth/Auth'

import { useAuth } from '@/hooks/useAuth'

import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'

type Props = {}
const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigator = (props: Props) => {
  const { user } = useAuth()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#fff' }
      }}
    >
      {user?.user_id ? (
        routes.map(route => <Stack.Screen key={route.name} {...route} />)
      ) : (
        <Stack.Screen name='Auth' component={Auth} />
      )}
    </Stack.Navigator>
  )
}

export default PrivateNavigator
