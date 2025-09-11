import React, { FC } from 'react'
import { Text } from 'react-native'

import { TypeFeatherIconNames } from '@/types/icon.interface'

import BaseAccordion from './BaseAccordion'

type InfoAccordionProps = {
  title: string
  icon: TypeFeatherIconNames
  items: (string | React.ReactNode)[]
  value?:string
}

const InfoAccordion: FC<InfoAccordionProps> = ({ title, icon, items,value }) => (
  <BaseAccordion title={title} icon={icon} value={value}>
    {items.map((item, i) => (
      <Text key={i}>{item}</Text>
    ))}
  </BaseAccordion>
)
export default InfoAccordion
