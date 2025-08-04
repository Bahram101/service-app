import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React, { FC, memo } from 'react'
import { Pressable, View } from 'react-native'

import { IMenuItem, TypeNavigate } from './menu.interface'
import { COLORS } from '@/constants/colors'

interface MenuItemProps {
  item: IMenuItem
  nav: TypeNavigate
  currentRoute?: string
}

const MenuItem: FC<MenuItemProps> = memo(({ item, nav, currentRoute }) => {
  const isActive = currentRoute === item.path
  console.log('menu')
  console.log('item',item)

  return (
    <Pressable
      onPress={() => {
        if (item.path && item.path !== currentRoute) {
          nav(item.path)
        }
      }}
      className='w-[20%] h-[70px]'
    >
      {({ pressed }) => (
        <View
          className={cn(
            'flex justify-center items-center h-full',
            pressed ? 'bg-gray-100' : 'bg-transparent'
          )}
        >
          <Feather
            name={item.iconName}
            size={26}
            color={isActive ? COLORS.primary : COLORS.gray}
          />
        </View>
      )}
    </Pressable>
  )
})

export default MenuItem
