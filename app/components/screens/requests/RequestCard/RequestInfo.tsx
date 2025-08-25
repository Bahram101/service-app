import { Feather } from '@expo/vector-icons'
import React, { FC, Fragment } from 'react'
import { Text, View } from 'react-native'

import { IRequest } from '@/types/request.interface'

import { getPaymentLabel } from '@/utils/status.helper'

import { COLORS } from '@/constants/colors'

type RequestInfoProps = {
  item: Pick<IRequest, 'date' | 'time' | 'address' | 'paymentType'>
  tabIndex: number
}

const RequestInfo: FC<RequestInfoProps> = ({
  item: { date, time, address, paymentType },
  tabIndex
}) => {
  return (
    <View className='flex-row items-start gap-3 border-l-4 border-primary pl-3'>
      <View className='gap-2'>
        {tabIndex === 0 && (
          <>
            <Text>{date}</Text>
            <Text>{time}</Text>
          </>
        )}
        <View className='flex-row mb-1'>
          <Feather name='map-pin' size={18} color={COLORS.grayDark} />
          <Text className='ml-2'>{address}</Text>
        </View>
        {tabIndex === 1 && (
          <View className='flex-row'>
            <Feather name={'credit-card'} size={18} color={COLORS.grayDark} />
            <Text className='ml-2'>{getPaymentLabel(paymentType)}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default RequestInfo
