import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Home from '@/components/screens/home/Home'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

import './global.css'
import { StatusBar } from 'expo-status-bar'
import Navigation from '@/navigation/Navigation'

export default function App() {
  return (
    <GluestackUIProvider mode='light'>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </GluestackUIProvider>
  )
}
