import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'

import { COLORS } from '@/constants/colors'

type Props = {}

const Reports = (props: Props) => {
  const equipments = [
    {
      id: 1,
      name: 'СЕРВИС',
      date: 'Сегодня',
      icon: 'settings'
    },
    {
      id: 2,
      name: 'ФИНАНСЫ',
      date: 'Сегодня',
      icon: 'dollar-sign'
    },
    {
      id: 3,
      name: 'БУХГАЛТЕРИЯ',
      date: '17 август',
      icon:'trending-up'
    },
    {
      id: 4,
      name: 'HR',
      date: '16 август',
      icon: 'user'
    },
    {
      id: 5,
      name: 'АДМИНИСТРАЦИЯ',
      date: '15 август',
      icon: 'monitor'
    },
    {
      id: 6,
      name: 'МАРКЕТИНГ',
      date: '8 август',
      icon: 'bar-chart'
    },
    {
      id: 7,
      name: 'CRM',
      date: '5 август',
      icon: 'credit-card'
    },
    {
      id: 8,
      name: 'CALL-CENTER',
      date: '4 август',
      icon: 'headphones'
    },
    {
      id: 9,
      name: 'ЛОГИСТИКА',
      date: '1 август',
      icon: 'truck'
    }
  ]
  return (
    <Layout>
      <Heading>Сообщения</Heading>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ paddingBottom: 70 }}
      >
        <View className='px-4  pt-4 gap-3 '>
          <View className='rounded-2xl bg-white'>
            {equipments.map((item, index) => (
              <View
                key={item.id}
                className={cn(
                  'border-gray-200 p-4 flex-row justify-between items-center',
                  equipments.length - 1 !== index && 'border-b'
                )}
              >
                <View className='flex-row items-center'>
                  <Feather
                    name={item.icon}
                    size={30}
                    style={{ color: COLORS.green }}
                  />
                  <View className='flex-col ml-4'>
                    <Text className='text-lg text-baseGreen mb-1'>
                      {item.name.toUpperCase()}
                    </Text>
                    <Text className='text-xs text-gray-400'>
                      Описание уведомлении
                    </Text>
                  </View>
                </View>
                <Text className='text-gray-600'>{item.date}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default Reports
