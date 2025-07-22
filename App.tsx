import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { Button, ButtonText } from '@/components/ui/button'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

import './global.css'

export default function App() {
  return (
    <GluestackUIProvider mode='light'>
      <View className='flex-1 items-center justify-center bg-background'>
        <Text>Open apppp.tsx !</Text>
        <StatusBar style='auto' />
        <Button size='md' variant='solid' action='primary' isDisabled={false} className='p-3'>
          <ButtonText>Нажми</ButtonText>
        </Button>
      </View>
    </GluestackUIProvider>
  )
}
