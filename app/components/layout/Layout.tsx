import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { ScrollView, View } from 'react-native'

interface ILayout {
  children: React.ReactNode
  className?: string
}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, className }) => {
  return (
    <View className={cn('flex w-full h-full pt-16 bg-white', className)}>
      <View className='bg-[#eaeaea]'>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          {children}
        {/* </ScrollView> */}
      </View>
    </View>
  )
}

export default Layout
