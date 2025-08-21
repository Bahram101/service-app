import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { ScrollView } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { TypeFeatherIconNames } from '@/types/icon.interface'

import { COLORS } from '@/constants/colors'

type DepartmentItem = {
  id: string
  name: string
  date: string
  icon: TypeFeatherIconNames
}

const Messages = () => {
  const { goBack, navigate } = useTypedNavigation()
  const departments: DepartmentItem[] = [
    {
      id: '1',
      name: 'Сервис',
      date: 'Сегодня',
      icon: 'settings'
    },
    {
      id: '2',
      name: 'Финансы',
      date: 'Сегодня',
      icon: 'dollar-sign'
    },
    {
      id: '3',
      name: 'Бухгалтерия',
      date: '17 август',
      icon: 'trending-up'
    },
    {
      id: '4',
      name: 'Hr',
      date: '16 август',
      icon: 'user'
    },
    {
      id: '5',
      name: 'Администрация',
      date: '15 август',
      icon: 'monitor'
    },
    {
      id: '6',
      name: 'Маркетинг',
      date: '8 август',
      icon: 'bar-chart'
    },
    {
      id: '7',
      name: 'Crm',
      date: '5 август',
      icon: 'credit-card'
    },
    {
      id: '8',
      name: 'Call-center',
      date: '4 август',
      icon: 'headphones'
    },
    {
      id: '9',
      name: 'Логистика',
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
            {departments.map((item, index) => (
              <Pressable
                key={item.id}
                className={cn(
                  'border-gray-200 p-4 flex-row justify-between items-center',
                  departments.length - 1 !== index && 'border-b'
                )}
                onPress={() =>
                  navigate('MessageDetail', { id: item.id, name: item.name })
                }
              >
                <View className='flex-row items-center'>
                  <Feather
                    name={item.icon}
                    size={30}
                    style={{ color: COLORS.green }}
                  />
                  <View className='flex-col ml-4'>
                    <Text className='text-lg text-primary mb-1'>
                      {item.name.toUpperCase()}
                    </Text>
                    <Text className='text-xs text-gray-400'>
                      Описание уведомлении
                    </Text>
                  </View>
                </View>
                <Text className='text-gray-600'>{item.date}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default Messages
