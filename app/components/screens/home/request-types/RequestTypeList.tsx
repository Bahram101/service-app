import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { Loader } from '@/components/ui/Loader'
import { List } from '@/components/ui/list/List'

type Props = {}

const RequestTypeList = (props: Props) => {
  const [isLoading] = useState(false)

  const requests = [
    {
      id: 'a1',
      number: 1564654,
      title: 'Аппарат не работает',
      category: 'replace_cartridge',
      date: '2025-08-13',
      timeFrom: '11:00',
      timeTo: '11:40',
      address: 'Мкр. Манир-4, дом 138',
      scheme: 'green',
      icon: 'settings'
    },
    {
      id: 'a2',
      number: 1564674,
      title: 'Замена картриджа',
      category: 'install_system',
      date: '2025-08-13',
      timeFrom: '11:40',
      timeTo: '12:20',
      address: 'Мкр. Акжай-4, дом 96, кв 10',
      scheme: 'blue',
      icon: 'tool'
    },
    {
      id: 'a3',
      number: 15646532,
      title: 'Потоп',
      category: 'replace_cartridge',
      date: '2025-08-13',
      timeFrom: '11:00',
      timeTo: '11:40',
      address: 'Мкр. Таугуль-2, дом 17',
      scheme: 'green',
      icon: 'trending-down'
    },
    {
      id: 'a4',
      number: 1564854,
      title: 'С аппарата течет',
      category: 'leak',
      date: '2025-08-13',
      timeFrom: '11:00',
      timeTo: '11:40',
      address: 'Мкр. Манир-4, дом 138',
      scheme: 'red',
      icon: 'droplet'
    },
    {
      id: 'a5',
      number: 1564353,
      title: 'Поиск по адресу',
      category: 'address_search',
      date: '2025-08-13',
      timeFrom: '10:00',
      timeTo: '10:30',
      address: 'ул. Абая, 25',
      scheme: 'purple',
      icon: 'search'
    }
  ]

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <View className='mt-4'>
        <Text className='text-2xl text-bold font-bold mb-4'>
          Виды заявки на сегодня
        </Text>
      </View>
      <List requests={requests || []} />
    </>
  )
}

export default RequestTypeList
