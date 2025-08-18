import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MenuItem from './MenuItem'
import { menuItems } from './menu-data'
import { TypeNavigate } from './menu.interface'

interface IButtonMenu {
  nav: TypeNavigate
  currentRoute?: string
}

const BottomMenu: FC<IButtonMenu> = props => {
  const { bottom } = useSafeAreaInsets()

  return (
    <View
      className='flex-row border-t border-t-[#] bg-mainGreen rounded-3xl'
      style={{ paddingBottom: bottom }}
    >
      {menuItems.map((item, index) => {
        return (
          <MenuItem
            key={index}
            item={item}
            currentRoute={props.currentRoute}
            nav={props.nav}
          />
        )
      })}
    </View>
  )
}

export default BottomMenu
