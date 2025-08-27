import { Feather, Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, View } from 'react-native'

import { useAuth } from '@/hooks/useAuth'

import { getSurnameAndName } from '@/utils/helpers'

const Header: FC = () => {
  const { user } = useAuth()
  return (
    <View className='flex-row justify-between items-center bg-white pt-3 pb-4 px-4 '>
      <View className='font-medium text-2xl flex-row'>
        <Feather name='user' size={22} />
        <Text className='pl-4 font-semibold text-xl'>
          {getSurnameAndName(user?.user_full_name)}
        </Text>
      </View>
    </View>
  )
}

export default Header
