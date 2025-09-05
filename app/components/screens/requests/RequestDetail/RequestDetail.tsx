import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React, { useRef } from 'react'
import { Alert, Animated, Pressable, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger
} from '@/components/ui/accordion'
import BaseAccordion from '@/components/ui/accordion/BaseAccardion'
import AnimatedPressable from '@/components/ui/button/AnimatedPressable'
import { Divider } from '@/components/ui/divider'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Icon,
  TrashIcon
} from '@/components/ui/icon'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { open2GIS } from '@/services/maps/open2gis'

import { COLORS } from '@/constants/colors'

type Props = {}

const RequestDetail = (props: Props) => {
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

      <View className='px-4 h-full pt-3 gap-3'>
        <BaseAccordion title='Данные клиента'>
          <Text>{request.client.name}</Text>
          <Text>{request.client.address}</Text>
          <Text>{request.client.problem}</Text>
        </BaseAccordion>

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
            <Pressable onPressIn={() => open2GIS()}>
              {({ pressed }) => (
                <Feather
                  name='external-link'
                  size={22}
                  style={[
                    { color: pressed ? COLORS.grayLight : '#007AFF' },
                    pressed &&
                      {
                        // backgroundColor: COLORS.grayDark,
                        // padding: 3,
                        // borderRadius: '7px'
                      }
                  ]}
                />
              )}
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
          {request.history.map((history, index) => (
            <View
              key={history.id}
              className={cn(
                'flex-row items-center justify-between pt-4 border-grayLight',
                request.length - 1 !== index && 'border-b pb-3'
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
    </Layout>
  )
}

export default RequestDetail
