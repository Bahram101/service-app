import { Feather } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Pressable } from 'react-native'

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
      onPress={() => (item.path ? nav(item.path) : null)}
      className='items-center w-[20%]'
    >
      <Feather
        name={item.iconName}
        size={26}
        color={isActive ? COLORS.primary : COLORS.gray}
      />
    </Pressable>
  )
}

export default MenuItem
