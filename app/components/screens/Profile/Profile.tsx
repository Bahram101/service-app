import React from 'react'
import { Text, View } from 'react-native'

import CustomBtn from '@/components/ui/button/Button'

import { useAuth } from '@/hooks/useAuth'

import { AuthService } from '@/services/auth/auth.service'

const Profile = () => {
  const { setUser } = useAuth()

  const logout = () => {
    console.log('logout')
    AuthService.logout().then(() => setUser(null))
  }
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='mb-4'>Profile</Text>
      <CustomBtn onPress={logout}>logout</CustomBtn>
    </View>
  )
}

export default Profile
