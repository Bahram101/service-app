import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'

import { TypeRootStackParamList } from '@/navigation/navigation.types'

type MessageDetailRoutProp = RouteProp<TypeRootStackParamList, 'MessageDetail'>

type Props = {}

const MessageDetail = (props: Props) => {
  const { params } = useRoute<MessageDetailRoutProp>()

  return (
    <Layout>
      <Heading backIcon={true}>{params && params.name}</Heading>
      <View className='px-4 h-full pt-3'>
        <Text>asdf</Text>
      </View>
    </Layout>
  )
}

export default MessageDetail
