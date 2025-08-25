import cn from 'clsx'
import React, { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IRequest } from '@/types/request.interface'

import RequestHeader from './RequestHeader'
import RequestInfo from './RequestInfo'
import StatusBadge from './StatusBadge'

export type RequestCardProps = {
  item: IRequest
  tabIndex: number
}

const RequestCard: FC<RequestCardProps> = ({ item, tabIndex }) => {
  const { navigate } = useTypedNavigation()
  console.log('item', JSON.stringify(item, null, 2))
  return (
    <Pressable
      className='bg-white mt-3 rounded-2xl p-4'
      onPress={() => navigate('RequestDetail', { id: item.id })}
    >
      <RequestHeader item={item} tabIndex={tabIndex} />
      <View className='flex-row justify-between'>
        <RequestInfo item={item} tabIndex={tabIndex} />
        {tabIndex === 0 && (
          <View className='flex-col-reverse'>
            <StatusBadge status={item.status} />
          </View>
        )}
      </View>
    </Pressable>
  )
}

export default RequestCard
