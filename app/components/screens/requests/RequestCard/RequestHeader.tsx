import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React, { FC } from 'react'
import { Text, View } from 'react-native'

import { IRequest } from '@/types/request.interface'

import { COLORS } from '@/constants/colors'

type RequestHeaderProps = {
  item: Pick<IRequest, 'title' | 'number'>
  tabIndex: number
}

const RequestHeader: FC<RequestHeaderProps> = ({
  item: { title, number },
  tabIndex
}) => {

  return (
    <View
      className={cn(
        'flex-row items-center mb-3 border-b border-gray-200 pb-3',
        tabIndex === 0 && 'justify-between'
      )}
    >
      <View className={cn('flex-row items-center')}>
        {tabIndex === 1 && (
          <Feather name='check' size={14} color={'white'} className='mr-2 bg-primary rounded-full p-1'/>
        )}
        {tabIndex === 0 && (
          <Text className='bg-gray-200 px-2 py-1 rounded-lg text-xs'>
            {title}
          </Text>
        )}
      </View>
      <Text className='text-sm font-semibold'>ЗАЯВКА № {number}</Text>
    </View>
  )
}

export default RequestHeader
