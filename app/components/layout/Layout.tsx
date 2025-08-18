import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { ScrollView, View } from 'react-native'

interface ILayout {
  children: React.ReactNode
  className?: string
}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, className }) => {
  return (
    <View className={cn('flex w-full h-full bg-white pt-16 px-4', className)}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        {children}
        {/* </ScrollView> */}
    </View>
  )
}

export default Layout
