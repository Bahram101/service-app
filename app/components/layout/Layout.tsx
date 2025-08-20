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
      <View className='bg-[#eaeaea] '>
        {/* <View className='px-4 h-full pt-2'> */}
        {children}
        {/* </View> */}
      </View>
    </View>
  )
}

export default Layout
