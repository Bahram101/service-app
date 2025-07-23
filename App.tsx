import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { Button, ButtonText } from '@/components/ui/button'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

import './global.css'

export default function App() {
  return (
    <GluestackUIProvider mode='light'>
      <View className='flex-1 items-center justify-center bg-background'>
        <Text>Open app.tsx !</Text>
        <StatusBar style='auto' />
        <Button action="primary" variant="solid" size="md">
          <ButtonText>Нажми</ButtonText>
        </Button>
      </View>
    </GluestackUIProvider>
  )
}
