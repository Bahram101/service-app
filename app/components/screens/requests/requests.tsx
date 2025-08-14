import React from 'react'
import { Text, View } from 'react-native'
import { useGetAllRequests } from './useGetAllRequests'

type Props = {}

const Requests = (props: Props) => {
  const {requests, isLoading} = useGetAllRequests()
  // console.log(requests, JSON.stringify(isLoading, null, 2))
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text>Reaquests</Text>
    </View>
  )
}

export default Requests
