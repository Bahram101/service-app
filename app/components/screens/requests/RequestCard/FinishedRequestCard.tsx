import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React, { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IRequest } from '@/types/request.interface'

import { COLORS } from '@/constants/colors'

type DoneRequestCardProps = {
  item: IRequest
}

const DoneRequestCard: FC<DoneRequestCardProps> = ({ item }) => {
  return (
    <View className='bg-white mt-3 rounded-2xl p-4'>
      <View className='flex-row justify-between items-center'>
        <View className='flex-row items-center'>
          <Feather name='settings' size={22} color={COLORS.grayDark} />
          <Text className='ml-2'>{item.title}</Text>
        </View>
        <View className='flex-col-reverse'>
          <Text>3 шт</Text>
        </View>
      </View>
    </View>
  )
}

export default DoneRequestCard
