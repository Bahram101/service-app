import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'

import { useGetAllRequests } from './useGetAllRequests'

type Props = {}

const Requests = (props: Props) => {
  const { requests, isLoading } = useGetAllRequests()
  // console.log('requests', requests, isLoading)
  const { width } = Dimensions.get('window')
  console.log('requests')
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      {/* <Text>Requests</Text> */}
      <Image
        source={require('@/assets/16.png')}
        style={{
          width: width * 1.1,  
          height: (720 / 440) * (width * 1), 
          resizeMode: 'contain'
        }}
      />
    </View>
  )
}

export default Requests
