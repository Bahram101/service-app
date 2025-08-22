import React from 'react'
import { Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
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
    <Layout>
      <Heading>Профиль</Heading>
      <View className='px-4 h-full pt-2'>     
        <CustomBtn className='bg-blue mb-6' onPress={() => navigate('SetPin')}>
          Установить пин код
        </CustomBtn>
        <CustomBtn onPress={logout}>logout</CustomBtn>
      </View>
    </Layout>
  )
}

export default Profile
