import cn from 'clsx'
import React from 'react'
import { Dimensions, Image, Pressable, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'

type Props = {}

const Equipment = (props: Props) => {
  const { width } = Dimensions.get('window')

  const equipments = [
    {
      id: 1,
      name: 'ПОМПА',
      qty: '7'
    },
    {
      id: 2,
      name: 'Кран чистой воды',
      qty: '13'
    },
    {
      id: 3,
      name: 'Бак накопительный',
      qty: '4'
    },
    {
      id: 4,
      name: 'Мембрана',
      qty: '28'
    },
    {
      id: 5,
      name: 'Соединения и фитинги',
      qty: '1'
    },
    {
      id: 6,
      name: 'Ключи для колб',
      qty: '67'
    },
    {
      id: 7,
      name: 'Сливной хомут',
      qty: '34'
    }
  ]
  return (
    <Layout>
      <Heading>Инвентарь</Heading>
      <View className='px-4 h-full pt-4 gap-3'>
        <View className='rounded-2xl bg-white'>
          {equipments.map((item, index) => (
            <View
              key={item.id}
              className={cn(
                'border-gray-200 p-4 flex-row justify-between items-center',
                equipments.length - 1 !== index && 'border-b'
              )}
            >
              <View className='flex-col'>
                <Text className='text-lg text-baseGreen mb-1'>
                  {item.name.toUpperCase()}
                </Text>
                <Text className='text-xs text-gray-400'>
                  КОД ТОВАРА: ПМ-2531
                </Text>
              </View>
              <Text
                className={cn(
                  'font-bold ',
                  Number(item.qty) < 5 ? 'text-red-500' : ''
                )}
              >
                {item.qty} шт.
              </Text>
            </View>
          ))}
        </View>
        <Pressable className='bg-baseGreen rounded-2xl p-4'>
          <Text className='text-white text-xl font-bold text-center'>
            Заказать запчасти
          </Text>
        </Pressable>
      </View>
    </Layout>
  )
}

export default Equipment
