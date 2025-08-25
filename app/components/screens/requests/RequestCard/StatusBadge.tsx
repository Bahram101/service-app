import cn from 'clsx'
import React, { FC } from 'react'
import { Text, View } from 'react-native'

import { IRequest } from '@/types/request.interface'

import { getStatusMeta } from '@/utils/status.helper'

type StatusBadgeProps = Pick<IRequest, 'status'>

const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  return (
    <View className='flex-row items-center'>
      <Text className={cn('text-sm mr-2', getStatusMeta(status).text)}>
        {getStatusMeta(status).label}
      </Text>
      <View
        className={cn(
          'w-6 h-6 rounded-full justify-center items-center ml-2',
          getStatusMeta(status).bgOuter
        )}
      >
        <View
          className={cn(
            'w-4 h-4 rounded-full',
            getStatusMeta(status).bgInner
          )}
        />
      </View>
    </View>
  )
}

export default StatusBadge
