import React, { FC } from 'react'
import { Text, View } from 'react-native'

import BaseAccordion from '@/components/ui/accordion/BaseAccordion'

import { TypeFeatherIconNames } from '@/types/icon.interface'

type DeviceDataProps = {
  request: any
  value?:string
}

const DeviceData: FC<DeviceDataProps> = ({ request, value }) => {
  return (
    <BaseAccordion title='Данные аппарата' icon='alert-circle' value={value}>
      <View className='flex-row gap-2'>
        <Text>Зав.№:</Text>
        <Text className='font-bold'>{request.device.id}</Text>
      </View>
      <View className='flex-row gap-2'>
        <Text>Продукт:</Text>
        <Text className='font-bold'>{request.device.product}</Text>
      </View>
      <View className='flex-row gap-2'>
        <Text>CN:</Text>
        <Text className='font-bold'>{request.device.cn}</Text>
      </View>
      <View className='flex-row gap-2'>
        <Text>Дата продажи:</Text>
        <Text className='font-bold'> {request.device.date}</Text>
      </View>
    </BaseAccordion>
  )
}

export default DeviceData
