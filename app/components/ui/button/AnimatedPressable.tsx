import cn from 'clsx'
import React, { FC, ReactNode, useRef } from 'react'
import { Animated, Pressable, Text, View, ViewStyle } from 'react-native'

type AnimatedPressableProps = {
  children: ReactNode
  className?: string
  bg?: string
  bgPressed?: string
}

const AnimatedPressable: FC<AnimatedPressableProps> = ({
  children,
  className,
  bg,
  bgPressed
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

  return (
    <Pressable className={cn('flex-row', className)}>
      {({ pressed }) => {
        return (
          <View
            className={cn(
              'flex-1 rounded-2xl p-4 items-center justify-around',
              // className
            )}
            style={{ backgroundColor: pressed ? bgPressed : bg } as ViewStyle}
          >
            {children}
          </View>
        )
      }}
    </Pressable>
  )
}

export default AnimatedPressable
