import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

const Header: FC = () => {
  return (
    <View className='flex-row justify-between items-center '>
      <Text className='font-medium text-2xl'>Hello John Doe!</Text>
    </View>
  )
}

export default Header
