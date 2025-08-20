import { Feather } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'
import cn from 'clsx'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

type Props = {}

const RequestDetail = (props: Props) => {
  const route = useRoute()
  const { goBack, navigate } = useTypedNavigation() 

  const serviceHistories = [
    {
      id: 1,
      date: '13 август 2023'
    },
    {
      id: 2,
      date: '19 ноябрь 2023'
    },
    {
      id: 3,
      date: '21 январь 2024'
    }
  ]
  return (
    <Layout>
      <View className='px-4 h-full pt-3 gap-3'>
        <View className='relative flex-row justify-between '>
          <Pressable onPress={() => goBack()}>
            <Feather name='chevron-left' size={30} className='-translate-x-2' />
            {/* <Feather name='chevron-left' size={30} className='absolute left-0' />  */}
          </Pressable>
          <View className='flex justify-center items-center'>
            <Text className='font-bold text-lg  '>Заявка №1564654</Text>
          </View>
        </View>

        <View className='bg-white p-4 rounded-2xl'>
          <View className='flex-row items-center border-b pb-4 border-gray-200'>
            <Feather name='user' size={22} style={{ color: '#15803d' }} />
            <Text className='font-bold ml-2 uppercase text-success-700 '>
              КЛИЕНТ
            </Text>
          </View>
          <Text className='text-lg mt-3 pl-3 border-l-4 border-green-700 ml-2'>
            Асрор Умаров
          </Text>
        </View>

        <View className='bg-white p-4 rounded-2xl'>
          <View className='flex-row items-center border-b pb-4 border-gray-200'>
            <Feather name='map-pin' size={22} style={{ color: '#15803d' }} />
            <Text className='font-bold ml-2 uppercase text-success-700'>
              АДРЕС
            </Text>
          </View>
          <View className='flex-row items-center justify-between pt-4'>
            <Text className='text-lg border-l-4 border-green-700 pl-3 ml-2'>
              Мкр. Аксай-4, дом 96, кв 10 Мкр.
            </Text>
            <Pressable onPress={() => navigate('Requests')}>
              <Feather
                name='external-link'
                size={22}
                style={{ color: '#0D99FF' }}
              />
            </Pressable>
          </View>
        </View>

        <View className='bg-white p-4 rounded-2xl'>
          <View className='flex-row items-center border-b pb-4 border-gray-200'>
            <Feather name='clock' size={22} style={{ color: '#15803d' }} />
            <Text className='font-bold ml-2 uppercase text-success-700'>
              ИСТОРИЯ ОБСЛУЖИВАНИЕ
            </Text>
          </View>
          {serviceHistories.map((history, index) => (
            <View
              key={history.id}
              className={cn(
                'flex-row items-center justify-between pt-4 border-gray-200',
                serviceHistories.length - 1 !== index && 'border-b pb-3'
              )}
            >
              <Text className='border-l-4 border-success-700 pl-3 ml-2'>
                {history.date}
              </Text>
              <Pressable onPress={() => navigate('Requests')}>
                <Feather name='chevron-right' size={22} />
              </Pressable>
            </View>
          ))}
        </View>

        <View className='gap-3'>
          <View className='flex-row gap-3'>
            <Pressable className='bg-white flex-1 rounded-2xl p-4 flex-row items-center justify-around'>
              <Feather
                name='message-circle'
                size={30}
                style={{ color: '#0D99FF' }}
              />
              <View className='flex-col items-center '>
                <Text className='font-bold text-[#0D99FF]'>Чат с</Text>
                <Text className='font-bold text-[#0D99FF]'>клиентом</Text>
              </View>
            </Pressable>
            <Pressable className='bg-white flex-1 rounded-2xl p-4 flex-row items-center justify-around'>
              <Feather
                name='phone-call'
                size={30}
                style={{ color: '#14AE5C' }}
              />
              <View className='flex-col items-center '>
                <Text className='font-bold text-[#14AE5C]'>Позвонить</Text>
                <Text className='font-bold text-[#14AE5C]'>клиенту</Text>
              </View>
            </Pressable>
          </View>
          <Pressable className=' bg-yellow-400 p-5 rounded-2xl  items-center'>
            <View className='flex-row gap-3 items-center'>
              <Feather name='map' size={30} />
              <Text className='text-base font-bold'>
                Принять заказ и поехать клиенту
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Layout>
  )
}

export default RequestDetail
