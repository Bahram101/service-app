import React from 'react'
import { Text, View } from 'react-native'

import CustomBtn from '@/components/ui/button/Button'

import { useAuth } from '@/hooks/useAuth'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { AuthService } from '@/services/auth/auth.service'

const Profile = () => {
  const { setUser } = useAuth()
  const { navigate } = useTypedNavigation()

  const logout = () => {
    AuthService.logout().then(() => setUser(null))
  }
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <View>
        <Text className='mb-4'>Profile</Text>
        <CustomBtn className='bg-blue-400 mb-6' onPress={() => navigate('SetPin')}>
          Установить пин код
        </CustomBtn>
        <CustomBtn onPress={logout}>logout</CustomBtn>
      </View>
    </View>
  )
}

export default Profile
