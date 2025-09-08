import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import BaseAccordion from '@/components/ui/accordion/BaseAccordion'
import InfoAccordion from '@/components/ui/accordion/InfoAccordion'
import AnimatedPressable from '@/components/ui/button/AnimatedPressable'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { open2GIS } from '@/services/maps/open2gis'

import DeviceData from './DeviceData'
import { COLORS } from '@/constants/colors'
import ServiceHistory from './ServiceHistory'

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
      cn: '348045',
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
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        <View className='px-4 h-full pt-3 gap-3'>
          <InfoAccordion
            title='Данные клиента'
            icon='user'
            items={[
              request.client.name,
              request.client.address,
              request.client.problem
            ]}
          />

          <InfoAccordion
            title='Вид сервиса'
            icon='settings'
            items={request.service}
          />

          <DeviceData request={request} />

          <ServiceHistory request={request}/>

          <View className='gap-3'>
            <View className='flex-row gap-3'>
              <AnimatedPressable
                bg='#fff'
                bgPressed={COLORS.grayLight}
                className='flex-1'
              >
                <View className='flex-row gap-2 items-center'>
                  <Feather
                    name='message-circle'
                    size={30}
                    color={COLORS.blue}
                  />
                  <View className='flex-col items-center'>
                    <Text className='font-semibold text-blue'>Чат с</Text>
                    <Text className='font-semibold text-blue'>клиентом</Text>
                  </View>
                </View>
              </AnimatedPressable>

              <AnimatedPressable
                bg='#fff'
                bgPressed={COLORS.grayLight}
                className='flex-1'
              >
                <View className='flex-row gap-2 items-center'>
                  <Feather name='phone-call' size={30} color={COLORS.primary} />
                  <View className='flex-col items-center'>
                    <Text className='font-semibold text-primary'>
                      Позвонить
                    </Text>
                    <Text className='font-semibold text-primary'>клиенту</Text>
                  </View>
                </View>
              </AnimatedPressable>
            </View>

            <AnimatedPressable
              bg={COLORS.primary}
              bgPressed={COLORS.primaryDark}
            >
              <View className='flex-row gap-3 items-center'>
                <Feather name='map' size={24} color='white' />
                <Text className='text-white font-semibold py-3'>Принять</Text>
              </View>
            </AnimatedPressable>

            <View className='flex-row gap-3'>
              <AnimatedPressable
                bg={COLORS.yellow}
                bgPressed={COLORS.yellowDark}
                className='flex-1'
              >
                <View className='flex-row gap-2 items-center'>
                  <Feather name='message-circle' size={30} />
                  <View className='flex-col items-center'>
                    <Text className='font-semibold'>Перенос</Text>
                  </View>
                </View>
              </AnimatedPressable>

              <AnimatedPressable
                bg={COLORS.red}
                bgPressed={COLORS.redDark}
                className='flex-1'
              >
                <View className='flex-row gap-2 items-center'>
                  <Feather name='x-circle' size={30} color='white' />
                  <View className='flex-col items-center'>
                    <Text className='font-semibold text-white'>Отменить</Text>
                  </View>
                </View>
              </AnimatedPressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default RequestDetail
