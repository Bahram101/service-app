import React, { FC } from 'react'
import { Text } from 'react-native'

import BaseAccordion from '@/components/ui/accordion/BaseAccordion'

import { TypeFeatherIconNames } from '@/types/icon.interface'

type ClientInfoProps = {
  title: string
  icon: TypeFeatherIconNames
  request: any
}

const ClientInfo: FC<ClientInfoProps> = ({ title, request, icon }) => {
  return (
    <BaseAccordion title={title} icon={icon}>
      <Text>{request.client.name}</Text>
      <Text>{request.client.address}</Text>
      <Text>{request.client.problem}</Text>
    </BaseAccordion>
  )
}

export default ClientInfo
