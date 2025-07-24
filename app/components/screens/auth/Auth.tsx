import React, { use } from 'react'
import { Text, View } from 'react-native'

import { Button } from '@/components/ui/button'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Auth = () => {
  const { navigate } = useTypedNavigation()

  return (
    <View>
      <Text>Auth</Text>
      <Button onPress={() => navigate('Home')}>
        <Text className='text-white'>Home</Text>
      </Button>
    </View>
  )
}

export default Auth
