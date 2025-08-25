import cn from 'clsx'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'
 
import { getStatusColor, StatusText } from '@/utils/status.helper'

type Props = {}
type Scheme = 'red' | 'blue' | 'green'

type StatItem = {
  id: string
  title: string
  value: number
  scheme: Scheme
  icon: 'doc' | 'check' | 'card'
}

const DATA: StatItem[] = [
  {
    id: 'active',
    title: 'Активные заявки на сегодня',
    value: 17,
    scheme: 'red',
    icon: 'doc'
  },
  {
    id: 'done',
    title: 'Выпол. заявки на сегодня',
    value: 7,
    scheme: 'blue',
    icon: 'check'
  },
  {
    id: 'total',
    title: 'Завершенные заявки на месяц',
    value: 32,
    scheme: 'green',
    icon: 'card'
  }
]

const Banner = (props: Props) => {
  const { width } = Dimensions.get('window')
  const H_PADDING = 16
  const GAP = 12
  const CARD_WIDTH = (width - H_PADDING * 2 - GAP * 2) / 3

  return (
    <View className='mt-4'>
      <View className='flex-row justify-between '>
        {DATA.map((item, index) => (
          <View
            key={item.id}
            style={{ width: CARD_WIDTH }}
            className='bg-white rounded-xl px-3 py-3 items-center justify-center'
          >
            <Text
              className='text-gray-900 text-xs mb-2 text-center items-center'
              numberOfLines={2}
            >
              {item.title}
            </Text>
            <Text
              className={cn(
                'font-semibold mt-1 text-5xl',
                getStatusColor(item.id as StatusText)
              )}
            >
              {item.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Banner
