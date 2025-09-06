import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import BaseAccordion from '@/components/ui/accordion/BaseAccardion'
import AnimatedPressable from '@/components/ui/button/AnimatedPressable'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { open2GIS } from '@/services/maps/open2gis'

import { COLORS } from '@/constants/colors'

const RequestDetail = () => {
  const { goBack, navigate } = useTypedNavigation()

  const request = {
    client: {
      name: 'Асрор Умаров',
      address: 'Мкр. Аксай-4, дом 96, кв 10',
      problem: 'Устранить проблемы'
    },
    service: ['Замена картриджа', 'Замена помпы', 'Устранить проблемы'],
    device: {
      id: '4635-001495',
      product: 'CEBILON DIGITAL UNIQUE',
      sn: '348045',
      date: '2017-10-11'
    },
    history: [
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
  }

  return (
    <Layout>
      <Heading backIcon={true}>Заявка №1564654</Heading>
      <ScrollView 
      className='min-h-full'
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ paddingBottom: 70, flexGrow: 1 }}
      >
        <View className='px-4 h-full pt-3 gap-3'>
          <BaseAccordion title='Данные клиента' icon='user'>
            <Text>{request.client.name}</Text>
            <Text>{request.client.address}</Text>
            <Text>{request.client.problem}</Text>
          </BaseAccordion>

          <BaseAccordion title='Вид сервиса' icon='settings'>
            <Text>{request.service[0]}</Text>
            <Text>{request.service[1]}</Text>
            <Text>{request.service[2]}</Text>
          </BaseAccordion>

          <BaseAccordion title='Данные аппарата' icon='alert-circle'>
            <Text>{request.service[0]}</Text>
            <Text>{request.service[1]}</Text>
            <Text>{request.service[2]}</Text>
          </BaseAccordion>

          <View className='gap-3'>
            <View className='flex-row gap-3'>
              <AnimatedPressable
                bg={COLORS.blue}
                bgPressed={COLORS.blueDark}
                className='flex-1'
              >
                <View className='flex-row gap-3 items-center'>
                  <Feather
                    name='message-circle'
                    size={30}
                    style={{ color: 'white' }}
                  />
                  <View className='flex-col items-center'>
                    <Text className='font-bold text-white'>Чат с</Text>
                    <Text className='font-bold text-white'>клиентом</Text>
                  </View>
                </View>
              </AnimatedPressable>
              <AnimatedPressable
                bg={COLORS.primary}
                bgPressed={COLORS.primaryDark}
                className='flex-1'
              >
                <View className='flex-row gap-3 items-center'>
                  <Feather
                    name='phone-call'
                    size={30}
                    style={{ color: 'white' }}
                  />
                  <View className='flex-col items-center'>
                    <Text className='font-bold text-white'>Позвонить</Text>
                    <Text className='font-bold text-white'>клиенту</Text>
                  </View>
                </View>
              </AnimatedPressable>
            </View>
            <AnimatedPressable bg={COLORS.yellow} bgPressed={COLORS.yellowDark}>
              <View className='flex-row gap-3 items-center'>
                <Feather name='map' size={24} color='black' />
                <Text className='text-black font-bold'>Принять</Text>
              </View>
            </AnimatedPressable>
          </View>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default RequestDetail
