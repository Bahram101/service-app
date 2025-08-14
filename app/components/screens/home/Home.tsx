import React from 'react'
import { Text, View } from 'react-native'

import { useGetAllRequests } from '../Requests/useGetAllRequests'

const Home = () => {
  const { requests, isLoading } = useGetAllRequests()

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text>Home</Text>
    </View>
  )
}

export default Home
