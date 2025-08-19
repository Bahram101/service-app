import { Feather, Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, View } from 'react-native'

import { useAuth } from '@/hooks/useAuth'

import { getSurnameAndName } from '@/utils/helpers'

const Header: FC = () => {
  const { user } = useAuth()
  return (
    <View className='flex-row justify-between items-center pb-4 px-4 rounded-bl-2xl rounded-br-2xl '>
      <View className='font-medium text-2xl flex-row'>
        <Feather name='user' size={22} />
        <Text className='pl-4 font-bold text-xl text-gray-700'>
          {getSurnameAndName(user?.user_full_name)}
        </Text>
      </View>
    </View>
  )
}

export default Header
