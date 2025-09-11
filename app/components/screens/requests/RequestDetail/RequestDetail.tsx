import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import InfoAccordion from '@/components/ui/accordion/InfoAccordion'
import ActionButton from '@/components/ui/button/ActionButton'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { open2GIS } from '@/services/maps/open2gis'

import DeviceData from './DeviceData'
import ServiceHistory from './ServiceHistory'
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

          <ServiceHistory request={request} />

          <View className='gap-3'>
            <View className='flex-row gap-3'>
              <ActionButton
                icon='message-circle'
                color={COLORS.blue}
                bg='#fff'
                bgPressed={COLORS.grayLight}
                text={['Чат с', 'клиентом']}
              />
              <ActionButton
                icon='phone-call'
                color={COLORS.primary}
                bg='#fff'
                bgPressed={COLORS.grayLight}
                text={['Позвонить', 'клиенту']}
              />
            </View>
            <View className='flex-row'>
              <ActionButton
                icon='map'
                bg={COLORS.primary}
                bgPressed={COLORS.primaryDark}
                text={['Принять']}
              />
            </View>
            <View className='flex-row gap-3'>
              <ActionButton
                icon='corner-up-right'
                color='black'
                bg={COLORS.yellow}
                bgPressed={COLORS.yellowDark}
                text={['Перенос']}
              />
              <ActionButton
                icon='x-circle'
                bg={COLORS.red}
                bgPressed={COLORS.redDark}
                text={['Отменить']}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default RequestDetail
