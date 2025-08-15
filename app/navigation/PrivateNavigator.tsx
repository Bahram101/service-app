import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'

import Auth from '@/components/screens/Auth/Auth'
import EnterPin from '@/components/screens/Pin/EnterPin'

import { useAuth } from '@/hooks/useAuth'

import { getPinCode } from '@/utils/pinStore'

import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'

type Props = {}
const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigator = (props: Props) => {
  const { user } = useAuth()

  const [hasPin, setHasPin] = useState<boolean | null>(null)

  useEffect(() => {
    if (user?.user_id) {
      getPinCode().then(pin => {
        console.log('PIN from store:', pin)
        setHasPin(!!pin)
      })
    }
  }, [user])

  if (user?.user_id && hasPin === null) {
    return null // или <SplashScreen />
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#fff' }
      }}
    >
      {user?.user_id ? (
        <>
          {hasPin && <Stack.Screen name='EnterPin' component={EnterPin} />}
          {routes.map(route => (
            <Stack.Screen key={route.name} {...route} />
          ))}
        </>
      ) : (
        <Stack.Screen name='Auth' component={Auth} />
      )}
    </Stack.Navigator>
  )
}

export default PrivateNavigator
