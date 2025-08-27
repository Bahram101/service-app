import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React from 'react'
import { Alert, Linking, Pressable, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

type Props = {}

const open2GIS = (address: string) => {
  const url = `dgis://2gis.ru/routeSearch/rsType/car/to/${encodeURIComponent(address)}`

  Linking.openURL(url).catch(() => {
    Alert.alert(
      'Ошибка',
      'Не удалось открыть 2GIS. Убедитесь, что приложение установлено.'
    )
  })
}

const RequestDetail = (props: Props) => {
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
      <Heading backIcon={true}>Заявка №1564654</Heading>
      <View className='px-4 h-full pt-3 gap-3'>
        <View className='bg-white p-4 rounded-2xl'>
          <View className='flex-row items-center border-b pb-4 border-grayLight'>
            <Feather name='user' size={22} style={{ color: '#15803d' }} />
            <Text className='font-bold ml-2 uppercase text-primary '>
              КЛИЕНТ
            </Text>
          </View>
          <Text className='text-lg mt-3 pl-3 border-l-4 border-primary ml-2'>
            Асрор Умаров
          </Text>
        </View>

        <View className='bg-white p-4 rounded-2xl'>
          <View className='flex-row items-center border-b pb-4 border-grayLight'>
            <Feather name='map-pin' size={22} style={{ color: '#15803d' }} />
            <Text className='font-bold ml-2 uppercase text-primary'>АДРЕС</Text>
          </View>
          <View className='flex-row items-center justify-between pt-4'>
            <Text className='text-lg border-l-4 border-primary pl-3 ml-2'>
              Мкр. Аксай-4, дом 96, кв 10 Мкр.
            </Text>
            <Pressable onPress={() => open2GIS('Мкр. Аксай-4, дом 96')}>
              <Feather
                name='external-link'
                size={22}
                style={{ color: '#007AFF' }}
              />
            </Pressable>
          </View>
        </View>

        <View className='bg-white p-4 rounded-2xl'>
          <View className='flex-row items-center border-b pb-4 border-grayLight'>
            <Feather name='clock' size={22} style={{ color: '#15803d' }} />
            <Text className='font-bold ml-2 uppercase text-primary'>
              ИСТОРИЯ ОБСЛУЖИВАНИЕ
            </Text>
          </View>
          {serviceHistories.map((history, index) => (
            <View
              key={history.id}
              className={cn(
                'flex-row items-center justify-between pt-4 border-grayLight',
                serviceHistories.length - 1 !== index && 'border-b pb-3'
              )}
            >
              <Text className='border-l-4 border-primary pl-3 ml-2'>
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
            <Pressable className='bg-blue flex-1 rounded-2xl p-4 flex-row items-center justify-around'>
              <Feather
                name='message-circle'
                size={30}
                style={{ color: 'white' }}
              />
              <View className='flex-col items-center '>
                <Text className='font-bold text-white'>Чат с</Text>
                <Text className='font-bold text-white'>клиентом</Text>
              </View>
            </Pressable>
            <Pressable className='bg-primary flex-1 rounded-2xl p-4 flex-row items-center justify-around'>
              <Feather name='phone-call' size={30} style={{ color: 'white' }} />
              <View className='flex-col items-center '>
                <Text className='font-bold text-white'>Позвонить</Text>
                <Text className='font-bold text-white'>клиенту</Text>
              </View>
            </Pressable>
          </View>
          <Pressable className=' bg-yellow-400 p-5 rounded-2xl items-center'>
            <View className='flex-row gap-3 items-center'>
              <Feather name='map' size={30} />
              <Text className='text-base font-bold'>Принять</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Layout>
  )
}

export default RequestDetail
