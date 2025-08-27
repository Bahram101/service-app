import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React, { FC, memo } from 'react'
import { Pressable, PressableStateCallbackType, Text, View } from 'react-native'

import { IMenuItem, TypeNavigate } from './menu.interface'
import { COLORS } from '@/constants/colors'

interface MenuItemProps {
  item: IMenuItem
  nav: TypeNavigate
  currentRoute?: string
}

const MenuItem: FC<MenuItemProps> = ({ item, nav, currentRoute }) => {
  const isActive = currentRoute === item.path

  return (
    <Pressable
      onPress={() => {
        if (item.path && !isActive) {
          nav(item.path)
        }
      }}
      className='w-[20%] h-[70px] '
    >
      {({ pressed }: PressableStateCallbackType) => (
        <View
          className={cn(
            'flex justify-center items-center h-full',
            pressed ? 'bg-gray-100' : 'bg-transparent'
          )}
        >
          <Feather
            className='mb-1'
            name={item.iconName}
            size={item.iconName === 'message-circle' ? 25 : 23}
            color={isActive ? COLORS.green : COLORS.grayDark}
          />
          <Text
            className={cn(
              'text-xs ',
              isActive ? 'text-primary' : 'text-grayDark'
            )}
          >
            {item.label}
          </Text>
        </View>
      )}
    </Pressable>
  )
}

export default memo(MenuItem)
