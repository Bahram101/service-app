import cn from 'clsx'
import React, { FC, ReactNode, useRef } from 'react'
import { Animated, Pressable, Text, View } from 'react-native'

type AnimatedPressableProps = {
  children: ReactNode
  className?: string
}

const AnimatedPressable: FC<AnimatedPressableProps> = ({
  children,
  className
}) => {
  const scale = useRef(new Animated.Value(1)).current
  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95, // чуть уменьшаем
      useNativeDriver: true
    }).start()
  }

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1, // возвращаем обратно
      friction: 3,
      useNativeDriver: true
    }).start()
  }

  console.log('child', children)

  return (
    <Pressable className='flex-1'>
      {({ pressed }) => (
        <View className={cn(className, pressed && 'bg-blueDark')}>
          {children}
        </View>
      )}
    </Pressable>
  )
}

export default AnimatedPressable
