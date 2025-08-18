import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'

type Props = {}

const Equipment = (props: Props) => {
  const { width } = Dimensions.get('window')
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      {/* <Text>Equipment</Text> */}
      <Image
        source={require('@/assets/14.png')}
        style={{
          width: width * 1.1,
          height: (720 / 440) * (width * 1),
          resizeMode: 'contain'
        }}
      />
    </View>
  )
}

export default Equipment
