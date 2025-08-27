import React, { FC } from 'react'
import { Platform, Text, View } from 'react-native'
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

  const isAndroid = Platform.OS === 'android'
  const isIOS = Platform.OS === 'ios'
  return (
    <View
      className='flex-row border-t border-grayLight' 
      style={{
        paddingBottom: isIOS ? bottom - 10 : isAndroid ? bottom + 12 : 0
      }}
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
