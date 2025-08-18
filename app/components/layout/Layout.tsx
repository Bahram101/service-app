import { View } from 'react-native'
import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { ScrollView } from 'react-native'

interface ILayout {
  children: React.ReactNode
  className?: string
}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, className }) => {
  return (
    <View
      className={cn('flex w-full h-full bg-white mt-16 px-4 pt-4', className)}
    >
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </View>
  )
}

export default Layout
