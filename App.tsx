import { Text, View } from 'react-native'

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

import './global.css'

export default function App() {
  return (
    <GluestackUIProvider mode='light'>
      <View className='flex flex-col items-center justify-center bg-red-100 h-full'>
        <Text className='bg-blue-100'>Open app.tsx!</Text>
      </View>
    </GluestackUIProvider>
  )
}
