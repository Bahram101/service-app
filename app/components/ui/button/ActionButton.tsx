import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, View } from 'react-native'

import { TypeFeatherIconNames } from '@/types/icon.interface'

import AnimatedPressable from './AnimatedPressable'

type ActionButtonProps = {
  icon: TypeFeatherIconNames
  color?: string
  text: string | string[]
  bg: string
  bgPressed: string
}

const ActionButton: FC<ActionButtonProps> = ({
  icon,
  color = 'white',
  text,
  bg,
  bgPressed
}) => (
  <AnimatedPressable bg={bg} bgPressed={bgPressed} className='flex-1'>
    <View className='flex-row gap-2 items-center'>
      <Feather name={icon} size={30} color={color} />
      <View className='flex-col items-center'>
        {Array.isArray(text) &&
          text.map((t, i) => (
            <Text key={i} className='font-semibold' style={{ color }}>
              {t}
            </Text>
          ))}
      </View>
    </View>
  </AnimatedPressable>
)

export default ActionButton
