import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Home from '@/components/screens/home/Home'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

import AuthProvider from '@/providers/auth/AuthProvider'

import Navigation from '@/navigation/Navigation'

import './global.css'

export default function App() {
  return (
    <GluestackUIProvider mode='light'>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar style='auto' />
        </SafeAreaProvider>
      </AuthProvider>
    </GluestackUIProvider>
  )
}
