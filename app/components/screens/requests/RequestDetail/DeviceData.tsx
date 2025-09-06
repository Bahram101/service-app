import React, { FC } from 'react'
import { Text } from 'react-native'

import BaseAccordion from '@/components/ui/accordion/BaseAccordion'

import { TypeFeatherIconNames } from '@/types/icon.interface'

type DeviceDataProps = {
  title: string
  icon: TypeFeatherIconNames
  request: any
}

const DeviceData: FC<DeviceDataProps> = ({ title, icon, request }) => {
  return (
    <BaseAccordion title={title} icon={icon}>
      <Text>{request.service[0]}</Text>
      <Text>{request.service[1]}</Text>
      <Text>{request.service[2]}</Text>
    </BaseAccordion>
  )
}

export default DeviceData
