import React, { FC } from 'react'
import { Text } from 'react-native'

import BaseAccordion from '@/components/ui/accordion/BaseAccordion'

type ServiceHistoryProps = {
  request: any
}

const ServiceHistory: FC<ServiceHistoryProps> = ({ request }) => {
  return (
    <BaseAccordion title='История обслуживания' icon='clock'>
      {request.history.map((item:any, i:number) => (
        <Text key={i}>{item.date}</Text>
      ))}
    </BaseAccordion>
  )
}

export default ServiceHistory
