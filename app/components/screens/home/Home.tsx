import React from 'react'
import { Image, Text, View } from 'react-native'
import { Dimensions } from 'react-native'

import { useGetAllRequests } from '../Requests/useGetAllRequests'

const Home = () => {
  const { requests, isLoading } = useGetAllRequests()
  const { width } = Dimensions.get('window')
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      {/* <Text>Home</Text> */}
      <Image
        source={require('@/assets/home.png')}
        style={{
          width: width * 1.1, // почти на весь экран
          height: (720 / 440) * (width * 1), // сохраняем пропорции
          resizeMode: 'contain'
        }}
      />
    </View>
  )
}

export default Home
